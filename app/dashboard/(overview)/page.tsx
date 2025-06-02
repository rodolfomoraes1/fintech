import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { Suspense } from "react";
import {
  LatestInvoicesSkeleton,
  SummarySkeleton,
} from "@/app/ui/components/skeletons";
import Summary from "@/app/ui/dashboard/summary";

export default async function Page() {
  return (
    <>
      <h1 className="mb-4 text-xl md:text-2xl">Dashboard</h1>

      <div className="flex flex-row justify-center mb-10">
        <Suspense fallback={<SummarySkeleton />}>
          <Summary />
        </Suspense>
      </div>

      <div className="flex flex-row justify-center mb-10">
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </>
  );
}
