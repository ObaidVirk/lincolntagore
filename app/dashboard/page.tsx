"use client";

import { useRouter } from "next/navigation";
import { Activity, ArrowLeft, LogOut } from "lucide-react";

const stats = [
  { label: "Active Organizations", value: "142", delta: "+8.2%" },
  { label: "Monthly Transactions", value: "1.8M", delta: "+12.1%" },
  { label: "Platform Uptime", value: "99.95%", delta: "Stable" },
  { label: "Open Alerts", value: "06", delta: "-2" },
  { label: "Average Resolution", value: "01:42h", delta: "-18m" },
  { label: "API Success Rate", value: "99.3%", delta: "+0.4%" },
  { label: "Daily Active Users", value: "8,940", delta: "+9.1%" },
  { label: "Risk Flags", value: "03", delta: "Contained" },
];

const teams = [
  { team: "Operations", owner: "Melissa Hart", status: "On Track", sla: "98.4%" },
  { team: "Risk", owner: "Ravi Menon", status: "Review", sla: "96.9%" },
  { team: "Product", owner: "Priya Nair", status: "On Track", sla: "99.1%" },
  { team: "Support", owner: "Noah Turner", status: "On Track", sla: "97.8%" },
];

export default function DashboardPage() {
  const router = useRouter();

  const handleBackToSite = () => {
    router.push("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    localStorage.removeItem("adminEmail");
    window.dispatchEvent(new Event("adminAuthChange"));
    router.push("/");
  };

  return (
    <>
      <header className="card-soft flex flex-wrap items-center justify-between gap-3 p-5 sm:p-6">
        <div>
          <h1 className="text-2xl">Dashboard Overview</h1>
          <p className="text-sm text-[color:var(--muted)]">Operational status and platform activity snapshot.</p>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" className="btn-secondary px-4 py-2" onClick={handleBackToSite}>
            <ArrowLeft className="mr-2 size-4" />
            Back to Site
          </button>
          <button type="button" className="btn-secondary px-4 py-2">
            <Activity className="mr-2 size-4" />
            Export Summary
          </button>
          <button type="button" className="btn-secondary px-4 py-2" onClick={handleLogout}>
            <LogOut className="mr-2 size-4" />
            Logout
          </button>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <article key={stat.label} className="card-soft card-hover p-5">
            <p className="text-sm text-[color:var(--muted)]">{stat.label}</p>
            <p className="mt-2 text-3xl font-bold">{stat.value}</p>
            <p className="mt-2 text-xs font-semibold text-[color:var(--brand)]">{stat.delta}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <article className="card-soft p-6">
          <h2 className="text-xl">Analytics</h2>
          <p className="mt-1 text-sm text-[color:var(--muted)]">Monthly engagement trend (placeholder chart)</p>
          <div className="mt-6 flex h-52 items-end gap-3 rounded-xl bg-[linear-gradient(160deg,rgba(15,118,110,0.08),rgba(245,158,11,0.12))] p-4">
            {[48, 72, 58, 82, 65, 88, 74].map((bar, i) => (
              <div key={bar + i} className="flex-1 rounded-md bg-[color:var(--brand)]/70" style={{ height: `${bar}%` }} />
            ))}
          </div>
        </article>

        <article className="card-soft p-6">
          <h2 className="text-xl">Users</h2>
          <p className="mt-1 text-sm text-[color:var(--muted)]">Recent activity feed (placeholder)</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="rounded-xl border border-[color:var(--line)] bg-white p-3">New enterprise admin invited to workspace.</li>
            <li className="rounded-xl border border-[color:var(--line)] bg-white p-3">Role permissions updated for analytics team.</li>
            <li className="rounded-xl border border-[color:var(--line)] bg-white p-3">Compliance report generated successfully.</li>
            <li className="rounded-xl border border-[color:var(--line)] bg-white p-3">Platform settings review scheduled.</li>
          </ul>
        </article>
      </section>

      <section className="card-soft p-6">
        <h2 className="text-xl">Team Service Status</h2>
        <p className="mt-1 text-sm text-[color:var(--muted)]">Current SLA posture by function.</p>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[color:var(--line)] text-[color:var(--muted)]">
                <th className="px-3 py-3 font-medium">Team</th>
                <th className="px-3 py-3 font-medium">Owner</th>
                <th className="px-3 py-3 font-medium">Status</th>
                <th className="px-3 py-3 font-medium">SLA</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((item, index) => (
                <tr
                  key={item.team}
                  className={`border-b border-[color:var(--line)]/70 transition hover:bg-[color:var(--surface-soft)] ${
                    index % 2 === 0 ? "bg-white" : "bg-[color:var(--surface-elevated)]"
                  }`}
                >
                  <td className="px-3 py-3 font-medium">{item.team}</td>
                  <td className="px-3 py-3 text-[color:var(--muted)]">{item.owner}</td>
                  <td className="px-3 py-3 text-[color:var(--muted)]">{item.status}</td>
                  <td className="px-3 py-3 text-[color:var(--muted)]">{item.sla}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="card-soft p-6">
        <h2 className="text-xl">Upcoming Releases</h2>
        <p className="mt-1 text-sm text-[color:var(--muted)]">No upcoming releases scheduled.</p>
        <div className="mt-4 rounded-xl border border-dashed border-[color:var(--line)] bg-white p-6 text-center">
          <p className="text-sm font-semibold">Nothing planned yet</p>
          <p className="mt-1 text-sm text-[color:var(--muted)]">Create a release plan to populate this area with milestones and owners.</p>
        </div>
      </section>
    </>
  );
}