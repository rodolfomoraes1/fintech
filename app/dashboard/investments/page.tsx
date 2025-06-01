import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investimentos",
};

export default function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Investimentos</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        Em construção
      </div>
    </div>
  );
}
