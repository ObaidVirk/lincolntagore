"use client";

export default function DashboardSettingsPage() {
  return (
    <>
      <header className="card-soft p-5 sm:p-6">
        <h1 className="text-2xl">Settings</h1>
        <p className="mt-1 text-sm text-[color:var(--muted)]">Configure security, notifications, and integration preferences.</p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <article className="card-soft p-5">
          <p className="text-sm text-[color:var(--muted)]">Security Score</p>
          <p className="mt-2 text-3xl font-bold">A+</p>
        </article>
        <article className="card-soft p-5">
          <p className="text-sm text-[color:var(--muted)]">Policy Coverage</p>
          <p className="mt-2 text-3xl font-bold">97%</p>
        </article>
        <article className="card-soft p-5">
          <p className="text-sm text-[color:var(--muted)]">Active Integrations</p>
          <p className="mt-2 text-3xl font-bold">11</p>
        </article>
        <article className="card-soft p-5">
          <p className="text-sm text-[color:var(--muted)]">Last Audit</p>
          <p className="mt-2 text-3xl font-bold">8d</p>
        </article>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <article className="card-soft p-6">
          <h2 className="text-xl">Security Controls</h2>
          <div className="mt-4 space-y-3 text-sm text-[color:var(--muted)]">
            <div className="rounded-xl border border-[color:var(--line)] bg-white p-4">
              Multi-factor authentication enforcement is enabled for all administrators.
            </div>
            <div className="rounded-xl border border-[color:var(--line)] bg-white p-4">
              Session timeout set to 30 minutes for privileged user roles.
            </div>
            <div className="rounded-xl border border-[color:var(--line)] bg-white p-4">
              Quarterly access review reminders are active.
            </div>
          </div>
        </article>

        <article className="card-soft p-6">
          <h2 className="text-xl">Notification Preferences</h2>
          <div className="mt-4 space-y-3 text-sm text-[color:var(--muted)]">
            <div className="rounded-xl border border-[color:var(--line)] bg-white p-4">Critical incident alerts to email and SMS.</div>
            <div className="rounded-xl border border-[color:var(--line)] bg-white p-4">Daily analytics digest at 08:00 local time.</div>
            <div className="rounded-xl border border-[color:var(--line)] bg-white p-4">Weekly stakeholder summary every Monday.</div>
          </div>
        </article>
      </section>

      <section className="card-soft p-6">
        <h2 className="text-xl">Preference Toggles</h2>
        <p className="mt-1 text-sm text-[color:var(--muted)]">Quick controls for common workspace options.</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Require MFA for all users",
            "Enable incident digest",
            "Auto-export compliance report",
            "Allow partner integrations",
            "Session risk monitoring",
            "Escalation alerts",
          ].map((item) => (
            <div key={item} className="flex items-center justify-between rounded-xl border border-[color:var(--line)] bg-white p-4">
              <p className="text-sm text-[color:var(--muted)]">{item}</p>
              <span className="h-6 w-11 rounded-full bg-[color:var(--brand)]/80" />
            </div>
          ))}
        </div>
      </section>

      <section className="card-soft p-6">
        <h2 className="text-xl">Integration Settings</h2>
        <p className="mt-1 text-sm text-[color:var(--muted)]">Connected platforms and data sync windows.</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-[color:var(--line)] bg-white p-4">
            <p className="font-semibold">CRM Connector</p>
            <p className="mt-1 text-sm text-[color:var(--muted)]">Sync every 15 minutes</p>
          </div>
          <div className="rounded-xl border border-[color:var(--line)] bg-white p-4">
            <p className="font-semibold">Data Warehouse</p>
            <p className="mt-1 text-sm text-[color:var(--muted)]">Hourly export</p>
          </div>
          <div className="rounded-xl border border-[color:var(--line)] bg-white p-4">
            <p className="font-semibold">Ticketing Platform</p>
            <p className="mt-1 text-sm text-[color:var(--muted)]">Bi-directional sync active</p>
          </div>
        </div>
      </section>
    </>
  );
}