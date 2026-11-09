# Project guidelines

## General
- Preserve the existing product requirements, page content, visual design, and responsive behavior unless a task explicitly requests a change.
- Prefer small, focused changes over broad rewrites.
- Do not add dependencies when existing project utilities can solve the problem.
- Keep TypeScript types explicit and avoid introducing `any`.

## Application architecture
- This project uses React, TanStack Start, TanStack Router, TypeScript, and Vite.
- Follow the existing TanStack file-based routing conventions in `src/routes/`.
- Keep reusable interface elements in `src/components/`.
- Keep shared helpers in `src/lib/`.

## Environment and security
- Keep local environment files and credentials out of version control.
- Never expose server-only credentials, including Supabase service-role keys, to browser code.
- Validate and handle errors for external service requests.

## Generated files
- Do not manually edit generated files unless the task explicitly requires it.
- Regenerate route-tree and database artifacts using their project tooling when appropriate.

## Verification
- Run the relevant lint, test, and production build commands after code changes.
- Do not claim a check passed unless it was actually run.
