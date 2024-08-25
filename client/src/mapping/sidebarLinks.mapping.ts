import {
  Archive,
  CircleDollarSign,
  Clipboard,
  Layout,
  LucideIcon,
  SlidersHorizontal,
  User,
} from "lucide-react";

type SidebarLinkType = {
  href: string;
  icon: LucideIcon;
  label: string;
};

export const sidebarLinks: SidebarLinkType[] = [
  {
    href: "/dashboard",
    icon: Layout,
    label: "Dashboard",
  },
  {
    href: "/expenses",
    icon: CircleDollarSign,
    label: "Expenses",
  },
  {
    href: "/inventory",
    icon: Archive,
    label: "Inventory",
  },
  {
    href: "/products",
    icon: Clipboard,
    label: "Products",
  },
  {
    href: "/users",
    icon: User,
    label: "Users",
  },
  {
    href: "/settings",
    icon: SlidersHorizontal,
    label: "Settings",
  },
];
