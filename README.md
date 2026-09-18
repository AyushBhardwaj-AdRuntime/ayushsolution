# Ayush Portfolio

A Vite and React portfolio with Vercel serverless functions for contact email, GitHub projects, and engineering signals.

## Local development

Requirements: Node.js and npm.

1. Install the locked dependencies:

   ```bash
   npm ci
   ```

2. Copy `.env.example` to `.env.local` and replace the placeholder values you need.

3. Start the Vite application:

   ```bash
   npm run dev
   ```

Vite serves the frontend only. The functions under `api/`, including contact email, execute on Vercel. Use the Vercel CLI's `vercel dev` command when local work needs the serverless routes.

## Environment variables

- `EMAIL_USER`: Gmail address used to send contact submissions.
- `EMAIL_PASS`: Gmail App Password for `EMAIL_USER`; a normal Gmail password will not work.
- `CONTACT_RECIPIENT`: inbox that should receive contact submissions.
- `GITHUB_TOKEN`: optional for the REST-backed project list, but required for the GraphQL repository endpoint and useful for higher API limits.
For production, add the variables in the Vercel project under **Settings → Environment Variables**, select the appropriate environments, and redeploy. The contact form needs `EMAIL_USER`, `EMAIL_PASS`, and `CONTACT_RECIPIENT` configured before it can deliver inquiries.

## Checks

```bash
npm test
npm run build
```

See [FIXES.md](./FIXES.md) for repaired defects and remaining operational gaps.
