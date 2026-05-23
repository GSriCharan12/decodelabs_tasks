# Aether Digital Studio 🌐

A premium, modern, and fully responsive static webpage built entirely with semantic **HTML5** and **CSS3**. No external frameworks or JavaScript libraries are used, ensuring a clean, lightweight, and performant frontend architecture.

---

## 📂 File Structure

The project workspace contains the following core files:

```bash
TASK-1/
├── index.html           # Main semantic webpage structure
├── style.css            # Modular external stylesheet
├── hero_creative.png    # Glassmorphic 3D rendering for Hero section
├── about_studio.png     # Collaborative art composition for About section
├── showcase_banner.png  # Panoramic liquid gradient wave background
└── README.md            # Project documentation (this file)
```

---

## 🎨 Design System & Colors

The design focuses on premium layout aesthetics, balanced typography, and smooth micro-interactions:

*   **Background (Body)**: `#faf9f6` (Alabaster Warm Cream)
*   **Primary Brand**: `#6366f1` (Lavender Indigo)
*   **Deep Accent**: `#4f46e5` (Royal Indigo)
*   **Typography (Headings)**: `Outfit` (Bold, geometric sans-serif)
*   **Typography (Body Text)**: `Plus Jakarta Sans` (Clean, highly legible)
*   **Borders**: Subtle, light outlines (`rgba(17, 18, 23, 0.06)`) to divide card sections cleanly.

---

## ✨ Features & Mechanics

1.  **Pure CSS Responsive Menu**:
    Using a hidden checkbox hack (`#nav-toggle:checked ~ .header__nav`), the mobile toggle bar translates and renders the navigation link list on mobile viewports natively without requiring any JavaScript.
2.  **Dual-Axis Layout System**:
    Leverages CSS Grid for multi-column grids (like the Capabilities Section) and Flexbox for linear alignment (header menu alignment and metric blocks).
3.  **Visual Asset Integration**:
    No broken external image links. All background, hero, and about images are custom-generated, high-fidelity PNG files local to the workspace.
4.  **Glassmorphism**:
    The showcase banner features a floating visual card with frozen blur backdrops (`backdrop-filter: blur(16px)`), standard in modern premium landing pages.
5.  **Micro-animations**:
    Cards elevate dynamically (`transform: translateY(-8px)`), shadows expand into colored glows, links feature smooth underline slides, and vectors rotate slightly on mouse hover.

---

## 🚀 How to Run & Preview

### Method 1: Direct Open
Double-click `index.html` or drag-and-drop it into any modern web browser.

### Method 2: Local HTTP Server (Recommended)
To ensure all asset paths and features resolve perfectly under standard protocols, you can serve the directory using Python or Node:

**Using Python:**
```powershell
python -m http.server 8080
```
Then open your browser and navigate to `http://localhost:8080`.

**Using Node.js (npx):**
```bash
npx serve
```
Then navigate to the port output in the terminal.
