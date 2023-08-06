"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

function NavItem({ href, children }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className="text-l p-2  text-center">
      <Link
        className={` hover:text-slate-300 text-white ${
          isActive ? "font-bold" : ""
        }`}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
}

export default NavItem;
