# Portofolio

Personal portfolio website built with Next.js, TypeScript and Tailwind CSS showcasing projects, skills, timeline, and certificates. The site contains several custom interactive UI components (WebGL / canvas effects, animated text, floating logos, timelines) and is designed to be a modern, responsive single-page portfolio.

Author: Stephanus S. Tupamahu  
Contact: metyutupamahu84@gmail.com  
Repository: https://github.com/Metyu5/Portofolio

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Local development](#local-development)
- [Build & deploy](#build--deploy)
- [Customizing the site](#customizing-the-site)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements & credits](#acknowledgements--credits)
- [Contact](#contact)

---

## Overview

This repository contains a Next.js (app-router) portfolio site implemented in TypeScript. The main page (`app/page.tsx`) holds the content: hero, skills, projects, timeline (education & work), certificates, and contact CTA. The site uses several custom React components and visual/interactive effects to deliver a polished portfolio experience.

Key interactive components:
- Splash cursor (fluid / particle cursor effect)
- Liquid / WebGL background (Three.js)
- Electric / laser flow borders and animated UI elements
- Animated text utilities (SplitText, BlurText, TypeAnimation)
- Logo loop, timeline components and more

Static assets (images, CV) are served from the public folder.

---

## Features

- Clean, modern responsive UI and gradients
- Project showcase with tags and external links
- Education & experience vertical timeline
- Certificates & achievements gallery
- Interactive cursor & WebGL visual effects
- Logo loop and animated text sections
- Easy email contact CTA and direct CV download link

---

## Tech stack

Primary technologies used in the codebase:

- Next.js (app router)
- React + TypeScript
- Tailwind CSS for utility-first styling
- Framer Motion for animations
- react-icons for iconography
- react-vertical-timeline-component for timeline UI
- three.js for 3D / WebGL components
- Custom canvas-based effects and components

Most code lives under the `app/` directory (Next.js app route). Fonts are loaded via `next/font/google` (Poppins, Geist, Geist_Mono).

---

## Project structure (important files)

- app/
  - page.tsx              — main page, content and layout usage
  - layout.tsx            — root layout and font setup
  - globals.css           — global styles / Tailwind base
  - components/           — reusable UI & visual components
    - SplashCursor/       — interactive canvas cursor
    - LiquidEther/        — WebGL liquid effect
    - ElectricBorder/     — decorative animated borders
    - LogoLoop/           — rotating logo strip
    - ProfileCard/, BlurText/, SplitText/, etc.
- public/                 — images, CV (e.g. `/cv.pdf`), and static assets
- next.config.ts          — Next.js configuration
- README.md               — this file

Note: The main content (projects, timeline, certificates, contact email) is defined directly inside `app/page.tsx` for quick edits.

---

## Local development

Prerequisites:
- Node.js (16/18+ recommended)
- npm, pnpm or yarn

Common commands (typical for a Next.js project):

1. Install dependencies
   - npm
     ```bash
     npm install
     ```
   - pnpm
     ```bash
     pnpm install
     ```
   - yarn
     ```bash
     yarn
     ```

2. Run development server
   - npm
     ```bash
     npm run dev
     ```
   - pnpm
     ```bash
     pnpm dev
     ```
   - yarn
     ```bash
     yarn dev
     ```

3. Build for production
   - npm
     ```bash
     npm run build
     npm run start
     ```

If package manager scripts differ in your local package.json, use the equivalents present there. The default Next.js scripts (`dev`, `build`, `start`) are expected.

---

## Build & deploy

Recommended deployment:
- Vercel (optimized for Next.js) — connect the repository and deploy from the main branch.
- Other platforms that support Next.js are also compatible (Netlify, Render, Cloudflare Pages with adapters).

Important production considerations:
- Optimize and compress images in `public/`.
- Test heavy WebGL/canvas components on target devices (mobile devices may require fallback or disabled effects).
- Keep third-party asset loading limited to maintain performance.

---

## Customizing the site

- Content: Edit the arrays and JSX inside `app/page.tsx` to update:
  - `myProjects` (project cards)
  - `fullTimelineData` (experience & education)
  - Certificates list and contact email
- Components: Reusable components live under `app/components/`. Customize or add new components there.
- Styling: Modify Tailwind classes in components or update `globals.css` / Tailwind config to change theme tokens.
- Fonts: Change the `next/font/google` configuration in `app/layout.tsx`.

---

## Contributing

Contributions are welcome. Suggested workflow:
1. Fork the repository
2. Create a topic branch (feature/fix)
3. Make changes, add concise commit messages
4. Open a pull request describing the change

Please keep interactive-heavy changes backward compatible and document new component props or usage.

---

## License

If you want to include a license, add a LICENSE file to the repository (e.g., MIT). This project currently has no explicit license file in the repository; add one if you intend to allow reuse.

---

## Acknowledgements & credits

- Next.js — https://nextjs.org
- Tailwind CSS — https://tailwindcss.com
- Framer Motion — https://www.framer.com/motion/
- react-icons — https://react-icons.github.io/react-icons/
- react-vertical-timeline-component — https://stephane-monnot.github.io/react-vertical-timeline/
- Three.js — https://threejs.org

Images / icons used in the repo should be credited where required by their sources (check `public/` for original attributions).

---

## Contact

Stephanus S. Tupamahu  
Email: metyutupamahu84@gmail.com  
GitHub: https://github.com/Metyu5

---

If you want, I can:
- Add a LICENSE file (MIT or another)
- Add CI / GitHub Actions for linting, type-checking, or deployments
- Produce a shorter README in Indonesian or localize the content
