"use client";
import { on } from "events";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useSidebar } from "@/context/SidebarContext";
export default function Navbar() {
  const { toggleSidebar } = useSidebar();
  const handleMenuClick = () => {
    toggleSidebar();
  };
  return (
    <>
      <div className="bg-(--navbar-bg)">
        <div className="flex justify-between py-6 px-8 max-w-(--my-max-width) mx-auto ">
          <div className="text-3xl font-black text-(--primary-accent) hover:text-(--primary-accent-hover) cursor-pointer flex items-center gap-4">
            <Menu
              className="inline cursor-pointer lg:hidden"
              onClick={handleMenuClick}
            />
            <Link href="/dashboard">
              <div>Time Capsule</div>
            </Link>
          </div>
          <div className="border rounded-full p-5 bg-[#D4A373] hover:text-(--primary-accent-hover) cursor-pointer"></div>
        </div>
      </div>
    </>
  );
}
