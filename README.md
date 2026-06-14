# ⚡ Amrit | Creative Developer Portfolio

An immersive, cyberpunk-modern, and premium developer portfolio website designed to showcase software engineering projects, content creation highlights, and interactive spatial simulation modules.

🚀 **Live Site:** [https://amrit-droid-og.github.io/Portfolio/](https://amrit-droid-og.github.io/Portfolio/)

---

## 🎨 Visual Aesthetics & Motion Design

This portfolio delivers a premium, highly interactive user experience utilizing advanced web animations:

* **Lenis Smooth Scroll** – Buttery-smooth inertia scrolling across all sections.
* **Preloader Bootloader** – A stylized terminal-boot sequence displaying loading percentages before fading into the workspace.
* **Interactive Aura Glow** – Subtle mouse-reactive ambient background illumination.
* **Magnetic Physics** – Buttons, navigation items, and social links realistically gravitate toward the mouse cursor on hover using GSAP physics.
* **Custom Magnetic Cursor** – Fluid hover tracking that morphs size and color based on UI element tags.
* **Typographic Reveals** – Elements stagger and translate upward cleanly on scroll.

---

## 💻 Featured Work Simulations

The Selected Works section features custom-crafted interactive React canvas screens mimicking live development states:

1. **🛡️ Trust-Browser (Privacy Browser)**
   * *Description:* Open-source Chromium/Electron privacy client blocking tracker and cookie telemetry.
   * *Simulation:* A mock settings screen showcasing active shields with tracker block counts ticking up in real-time.
2. **🔮 ARVR (Spatial XR Simulations)**
   * *Description:* Spatial augmented and virtual reality modules utilizing web graphics APIs.
   * *Simulation:* A rotating wireframe 3D grid with HUD targeting reticle and active coordinate vector telemetries (`X, Y, Z`).
3. **💝 Mother-Day-Special (Interactive greeting)**
   * *Description:* Fully animated HTML/CSS/GSAP responsive digital card.
   * *Simulation:* Floating love-heart particles drifting over a pulsing glowing interactive message card.

---

## 🛠️ Built With

* **Core:** React, JavaScript (ES6+), HTML5, CSS3
* **Animations:** GSAP (GreenSock), Framer Motion, Lenis Scroll
* **Styling:** Tailwind CSS (v4)
* **Icons:** React Icons (`react-icons/si`, `react-icons/fi`, `react-icons/vsc`)
* **Tooling:** Vite, Rolldown Bundler

---

## ⚙️ Local Development

### 1. Clone the repository
```bash
git clone https://github.com/Amrit-droid-og/Portfolio.git
cd Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run dev server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```

---

## 🚀 Deployment

This project is configured with **GitHub Actions** for automatic deployment to **GitHub Pages**. 

On every push to the `main` branch:
1. The GitHub runner spins up Node.js.
2. Installs clean dependencies (`npm ci`).
3. Builds the production bundle (`npm run build`).
4. Deploys the `./dist` folder assets directly to your GitHub Pages site.
