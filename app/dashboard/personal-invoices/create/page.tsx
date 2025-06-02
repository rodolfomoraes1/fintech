import Form from "@/app/ui/personal-invoices/create-form";
import Breadcrumbs from "@/app/ui/personal-invoices/breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create invoices",
};

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Transações", href: "/dashboard/personal-invoices" },
          {
            label: "Criar Transação",
            href: "/dashboard/personal-invoices/create",
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}
