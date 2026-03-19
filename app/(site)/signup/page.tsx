"use client";

import { Lock, Mail, User } from "lucide-react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/app/lib/translation-context";

export default function SignupPage() {
  const router = useRouter();
  const { t } = useTranslation();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!fullName || !email || !password || !confirmPassword || password !== confirmPassword) {
      return;
    }

    localStorage.setItem("userLoggedIn", "true");
    localStorage.setItem("userName", fullName);
    localStorage.setItem("userEmail", email);
    window.dispatchEvent(new Event("adminAuthChange"));
    router.push("/");
  };

  return (
    <section className="section-gap relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_8%_8%,rgba(15,118,110,0.14),transparent_30%),radial-gradient(circle_at_88%_14%,rgba(245,158,11,0.12),transparent_26%)]" />
      <div className="container-shell flex justify-center">
        <div className="card-soft w-full max-w-md border-[color:var(--brand)]/20 bg-white/95 p-6 sm:p-8">
          <p className="section-kicker">Workspace Onboarding</p>
          <h1 className="mt-2 text-3xl">Create Account</h1>
          <p className="mt-2 text-sm text-[color:var(--muted)]">Register your team workspace in minutes.</p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <label className="block">
              <span className="mb-1 block text-sm font-medium">{t("signup.name", "Name")}</span>
              <div className="relative">
                <User className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[color:var(--muted)]" />
                <input
                  type="text"
                  className="input-premium pl-10"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                />
              </div>
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium">{t("signup.email", "Email")}</span>
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
              <span className="mb-1 block text-sm font-medium">{t("signup.password", "Password")}</span>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[color:var(--muted)]" />
                <input
                  type="password"
                  className="input-premium pl-10"
                  placeholder="Create a secure password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium">{t("signup.confirmPassword", "Confirm Password")}</span>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[color:var(--muted)]" />
                <input
                  type="password"
                  className="input-premium pl-10"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
              </div>
            </label>
            <button type="submit" className="btn-primary w-full">
              {t("signup.signup", "Signup")}
            </button>
            <p className="text-center text-xs text-[color:var(--muted)]">By creating an account, you agree to platform usage policies.</p>
          </form>
        </div>
      </div>
    </section>
  );
}