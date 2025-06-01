import Form from "@/app/ui/personal-invoices/create-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchCustomers } from "@/app/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create invoices",
};

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Movimentos", href: "/dashboard/personal-invoices" },
          {
            label: "Criar movimento",
            href: "/dashboard/personal-invoices/create",
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}
