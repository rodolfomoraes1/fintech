"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import postgres from "postgres";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

const FormSchema = z.object({
  id: z.string(),
  receiverName: z
    .string()
    .min(1, { message: "Destinatário é mandatório." })
    .max(100, { message: "Destinatário deve possuir menos de 100 caracteres." })
    .regex(/^[a-zA-Z0-9\s.,'-]+$/, {
      message: "Destinatário possui caracteres inválidos.",
    })
    .transform((name) => name.trim()),
  amount: z.coerce.number().gt(0, { message: "Insira um valor maior que $0." }),
  type: z.enum(["deposito", "transferencia", "pagamento"], {
    invalid_type_error: "Selecione um tipo de transação.",
  }),
  date: z.string(),
});

const CreatePersonalInvoice = FormSchema.omit({ id: true, date: true });
const UpdatePersonalInvoice = FormSchema.omit({ id: true, date: true });

export type NewState = {
  errors?: {
    receiverName?: string[];
    amount?: string[];
    type?: string[];
  };
  message?: string | null;
};

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function createPersonalInvoice(
  prevState: State,
  formData: FormData
) {
  const validatedFields = CreatePersonalInvoice.safeParse({
    receiverName: formData.get("receiver_name"),
    amount: formData.get("amount"),
    type: formData.get("type"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }

  const { receiverName, amount, type } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split("T")[0];

  try {
    await sql`
      INSERT INTO personal_invoices (receiver_name, amount, type, date)
      VALUES (${receiverName}, ${amountInCents}, ${type}, ${date})
    `;
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Personal Invoice.",
    };
  } finally {
    revalidatePath("/dashboard/personal-invoices");
    redirect("/dashboard/personal-invoices");
  }
}

export async function deletePersonalInvoice(id: string) {
  try {
    await sql`DELETE FROM personal_invoices WHERE id = ${id}`;
  } catch (error) {
    console.error(error);
  } finally {
    revalidatePath("/dashboard/personal-invoices");
  }
}

export async function updatePersonalInvoice(
  id: string,
  prevState: State,
  formData: FormData
) {
  const validatedFields = UpdatePersonalInvoice.safeParse({
    receiverName: formData.get("receiver_name"),
    amount: formData.get("amount"),
    type: formData.get("type"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Update Personal Invoice.",
    };
  }

  const { receiverName, amount, type } = validatedFields.data;
  const amountInCents = amount * 100;

  try {
    await sql`
      UPDATE personal_invoices
      SET receiver_name = ${receiverName}, amount = ${amountInCents}, type = ${type}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: "Database Error: Failed to Update Personal Invoice." };
  } finally {
    revalidatePath("/dashboard/personal-invoices");
    redirect("/dashboard/personal-invoices");
  }
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
