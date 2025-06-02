import Pagination from "@/app/ui/personal-invoices/pagination";
import Search from "@/app/ui/components/search";
import { CreateInvoice } from "@/app/ui/personal-invoices/buttons";
import { InvoicesTableSkeleton } from "@/app/ui/components/skeletons";
import { Suspense } from "react";
import { fetchPersonalInvoicesPages } from "@/app/lib/data";
import { Metadata } from "next";
import InvoicesTable from "@/app/ui/personal-invoices/table";

export const metadata: Metadata = {
  title: "Invoices",
};

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchPersonalInvoicesPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Transações</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Buscar operações..." />
        <CreateInvoice />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <InvoicesTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
