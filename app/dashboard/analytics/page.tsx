const metrics = [
  { title: "Conversion Rate", value: "6.2%", trend: "+0.8%" },
  { title: "Avg. Session Length", value: "08:41", trend: "+1m 12s" },
  { title: "Error Rate", value: "0.21%", trend: "-0.06%" },
  { title: "Feature Adoption", value: "74%", trend: "+5.4%" },
  { title: "Retention (30d)", value: "81%", trend: "+3.2%" },
  { title: "NPS Pulse", value: "62", trend: "+4" },
  { title: "Throughput", value: "14.2k", trend: "+6.8%" },
  { title: "Bounce Rate", value: "22%", trend: "-1.7%" },
];

const insights = [
  { segment: "Enterprise", change: "+12.2%", observation: "Highest adoption growth this month" },
  { segment: "SMB", change: "+4.8%", observation: "Stable engagement with improved conversion" },
  { segment: "Partner", change: "+7.4%", observation: "Increased referral traffic quality" },
];

export default function DashboardAnalyticsPage() {
  return (
    <>
      <header className="card-soft p-5 sm:p-6">
        <h1 className="text-2xl">Analytics</h1>
        <p className="mt-1 text-sm text-[color:var(--muted)]">Measure product performance and user behavior trends.</p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <article key={metric.title} className="card-soft card-hover p-5">
            <p className="text-sm text-[color:var(--muted)]">{metric.title}</p>
            <p className="mt-2 text-3xl font-bold">{metric.value}</p>
            <p className="mt-2 text-xs font-semibold text-[color:var(--brand)]">{metric.trend}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <article className="card-soft p-6">
          <h2 className="text-xl">Traffic Distribution</h2>
          <p className="mt-1 text-sm text-[color:var(--muted)]">Channel split (placeholder visualization)</p>
          <div className="mt-6 h-52 rounded-xl border border-[color:var(--line)] bg-[conic-gradient(var(--color1,#0f766e)_0_45%,var(--color2,#f59e0b)_45%_72%,var(--color3,#95a5a6)_72%_100%)]" />
        </article>

        <article className="card-soft p-6">
          <h2 className="text-xl">Weekly Trend</h2>
          <p className="mt-1 text-sm text-[color:var(--muted)]">Interaction volume across seven days</p>
          <div className="mt-6 flex h-52 items-end gap-3 rounded-xl bg-[linear-gradient(155deg,rgba(15,118,110,0.08),rgba(245,158,11,0.12))] p-4">
            {[36, 44, 61, 53, 70, 65, 79].map((bar, index) => (
              <div key={bar + index} className="flex-1 rounded-md bg-[color:var(--brand)]/75" style={{ height: `${bar}%` }} />
            ))}
          </div>
        </article>
      </section>

      <section className="card-soft p-6">
        <h2 className="text-xl">Segment Insights</h2>
        <p className="mt-1 text-sm text-[color:var(--muted)]">High-level movement across key customer segments.</p>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[color:var(--line)] text-[color:var(--muted)]">
                <th className="px-3 py-3 font-medium">Segment</th>
                <th className="px-3 py-3 font-medium">Change</th>
                <th className="px-3 py-3 font-medium">Observation</th>
              </tr>
            </thead>
            <tbody>
              {insights.map((row, index) => (
                <tr
                  key={row.segment}
                  className={`border-b border-[color:var(--line)]/70 transition hover:bg-[color:var(--surface-soft)] ${
                    index % 2 === 0 ? "bg-white" : "bg-[color:var(--surface-elevated)]"
                  }`}
                >
                  <td className="px-3 py-3 font-medium">{row.segment}</td>
                  <td className="px-3 py-3 text-[color:var(--brand)]">{row.change}</td>
                  <td className="px-3 py-3 text-[color:var(--muted)]">{row.observation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}