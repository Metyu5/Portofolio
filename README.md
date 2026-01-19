🚀 Portofolio
![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwindcss&logoColor=white) ![Three.js](https://img.shields.io/badge/Three.js-000000?logo=three.js&logoColor=white) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-000000?logo=framer&logoColor=white)

Personal portfolio website built with Next.js (app router) and TypeScript. The site presents projects, skills, timeline, certificates and includes several custom interactive UI components (canvas / WebGL effects, animated text, logo loop).

✨ Description
A single-page portfolio implemented with Next.js + TypeScript and styled with Tailwind CSS. The main content lives in app/page.tsx and the repository includes custom interactive components (SplashCursor, LiquidEther, ElectricBorder, LogoLoop, SplitText, BlurText, ProfileCard, etc.) used to create a polished presentation and subtle visual effects.

✅ Features
Responsive single-page portfolio layout (hero, skills, projects, timeline, certificates, contact)
Animated UI using Framer Motion and small utilities (SplitText, TypeAnimation)
Custom canvas / WebGL visual effects:
Splash cursor (custom WebGL / canvas shader implementation)
Liquid / WebGL backgrounds (Three.js + shaders)
Project cards with tags and external links
Vertical timeline for education and experience
Direct email CTA and CV download link (served from public/)
🛠 Tech Stack
Badges above show the main technologies. Quick list:

Next.js (app router)
React + TypeScript
Tailwind CSS
Framer Motion
three.js (for WebGL effects)
react-icons, react-vertical-timeline-component
Devicon icons: <img alt="React" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="24" height="24" /> <img alt="TypeScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="24" height="24" /> <img alt="Tailwind" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" width="24" height="24" /> <img alt="Three.js" src="https://raw.githubusercontent.com/mrdoob/three.js/dev/logo.png" width="24" height="24" />

📦 Installation
Prerequisites: Node.js (16+ recommended) and a package manager (npm, pnpm, yarn).

Clone the repo

bash
git clone https://github.com/Metyu5/Portofolio.git
cd Portofolio
Install dependencies

bash
npm install
# or
pnpm install
# or
yarn
▶️ Usage
Run development server:

bash
npm run dev
# or
pnpm dev
# or
yarn dev
Open http://localhost:3000 to view the site.

Build for production:

bash
npm run build
npm run start
Notes:

The project uses the Next.js app router. Main content is in app/page.tsx.
Static assets (images, cv.pdf) are in public/.
📁 Project Structure
(important files / folders)

Code
app/
  page.tsx            # Main page: hero, projects, timeline, certificates, contact
  layout.tsx          # Root layout, fonts (next/font) and globals
  globals.css         # Tailwind / global styles
  components/
    SplashCursor/     # Canvas / WebGL cursor effect
    LiquidEther/      # WebGL liquid effect
    ElectricBorder/   # Decorative animated border component
    LogoLoop/         # Rotating logo strip
    ProfileCard/      # Profile card component
    SplitText/, BlurText/, etc.
public/
  cv.pdf              # CV and other static assets (images, icons)
next.config.ts
README.md
🖼 Screenshots
Placeholder — screenshots / GIFs can be added here. Use images stored in public/ for embedding.

📄 License
No license file is included in the repository. If you want this project to be reusable, add a LICENSE (for example, MIT) to the repository.

✉️ Contact
Author: Stephanus S. Tupamahu
Email: metyutupamahu84@gmail.com
GitHub: https://github.com/Metyu5

If you want, I can add CI (lint/type checks), a LICENSE file, or a small CONTRIBUTING guide.
