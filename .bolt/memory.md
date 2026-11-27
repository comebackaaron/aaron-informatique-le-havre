# Project memory

## Product intent & audience

- Project: **Aaron Informatique Le Havre** — an existing website originally built in Emergent AI, being migrated/restored into a Vite + React + TypeScript project.
- User intent: reconstruct the existing site from saved React/CSS files; do **not** rebuild from scratch or discard existing code.
- Audience: likely local IT services customers in Le Havre, France (inferred from name; confirm with user).

## Brand personality & voice

- French-language project; communicate with the user in French.
- Tone and content to be inferred once source files are provided.

## Visual design & UX direction

- Stack: Vite + React + TypeScript + Tailwind CSS + lucide-react + Supabase (already configured).
- Path alias `@/` → `src/` (matches Emergent AI setup).
- Specific visual direction pending receipt of original files.

## Decisions, constraints & rationale

- Restore files into their **original paths**; preserve existing code.
- Workflow agreed: user provides files → assistant checks referenced imports, dependencies, and missing files → reports gaps **before** modifying anything.
- Startup files already present and working: `src/App.tsx`, `src/main.tsx`, `src/index.css`, `index.html`, `package.json`.
- Do not install extra UI/icon packages unless explicitly requested.
- Global design/technical instructions live in `.bolt/prompt` (authoritative).

## Open questions & assumptions

- Awaiting user-provided files: `App.tsx`, CSS, other components, and modified `index.html` if any.
- Assumption: original Emergent AI project used same `@/` alias and similar Vite structure — to verify once files arrive.
- Unknown: exact page structure, components, routes, Supabase usage, assets/images, and dependencies beyond the current template.
- Unknown: whether `index.html` was customized (title, lang, fonts).