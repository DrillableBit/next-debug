"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

function MobileNavItem({ href, children }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link className={` ${isActive ? "font-bold" : ""}`} href={href}>
      <li className="cursor-pointer text-xl px-6 text-center py-5 hover:bg-white md:hover:bg-transparent hover:text-black">
        {children}
      </li>
    </Link>
  );
}

export default MobileNavItem;
