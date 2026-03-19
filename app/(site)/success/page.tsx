export default function SuccessPage() {
  return (
    <section className="section-gap">
      <div className="container-shell">
        <div className="card-soft max-w-2xl p-8 sm:p-10">
          <p className="section-kicker">Payment Status</p>
          <h1 className="mt-2 text-4xl sm:text-5xl">Payment Successful</h1>
          <p className="mt-4 text-sm text-[color:var(--muted)]">Thank you. Your subscription has been activated successfully.</p>
        </div>
      </div>
    </section>
  );
}