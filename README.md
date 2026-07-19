# 🍳 Recipe Hub

A modern recipe discovery app built with **Next.js** — created as a hands-on learning project to master the App Router, dynamic routing, API routes, and React fundamentals from the ground up.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8?logo=tailwindcss)

## 📖 About This Project

This project was built as a practice ground to learn **Next.js from zero**. Instead of following a generic tutorial, every feature here was built step-by-step to understand *why* it works, not just *how* — covering routing, rendering strategies, and data flow the way a real-world app would use them.

## ✨ Features

- 🏠 **Home Page** — Browse all recipes in a responsive card grid
- 🔍 **Live Search** — Instantly filter recipes by name
- 📄 **Recipe Details** — Dynamic routes (`/recipe/[id]`) showing ingredients & step-by-step instructions
- 📸 **Gallery ("My Creations")** — Upload photos of your own cooked dishes with a hover-to-delete interface
- 🎨 **Animated Navbar** — Custom glow and wiggle hover effects
- 🔌 **API Routes** — Recipe data served from a single, centralized API endpoint (`/api/recipes`)

## 🧠 Concepts Practiced

| Concept | Where It's Used |
|---|---|
| App Router & File-based Routing | Overall project structure |
| Dynamic Routes | `/recipe/[id]` |
| Server Components | Recipe detail page |
| Client Components (`"use client"`) | Search bar, Gallery, Navbar |
| API Routes | `/api/recipes` |
| React Hooks (`useState`, `useEffect`) | Search, data fetching, image upload |
| Array Methods (`.map()`, `.filter()`, `.find()`) | Rendering lists, search filtering, finding recipes |
| Tailwind CSS | All UI styling |

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **UI Library:** React
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## 🚀 Getting Started

```bash
git clone https://github.com/muhammadmursal/recipe-hub.git
cd recipe-hub
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 👨‍💻 Author

**Muhammad Mursal**
Frontend Developer | React & Next.js Enthusiast
[GitHub](https://github.com/muhammadmursal)

---

⭐ This project represents a milestone in learning modern React-based frameworks — built entirely from scratch, one concept at a time.