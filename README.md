# Alan Khalaf Portfolio

React + Vite + GSAP + Three.js portfolio with bilingual support (EN/AR).

## Tech Stack
- React 18 + Vite
- Three.js + @react-three/fiber + @react-three/drei
- GSAP + ScrollTrigger
- Tailwind CSS
- Lucide React icons

## Installation
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Project Structure
```
alan-khalaf-portfolio/
├── src/
│   ├── components/
│   │   ├── layout/       # Navbar, Footer, ScrollProgress, FloatingButtons, CustomCursor
│   │   ├── three/          # 3D scene components (Three.js)
│   │   ├── gsap/           # GSAP animation wrappers
│   │   ├── ui/             # Reusable UI components
│   │   └── sections/       # Page sections
│   ├── hooks/              # Custom React hooks
│   ├── context/            # React context (Language)
│   ├── data/               # Static data (translations, projects, etc.)
│   ├── styles/             # Global CSS, animations, RTL, variables
│   └── utils/              # Helper utilities
├── public/                 # Static assets
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Features
- 3D interactive hero scene with floating objects and particles
- GSAP scroll animations (reveal, stagger, timeline, text)
- Full bilingual support (English/Arabic) with RTL
- Dark luxury UI with glassmorphism and neon glow effects
- Responsive design with mobile menu
- Custom cursor (desktop only)
- Scroll progress indicator
- Floating action buttons (WhatsApp, Phone, Scroll to top)
