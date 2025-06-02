import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { fetchCardData } from "@/app/lib/data";
import { Suspense } from "react";
import {
  CardsSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
  SummarySkeleton,
} from "@/app/ui/components/skeletons";
import CardWrapper from "@/app/ui/dashboard/card-wrapper";
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

      <>
        {/*
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Suspense fallback={<CardsSkeleton />}>
            <CardWrapper />
          </Suspense>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          <Suspense fallback={<RevenueChartSkeleton />}>
            <RevenueChart />
          </Suspense>
          <Suspense fallback={<LatestInvoicesSkeleton />}>
            <LatestInvoices />
          </Suspense>
        </div>
        */}
      </>
    </>
  );
}
