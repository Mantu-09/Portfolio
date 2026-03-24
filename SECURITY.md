# Security Policy

## Supported Versions

This portfolio is actively maintained on the `main` branch.

| Version | Supported |
| ------- | --------- |
| main    | yes       |
| older commits | no   |

## Reporting a Vulnerability

Please do not open public issues for security vulnerabilities.

1. Email: `mantukumar0003571@gmail.com`
2. Subject: `Security Vulnerability Report - Portfolio`
3. Include:
   - Clear description of the issue
   - Reproduction steps
   - Potential impact
   - Suggested fix (if available)

### Response targets

- Initial acknowledgement: within 72 hours
- Triage decision: within 7 days
- Fix timeline: depends on severity and complexity

## Security Best Practices in this Repo

- Secrets are not committed (`.env` is ignored).
- Runtime dependencies should be regularly audited with:

```bash
npm audit --omit=dev
```

- Use Vercel environment variables for production secrets.
