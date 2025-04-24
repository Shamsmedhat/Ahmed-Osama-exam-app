"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { History, LogOut, LayoutPanelLeft } from "lucide-react";
import Image from "next/image";
import { signOut } from "next-auth/react";
import Logo from "../../../../public/assets/images/Final Logo 1.png";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutPanelLeft,
  },
  {
    title: "Quiz History",
    url: "/quizhistory",
    icon: History,
  },
  {
    title: "Log Out",
    url: "#",
    icon: LogOut,
  },
];

export default function AppSidebar() {
  const pathname = usePathname();

  const handleLogout = () => {
    signOut({ callbackUrl: "/auth/login" });
  };

  return (
    <div className="fixed top-0 left-0 bottom-0   z-50 px-5 pt-5">
      <div className="flex justify-center mb-5 py-3">
        <Image src={Logo} alt="Elevate Logo" priority width={120} height={40} />
      </div>
      <div className="flex flex-col gap-5">
        {items.map((item) => {
          const isActive = pathname === item.url;
          const isLogout = item.title === "Log Out";

          return (
            <div key={item.title}>
              {isLogout ? (
                // Logout Button
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 w-full text-xl py-2 px-8 rounded-lg bg-transparent text-[#696F79]"
                >
                  <item.icon className="text-main" />
                  <span>{item.title}</span>
                </button>
              ) : (
                // Links
                <Link
                  href={item.url}
                  className={`flex items-center gap-2 w-full text-xl py-2 px-8 rounded-lg transition-colors ${
                    isActive
                      ? "bg-main text-white font-bold"
                      : "bg-transparent text-[#696F79] "
                  }`}
                >
                  <item.icon className={isActive ? "text-white" : "text-main"} />
                  <span className={isActive ? "font-bold" : ""}>
                    {item.title}
                  </span>
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}