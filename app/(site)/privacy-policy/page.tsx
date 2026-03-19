export default function PrivacyPolicyPage() {
  return (
    <section className="section-gap">
      <div className="container-shell space-y-8">
        <header className="max-w-3xl space-y-4">
          <p className="section-kicker">Legal</p>
          <h1 className="text-4xl leading-tight sm:text-5xl">Privacy Notice</h1>
          <p className="text-[color:var(--muted)] sm:text-lg">
            Lincoln Tagore Pte. Ltd. respects your privacy and processes personal information responsibly.
            This page outlines what data may be collected and how it is used in the normal operation of our
            website and client engagement process.
          </p>
        </header>

        <article className="card-soft p-6 sm:p-8">
          <h2 className="text-2xl">Information We Collect</h2>
          <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted)]">
            <li>Contact details submitted through inquiry and newsletter forms.</li>
            <li>Basic technical metadata such as browser type and request timestamps.</li>
            <li>Business information voluntarily shared during consultation requests.</li>
          </ul>
        </article>

        <article className="card-soft p-6 sm:p-8">
          <h2 className="text-2xl">How We Use Information</h2>
          <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted)]">
            <li>To respond to inquiries and provide requested service information.</li>
            <li>To improve website experience and communication quality.</li>
            <li>To support lawful business operations and service delivery obligations.</li>
          </ul>
        </article>

        <article className="card-soft p-6 sm:p-8">
          <h2 className="text-2xl">Contact</h2>
          <p className="mt-3 text-sm text-[color:var(--muted)]">
            For privacy-related requests, contact hello@lincolntagore.com.
          </p>
        </article>
      </div>
    </section>
  );
}
