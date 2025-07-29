import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { fetchLatestPersonalInvoicesByMonth } from "@/app/lib/data";
import dayjs from "dayjs";

export default async function Statistics() {
  const latestMonthInvoices = await fetchLatestPersonalInvoicesByMonth();

  const dayMap = new Map<number, number>();
  latestMonthInvoices.forEach((item) => {
    const day = dayjs(item.date).date();
    let value = Number(item.amount) / 100;
    if (item.type !== "deposito") value = -value;
    value = Number(value.toFixed(2));
    dayMap.set(day, (dayMap.get(day) || 0) + value);
  });

  const sortedDays = Array.from(dayMap.entries()).sort(([a], [b]) => a - b);

  let acumulado = 0;
  const dataset = sortedDays.map(([day, value]) => {
    acumulado += value;
    return { day, value: Number(acumulado.toFixed(2)) };
  });

  const monthLabel =
    latestMonthInvoices.length > 0
      ? dayjs(latestMonthInvoices[0].date).format("MM/YYYY")
      : "";

  return (
    <div className="flex w-full flex-col md:col-span-4 mb-10">
      <h2 className="mb-4 text-xl md:text-2xl">
        Evolução diária do mês mais recente
      </h2>
      <div className="bg-white rounded-xl p-4">
        <LineChart
          dataset={dataset}
          xAxis={[
            {
              id: "Dias",
              dataKey: "day",
              label: "Dia",
              scaleType: "linear",
              tickMinStep: 1,
            },
          ]}
          yAxis={[{ width: 70 }]}
          series={[
            {
              id: "valor",
              label: `Balanço acumulado: (${monthLabel})`,
              dataKey: "value",
              showMark: true,
            },
          ]}
          height={300}
        />
      </div>
    </div>
  );
}