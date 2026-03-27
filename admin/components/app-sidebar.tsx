"use client";

import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Link from "next/link";

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent className="pl-10">
        <Link
          href="/dashboard/foods"
          className={`${pathname === "/dashboard/foods" && "bg-black text-white"}`}
        >
          foods
        </Link>
        <Link
          href="/dashboard/orders"
          className={`${pathname === "/dashboard/orders" && "bg-black text-white"}`}
        >
          orders
        </Link>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
