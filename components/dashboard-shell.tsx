"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, Cog, LayoutDashboard, Users } from "lucide-react";

const sideNav = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Users", href: "/dashboard/users", icon: Users },
  { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { label: "Settings", href: "/dashboard/settings", icon: Cog },
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[color:var(--surface-soft)] p-4 sm:p-6">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="card-soft gradient-panel p-5 sm:p-6">
          <div className="flex items-center gap-3 border-b border-[color:var(--line)] pb-5">
            <div className="relative h-11 w-11 overflow-hidden rounded-lg border border-[color:var(--line)] bg-white">
              <Image src="/adminpanel.png" alt="Admin panel logo" fill className="object-cover" sizes="44px" />
            </div>
            <div>
              <p className="font-semibold">Admin Control</p>
              <p className="text-xs text-[color:var(--muted)]">Lincoln Tagore</p>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-[color:var(--line)] bg-white/80 p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--brand)]">Workspace Health</p>
            <p className="mt-1 text-sm text-[color:var(--muted)]">All systems operational and synced in real time.</p>
          </div>

          <nav className="mt-5 space-y-2">
            {sideNav.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium transition ${
                    isActive
                      ? "bg-[color:var(--brand)] text-white shadow-[0_12px_30px_rgba(15,118,110,0.26)]"
                      : "bg-white/70 text-[color:var(--muted)] hover:bg-white"
                  }`}
                >
                  <item.icon className="size-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 rounded-xl border border-[color:var(--line)] bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--brand)]">Need assistance?</p>
            <p className="mt-1 text-sm text-[color:var(--muted)]">Contact support for onboarding, integrations, and security reviews.</p>
          </div>
        </aside>

        <main className="space-y-6">{children}</main>
      </div>
    </div>
  );
}