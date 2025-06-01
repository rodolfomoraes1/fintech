import { ArrowPathIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";
import { LatestInvoice } from "@/app/lib/definitions";
import { fetchLatestInvoices } from "@/app/lib/data";
import Card from "../components/card";

export default async function Summary() {
  const latestInvoices = await fetchLatestInvoices();

  return <Card>teste</Card>;
}
