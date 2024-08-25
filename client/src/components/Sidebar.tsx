"use client";

import { Layout, LucideIcon, Menu } from "lucide-react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { useAppDispatch, useAppSelector } from "@/redux";
import { setIsSidebarCollapsed } from "@/redux/state";
import { sidebarLinks } from "@/mapping/sidebarLinks.mapping";

interface Props {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const SidebarLink = ({ href, icon: Icon, label, isCollapsed }: Props) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href}>
      <div
        className={clsx(
          "cursor-pointer flex items-center hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors",
          {
            ["justify-center py-4"]: isCollapsed,
            ["justify-start px-8 py-4"]: !isCollapsed,
            ["bg-blue-200 text-white"]: isActive,
          },
        )}
      >
        <Icon className={"w-6 h-6 !text-gray-700"} />
        <span
          className={clsx("font-medium text-gray-700", {
            ["hidden"]: isCollapsed,
            ["block"]: !isCollapsed,
          })}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

export const Sidebar = () => {
  const dispatch = useAppDispatch();
  const { isSidebarCollapsed } = useAppSelector((state) => state.global);

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  return (
    <div
      className={clsx(
        "fixed flex flex-col bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40",
        {
          ["w-0 md:w-16"]: isSidebarCollapsed,
          ["w-72 md:w-[17rem]"]: !isSidebarCollapsed,
        },
      )}
    >
      <div
        className={clsx(
          "flex gap-3 justify-between md:justify-normal items-center pt-8",
          {
            ["px-5"]: isSidebarCollapsed,
            ["px-8"]: !isSidebarCollapsed,
          },
        )}
      >
        <div>logo</div>
        <h1
          className={clsx("font-extrabold text-2xl uppercase", {
            ["hidden"]: isSidebarCollapsed,
            ["block"]: !isSidebarCollapsed,
          })}
        >
          oùesmastuff
        </h1>
        <button
          className={
            "md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          }
          onClick={toggleSidebar}
        >
          <Menu className={"w-4 h-4"} />
        </button>
      </div>
      <div className={"flex-grow mt-8"}>
        {sidebarLinks.map((link, index) => (
          <SidebarLink
            key={index}
            href={link.href}
            icon={link.icon}
            label={link.label}
            isCollapsed={isSidebarCollapsed}
          />
        ))}
      </div>
      <div
        className={clsx("mb-10", {
          ["hidden"]: isSidebarCollapsed,
          ["block"]: !isSidebarCollapsed,
        })}
      >
        <p className={"capitalize text-center text-xs text-gray-500"}>
          &copy; 2024 oùesmastuff
        </p>
      </div>
    </div>
  );
};
