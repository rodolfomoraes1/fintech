import Form from "@/app/ui/personal-invoices/edit-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchPersonalInvoiceById } from "@/app/lib/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit invoices",
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const [personalInvoice] = await Promise.all([fetchPersonalInvoiceById(id)]);

  if (!personalInvoice) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/personal-invoices" },
          {
            label: "Edit Invoice",
            href: `/dashboard/personal-invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form personalInvoice={personalInvoice} />
    </main>
  );
}
