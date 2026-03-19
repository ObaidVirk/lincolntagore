import { Plus, Search } from "lucide-react";

const users = [
  { name: "Amanda Lee", role: "Platform Admin", status: "Active", team: "Operations" },
  { name: "Ravi Menon", role: "Compliance Lead", status: "Active", team: "Risk" },
  { name: "Sophia Chen", role: "Data Analyst", status: "Pending", team: "Analytics" },
  { name: "Noah Turner", role: "Support Manager", status: "Active", team: "Support" },
];

const overview = [
  { label: "Total Users", value: "268" },
  { label: "Active This Week", value: "243" },
  { label: "Pending Invites", value: "12" },
  { label: "Role Changes", value: "07" },
];

export default function DashboardUsersPage() {
  return (
    <>
      <header className="card-soft flex flex-wrap items-center justify-between gap-3 p-5 sm:p-6">
        <div>
          <h1 className="text-2xl">Users</h1>
          <p className="text-sm text-[color:var(--muted)]">Manage workspace access and role assignments.</p>
        </div>
        <button type="button" className="btn-primary px-4 py-2">
          <Plus className="mr-2 size-4" /> Add User
        </button>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {overview.map((item) => (
          <article key={item.label} className="card-soft card-hover p-5">
            <p className="text-sm text-[color:var(--muted)]">{item.label}</p>
            <p className="mt-2 text-3xl font-bold">{item.value}</p>
          </article>
        ))}
      </section>

      <section className="card-soft p-5 sm:p-6">
        <div className="mb-4 flex items-center gap-2 rounded-xl border border-[color:var(--line)] bg-white px-3 py-2 text-sm text-[color:var(--muted)]">
          <Search className="size-4" /> Search users by name, role, or team
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[color:var(--line)] text-[color:var(--muted)]">
                <th className="px-3 py-3 font-medium">Name</th>
                <th className="px-3 py-3 font-medium">Role</th>
                <th className="px-3 py-3 font-medium">Team</th>
                <th className="px-3 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user.name}
                  className={`border-b border-[color:var(--line)]/70 transition hover:bg-[color:var(--surface-soft)] ${
                    index % 2 === 0 ? "bg-white" : "bg-[color:var(--surface-elevated)]"
                  }`}
                >
                  <td className="px-3 py-3 font-medium">{user.name}</td>
                  <td className="px-3 py-3 text-[color:var(--muted)]">{user.role}</td>
                  <td className="px-3 py-3 text-[color:var(--muted)]">{user.team}</td>
                  <td className="px-3 py-3">
                    <span className="rounded-full bg-[color:var(--surface-soft)] px-2 py-1 text-xs font-semibold text-[color:var(--brand-strong)]">
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="card-soft p-6">
        <h2 className="text-xl">Archived Users</h2>
        <p className="mt-1 text-sm text-[color:var(--muted)]">No archived users available.</p>
        <div className="mt-4 rounded-xl border border-dashed border-[color:var(--line)] bg-white p-6 text-center">
          <p className="text-sm font-semibold">No archived records</p>
          <p className="mt-1 text-sm text-[color:var(--muted)]">Archived user accounts will appear here once users are deactivated.</p>
        </div>
      </section>
    </>
  );
}