"use client";
import React from "react";
import {
  Home,
  Package,
  PlusSquare,
  Calendar,
  Archive,
  Link as LinkIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { NavButtons } from "@/lib/type";
import Link from "next/link";
import { useSidebar } from "@/context/SidebarContext";
const sidebarContent: Array<NavButtons> = [
  { title: "Home", icon: <Home />, href: "/dashboard" },
  { title: "My Capsules", icon: <Package />, href: "/my-capsules" },
  { title: "New Entry", icon: <PlusSquare />, href: "/new-entry" },
  { title: "Timeline", icon: <Calendar />, href: "/timeline" },
  { title: "Archive", icon: <Archive />, href: "/archive" },
];
function sidebar() {
  const pathname = usePathname();
  const isActive = (href: string) => {
    return pathname === href;
  };
  const { isOpen, toggleSidebar } = useSidebar();
  return (
    <>
      {isOpen && (
        <div
          className="sticky inset-0 bg-black/15 z-40 top-22.5"
          onClick={toggleSidebar}
        />
      )}
      <div
        className={cn(
          "sticky top-22.5 left-0 h-[100vh] w-[300px] bg-[var(--sidebar-bg)] py-10 transform transition-transform duration-300 z-40",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0 lg:static lg:block"
        )}
      >
        <div className="flex flex-col w-full items-start justify-center gap-4 p-6">
          {sidebarContent.map((content) => {
            return (
              <Link href={content.href} key={content.title} className="w-full">
                <div
                  key={content.title}
                  className={cn(
                    "text-(--primary-accent) font-extrabold text-2xl text-right hover:text-(--primary-accent-hover) cursor-pointer flex items-center gap-2 w-full px-2",
                    isActive(content.href)
                      ? "text-(--sidebar-active-text) bg-(--sidebar-active-bg) rounded-md"
                      : ""
                  )}
                >
                  {content.icon}
                  {content.title}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default sidebar;
