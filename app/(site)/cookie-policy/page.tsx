export default function CookiePolicyPage() {
  return (
    <section className="section-gap">
      <div className="container-shell space-y-8">
        <header className="max-w-3xl space-y-4">
          <p className="section-kicker">Legal</p>
          <h1 className="text-4xl leading-tight sm:text-5xl">Cookie Policy</h1>
          <p className="text-[color:var(--muted)] sm:text-lg">
            This page explains how cookies may be used to support website functionality, performance analysis,
            and user experience improvements.
          </p>
        </header>

        <article className="card-soft p-6 sm:p-8">
          <h2 className="text-2xl">Types of Cookies</h2>
          <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted)]">
            <li>Essential cookies needed for core site functionality.</li>
            <li>Performance cookies used to understand usage patterns.</li>
            <li>Preference cookies that store interface selections where applicable.</li>
          </ul>
        </article>

        <article className="card-soft p-6 sm:p-8">
          <h2 className="text-2xl">Managing Cookies</h2>
          <p className="mt-3 text-sm text-[color:var(--muted)]">
            Most browsers allow cookie management through settings. Disabling some cookies may affect
            parts of the website experience.
          </p>
        </article>

        <article className="card-soft p-6 sm:p-8">
          <h2 className="text-2xl">Contact</h2>
          <p className="mt-3 text-sm text-[color:var(--muted)]">
            For cookie-policy questions, contact hello@lincolntagore.com.
          </p>
        </article>
      </div>
    </section>
  );
}
