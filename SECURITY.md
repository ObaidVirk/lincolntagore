# Security policy

## Reporting a vulnerability

Please do not report security vulnerabilities in public GitHub issues.

Instead, contact the repository owner privately through the security contact configured on GitHub. Include:

- A clear description of the issue
- Reproduction steps or a proof of concept
- The affected route, component, or dependency
- Any suggested mitigation

Do not include real credentials, payment information, or personal data in reports.

## Supported versions

Only the latest version on the default branch is currently supported.

## Security notes

- Keep `.env.local` out of version control.
- Never expose server credentials with a `NEXT_PUBLIC_` prefix.
- Use test Stripe keys during development.
- The demo admin authentication is not a production identity system.
