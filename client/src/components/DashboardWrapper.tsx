"use client";

import clsx from "clsx";

import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import StoreProvider, { useAppSelector } from "@/redux";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  const { isSidebarCollapsed, isDarkMode } = useAppSelector(
    (state) => state.global,
  );

  return (
    <div
      className={clsx("flex bg-gray-50 text-gray-900 w-full min-h-screen", {
        ["dark"]: isDarkMode,
        ["light"]: !isDarkMode,
      })}
    >
      <Sidebar />
      <main
        className={clsx(
          "flex flex-col w-full h-full py-7 px-9 bg-gray-50 md:pl-72",
          {
            ["md:pl-24"]: isSidebarCollapsed,
          },
        )}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export const DashboardWrapper = ({ children }: Props) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};
