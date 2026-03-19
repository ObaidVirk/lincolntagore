"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { LanguageSelector } from "./language-selector";
import { clearAdminLoggedIn, isAdminLoggedIn as getIsAdminLoggedIn } from "@/app/lib/admin-auth";
import { useTranslation } from "@/app/lib/translation-context";

const navItemPaths = ["/services", "/solutions", "/pricing", "/about", "/careers", "/resources", "/contact"];

export function Navbar() {
  const router = useRouter();
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [displayName, setDisplayName] = useState<string | null>(null);

  const navItems = [
    { href: navItemPaths[0], label: t("navbar.services", "Services") },
    { href: navItemPaths[1], label: "Solutions" },
    { href: navItemPaths[2], label: t("navbar.pricing", "Pricing") },
    { href: navItemPaths[3], label: t("navbar.about", "About") },
    { href: navItemPaths[4], label: "Careers" },
    { href: navItemPaths[5], label: "Resources" },
    { href: navItemPaths[6], label: t("navbar.contact", "Contact") },
  ];

  const handleLogout = () => {
    if (adminLoggedIn) {
      clearAdminLoggedIn();
    }

    localStorage.removeItem("userLoggedIn");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    window.dispatchEvent(new Event("adminAuthChange"));
    setMobileOpen(false);
    router.push("/");
  };

  useEffect(() => {
    const syncAdminState = () => {
      const nextAdminState = getIsAdminLoggedIn();
      setAdminLoggedIn(nextAdminState);

      if (nextAdminState) {
        const adminEmail = localStorage.getItem("adminEmail") ?? "Admin";
        const adminName = adminEmail.includes("@") ? adminEmail.split("@")[0] : adminEmail;
        setDisplayName(adminName);
        return;
      }

      const userLoggedIn = localStorage.getItem("userLoggedIn") === "true";
      const userName = localStorage.getItem("userName");
      if (userLoggedIn && userName) {
        setDisplayName(userName);
        return;
      }

      setDisplayName(null);
    };

    syncAdminState();

    const handleStorage = () => syncAdminState();
    const handleAuthChange = () => {
      syncAdminState();
      if (mobileOpen) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener("adminAuthChange", handleAuthChange);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("adminAuthChange", handleAuthChange);
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--line)]/90 bg-white/90 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between gap-3 lg:h-[5.25rem]">
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-[color:var(--line)]">
            <Image
              src="/LINCOLNTAGORE.jpg"
              alt="Lincoln Tagore logo"
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
          <div>
            <p className="text-sm font-semibold transition group-hover:text-[color:var(--brand)]">LINCOLN TAGORE</p>
            <p className="text-xs text-[color:var(--muted)]">Pte. Ltd. Singapore</p>
          </div>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex xl:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative whitespace-nowrap text-sm font-medium text-[color:var(--muted)] transition hover:text-[color:var(--text)]"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-[color:var(--brand)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2.5 lg:flex">
          <LanguageSelector />
          {!displayName ? (
            <Link href="/login" className="btn-secondary whitespace-nowrap px-4 py-2.5">
              {t("navbar.login", "Login")}
            </Link>
          ) : null}
          {!displayName ? (
            <Link href="/signup" className="btn-primary whitespace-nowrap px-4 py-2.5">
              {t("navbar.signup", "Signup")}
            </Link>
          ) : null}
          {displayName ? (
            <button type="button" onClick={handleLogout} className="btn-secondary whitespace-nowrap px-4 py-2.5">
              Logout
            </button>
          ) : null}
          {adminLoggedIn && (
            <Link
              href="/admin"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-xl border border-[color:var(--brand)]/35 bg-[color:var(--brand)]/10 px-4 py-2.5 text-sm font-semibold text-[color:var(--brand-strong)] transition duration-300 hover:-translate-y-0.5 hover:bg-[color:var(--brand)]/20"
            >
              {t("navbar.dashboard", "Dashboard")}
            </Link>
          )}
          {displayName ? (
            <p className="ml-1 whitespace-nowrap text-sm font-semibold text-[color:var(--text)]">{displayName} is logged in</p>
          ) : null}
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="rounded-lg border border-[color:var(--line)] bg-white p-2 transition hover:border-[color:var(--brand)] lg:hidden"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-[color:var(--line)] bg-white lg:hidden">
          <div className="container-shell flex flex-col gap-3 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-2 text-sm font-medium transition hover:bg-[color:var(--surface-soft)]"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <LanguageSelector />
            </div>
            <div className="flex gap-2">
              {displayName ? (
                <p className="flex-1 px-2 py-2.5 text-center text-sm font-semibold text-[color:var(--text)]">{displayName} is logged in</p>
              ) : (
                <Link href="/login" className="btn-secondary flex-1 px-4 py-2.5 text-center">
                  Login
                </Link>
              )}
              {!displayName ? (
                <Link href="/signup" className="btn-primary flex-1 px-4 py-2.5 text-center">
                  Signup
                </Link>
              ) : null}
            </div>
            {displayName ? (
              <button type="button" onClick={handleLogout} className="btn-secondary w-full px-4 py-2.5 text-center">
                Logout
              </button>
            ) : null}
            {adminLoggedIn && (
              <Link
                href="/admin"
                className="rounded-xl border border-[color:var(--brand)]/35 bg-[color:var(--brand)]/10 px-4 py-2.5 text-center text-sm font-semibold text-[color:var(--brand-strong)]"
              >
                Dashboard
              </Link>
            )}
          </div>
        </div>
      ) : null}
    </header>
  );
}