"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { act } from "react";
import { Category } from "../../types";
interface MainNavbarProps {
  data: Category[];
}

export default function MainNavbar({ data }: MainNavbarProps) {
  const pathname = usePathname();
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
  return (
    <div className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={`text-sm font-medium opacity-75 transition-colors hover:text-primary ${
            route.active ? "opacity-100" : "opacity-75"
          }`}
        >
          {route.label}
        </Link>
      ))}
    </div>
  );
}
