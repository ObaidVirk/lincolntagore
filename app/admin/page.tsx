"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAdminLoggedIn } from "@/app/lib/admin-auth";

export default function AdminEntryPage() {
  const router = useRouter();

  useEffect(() => {
    const adminLoggedIn = isAdminLoggedIn();

    if (!adminLoggedIn) {
      router.replace("/login");
      return;
    }

    router.replace("/dashboard");
  }, [router]);

  return null;
}