import SideNav from "@/app/ui/dashboard/sidenav";
import { Metadata } from "next";
import Header from "../ui/components/header";
import { UserProvider } from "../context/userInfoContext";
import { Suspense } from "react";
import { HeaderSkeleton } from "../ui/components/skeletons";
import { ReduxProvider } from "../store/redux-provider/redux-provider";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <UserProvider>
        <Suspense fallback={<HeaderSkeleton />}>
          <Header />
        </Suspense>

        <div className="flex h-screen pt-16 bg-bgColors-paleGreen">
          <div className="hidden lg:flex flex-1 max-w-[calc((100%-1536px)/2)]"></div>
          <div className="flex w-full max-w-screen-2xl flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
              <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
              {children}
            </div>
          </div>
          <div className="hidden lg:flex flex-1 max-w-[calc((100%-1536px)/2)]"></div>
        </div>
      </UserProvider>
    </ReduxProvider>
  );
}
