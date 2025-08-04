import { Metadata } from "next";
import "@/app/ui//styles/global.css";
import { inter } from "@/app/ui/styles/fonts";
import { Suspense } from "react";
import { Loading } from "../ui/components/loading";

export const metadata: Metadata = {
  title: {
    template: "Bytebank landingpage",
    default: "Bytebank Landing page",
  },
  description: "Página oficial do Bytebank.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <Suspense fallback={<Loading />}>
          <body className={`${inter.className} antialiased`}>{children}</body>
        </Suspense>
    </html>
  );
}
