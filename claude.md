# Project Overview

This is a production-grade UPSC coaching platform built using:

- Next.js 15 (App Router)
- Payload CMS 3
- TypeScript
- React
- Tailwind CSS
- PostgreSQL
- Node.js

The project contains:

- Public marketing website
- SEO-first content architecture
- Blog system
- Courses
- Categories
- Authors
- LMS
- AI-powered educational features
- Admin panel via Payload CMS

The priority is long-term maintainability over quick hacks.

---

# Coding Principles

Always:

- Prefer clean architecture over shortcuts.
- Avoid duplicated logic.
- Keep components small and reusable.
- Keep functions focused.
- Use strict TypeScript.
- Never use `any` unless absolutely unavoidable.
- Keep imports organized.
- Prefer composition over large monolithic files.

---

# Payload Rules

When modifying Payload collections:

- Never break existing slugs.
- Preserve access control.
- Preserve hooks.
- Preserve relationships.
- Preserve SEO fields.
- Do not change database schema unless requested.

When querying Payload:

- Prefer local API when appropriate.
- Avoid unnecessary database queries.
- Reuse existing helper functions.

---

# SEO Rules

SEO is extremely important.

Never remove:

- canonical URLs
- metadata generation
- structured data
- OpenGraph
- Twitter metadata

Prefer server-rendered pages.

Keep pages indexable unless explicitly instructed otherwise.

---

# UI Rules

The design language is:

- modern
- premium
- minimal
- Apple-inspired
- light theme

Primary color:

#9A2FFB

Text color:

#212529

Avoid flashy animations.

Use whitespace generously.

Components should feel polished and production ready.

---

# Code Quality

Before writing code:

1. Read surrounding files.
2. Understand existing architecture.
3. Follow existing naming conventions.
4. Reuse utilities whenever possible.

Never introduce duplicate utilities.

Never create new helper functions if one already exists.

---

# When solving bugs

Do not immediately start editing files.

Instead:

1. Explain the root cause.
2. Explain possible fixes.
3. Choose the cleanest fix.
4. Then implement it.

---

# When implementing features

First:

- inspect relevant files
- inspect related collections
- inspect utilities
- inspect components

Only then write code.

Avoid assumptions.

---

# Responses

Keep explanations concise.

Show reasoning briefly.

Do not rewrite unrelated code.

Only modify what is necessary.

# Security

Never read, summarize, print, or modify:

- .env*
- secret files
- private keys
- certificates
- tokens
- credentials

Unless explicitly instructed by the user.

Never run commands that modify the database, create records, execute imports, or perform destructive operations unless I explicitly ask.

You may:
- Read files
- Analyze code
- Run type checking
- Run tests
- Suggest commands

Before running any command that writes data, ask for my approval.