# 🧱 KODEBLOCK Landing Page

A modern, responsive landing page for **KODEBLOCK** — built with **React (Vite)** and **Tailwind CSS v4**.  
This project is collaborative and structured for scalability, CI/CD, and easy contribution.

---

## 🚀 Features

- ⚛️ React + Vite (lightning-fast development & builds)
- 🎨 Tailwind CSS v4 for utility-first styling
- 📱 Fully responsive (desktop → mobile)
- 🧩 Modular sections for quick updates
- 🔧 Reusable components (Navbar, Footer, Cards, etc.)
- 🧠 Organized folder structure for teamwork
- 🌿 Git branching workflow (`main`, `dev`, `feature/*`)
- ☁️ Ready for Vercel or Netlify deployment

---

## 🏗️ Project Structure

src/
├─ assets/
├─ components/
│ ├─ Card/
│ │ ├─ ProjectCard.jsx
│ │ └─ TeamCard.jsx
│ ├─ Navbar.jsx
│ ├─ Footer.jsx
│ ├─ Button.jsx
│ └─ SectionHeader.jsx
├─ sections/
│ ├─ Hero.jsx
│ ├─ Projects.jsx
│ ├─ About.jsx
│ ├─ Team.jsx
│ └─ CTA.jsx
├─ pages/
│ └─ Home.jsx
├─ utils/
│ └─ constants.js
├─ styles/
│ └─ index.css
├─ App.jsx
└─ main.jsx


---

## 🛠️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/brightdevelops/Kodeblock-landing-page.git
cd Kodeblock-landing-page

2️⃣ Install dependencies

npm install 

3️⃣ Run the development server

npm run dev 

Visit → http://localhost:5173

🎨 Tailwind CSS v4 Configuration

This project uses Tailwind CSS v4.

src/styles/index.css

@import "tailwindcss";

:root { --kb-dark: #3a3a3a; --kb-light: #ebe2d6; }
html, body, #root { height: 100%; }


postcss.config.js

export default {
  plugins: {
    '@tailwindcss/postcss': {}
  }
}

🌿 Branch Workflow
Branch	Purpose
main	Production-ready code
dev	Integration branch (feature merges)
feature/*	Individual features (e.g. feature/hero-section)

Typical flow

# 1. Pull latest dev
git pull origin dev

# 2. Create feature branch
git checkout -b feature/section-name

# 3. Commit your work
git commit -m "feat: add hero section"

# 4. Push to GitHub
git push -u origin feature/section-name


Then open a Pull Request → target dev.
After approval, merge dev → main for deployment.

💻 Build for Production
npm run build
npm run preview


Output files appear in the dist/ directory.

🌍 Deployment

Easiest options:

Vercel → auto-deploys on push to main

Netlify → build command npm run build, output dist

👥 Contributing Guide

Fork the repo

Create a feature branch

Commit changes using Conventional Commits

Open a PR into dev

Request a review from a team member

✅ Ensure lint and build pass before submitting PRs.

🧠 Credits

Developed collaboratively by the KODEBLOCK team
Led by BrightDevelops
 💡

📄 License

MIT © 2025 BrightDevelops

🧭 Quick Start Summary
Command	Description
npm install	Install dependencies
npm run dev	Start development server
npm run build	Build for production
npm run preview	Preview the build