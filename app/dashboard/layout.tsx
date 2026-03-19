"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DashboardShell } from "@/components/dashboard-shell";
import { Navbar } from "@/components/navbar";
import { isAdminLoggedIn } from "@/app/lib/admin-auth";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    if (!isAdminLoggedIn()) {
      router.replace("/login");
      return;
    }

    setIsCheckingAuth(false);
  }, [router]);

  if (isCheckingAuth) {
    return null;
  }

  return (
    <>
      <Navbar />
      <DashboardShell>{children}</DashboardShell>
    </>
  );
}