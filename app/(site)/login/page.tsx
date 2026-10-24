"use client";

import { Lock, Mail } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAdminLoggedIn, setAdminLoggedIn } from "@/app/lib/admin-auth";
import { useTranslation } from "@/app/lib/translation-context";

export default function LoginPage() {
  const router = useRouter();
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isAdminLoggedIn()) {
      router.replace("/admin");
    }
  }, [router]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setAdminLoggedIn(email);
        window.dispatchEvent(new Event("adminAuthChange"));
        router.push("/admin");
        return;
      }

      setError("Invalid admin credentials");
    } catch {
      setError("Unable to sign in right now. Please try again.");
    }

  };

  return (
    <section className="section-gap relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_0%,rgba(15,118,110,0.14),transparent_30%),radial-gradient(circle_at_84%_10%,rgba(245,158,11,0.12),transparent_26%)]" />
      <div className="container-shell flex justify-center">
        <div className="card-soft w-full max-w-md border-[color:var(--brand)]/20 bg-white/95 p-6 sm:p-8">
          <p className="section-kicker">Secure Access</p>
          <h1 className="mt-2 text-3xl">Login</h1>
          <p className="mt-2 text-sm text-[color:var(--muted)]">Access your Lincoln Tagore workspace account.</p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <label className="block">
              <span className="mb-1 block text-sm font-medium">{t("login.email", "Email")}</span>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[color:var(--muted)]" />
                <input
                  type="email"
                  className="input-premium pl-10"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium">{t("login.password", "Password")}</span>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[color:var(--muted)]" />
                <input
                  type="password"
                  className="input-premium pl-10"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </label>
            {error ? <p className="text-sm text-red-600">{error}</p> : null}
            <button type="submit" className="btn-primary w-full">
              {t("login.login", "Login")}
            </button>
            <p className="text-center text-xs text-[color:var(--muted)]">{t("login.forgotPassword", "Forgot Password")}</p>
            <p className="text-center text-xs text-[color:var(--muted)]">Need access? Contact your workspace administrator.</p>
          </form>
        </div>
      </div>
    </section>
  );
}