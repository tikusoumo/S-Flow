"use client";
import {
  CoinsIcon,
  HomeIcon,
  Layers2Icon,
  ShieldCheckIcon,
} from "lucide-react";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const routes = [
  {
    href: "",
    lable: "Home",
    icon: HomeIcon,
  },
  {
    href: "workflows",
    lable: "Workflows",
    icon: Layers2Icon,
  },
  {
    href: "credentials",
    lable: "Credentials",
    icon: ShieldCheckIcon,
  },
  {
    href: "billing",
    lable: "Billing",
    icon: CoinsIcon,
  },
];

export default function DesktopSidebar() {
  return (
    <div className="hidden lg:flex flex-col w-[250px] bg-white shadow-lg h-screen p-4">
      <span className="text-2xl font-bold  mb-4">
        <Logo />
      </span>
      <div className="flex flex-col gap-2">
        {routes.map((route) => {
          const Icon = route.icon;
          return (
            <Link
              key={route.href}
              href={route.href}
              className={buttonVariants({})}
            >
              <Icon className="h-5 w-5 " />
              <span className="">{route.lable}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
