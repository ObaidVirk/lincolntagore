export default function TermsOfUsePage() {
  return (
    <section className="section-gap">
      <div className="container-shell space-y-8">
        <header className="max-w-3xl space-y-4">
          <p className="section-kicker">Legal</p>
          <h1 className="text-4xl leading-tight sm:text-5xl">Terms of Use</h1>
          <p className="text-[color:var(--muted)] sm:text-lg">
            These terms define the general conditions for accessing and using LINCOLNTAGORE.Com and related
            informational content provided by Lincoln Tagore Pte. Ltd.
          </p>
        </header>

        <article className="card-soft p-6 sm:p-8">
          <h2 className="text-2xl">Website Usage</h2>
          <p className="mt-3 text-sm text-[color:var(--muted)]">
            Content is provided for informational purposes. Users are expected to access the website lawfully
            and avoid any activity that disrupts service availability or security.
          </p>
        </article>

        <article className="card-soft p-6 sm:p-8">
          <h2 className="text-2xl">Intellectual Property</h2>
          <p className="mt-3 text-sm text-[color:var(--muted)]">
            All branding, copy, and design assets on this website are owned by Lincoln Tagore Pte. Ltd. unless
            otherwise stated.
          </p>
        </article>

        <article className="card-soft p-6 sm:p-8">
          <h2 className="text-2xl">Contact</h2>
          <p className="mt-3 text-sm text-[color:var(--muted)]">
            For terms-related queries, contact hello@lincolntagore.com.
          </p>
        </article>
      </div>
    </section>
  );
}
