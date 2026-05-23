# LINEA Studio — Minimalist Architecture & Interior Design Website

A premium, fully responsive, single-page web application built exclusively with **HTML5** and **CSS3** (no JavaScript). The website is optimized for mobile, tablet, and desktop viewports, presenting a modern, minimalist design aesthetic with smooth interactive elements.

---

## 🎨 Design Philosophy & Aesthetics
LINEA Studio is styled with a soft, warm neutral palette to deliver a high-end luxury feel:
- **Clean Grid Alignment**: Uses asymmetrical layouts and variable-span CSS grids to mimic premium editorial layout designs.
- **Micro-Animations**: Features subtle transitions on action buttons, navigation anchors, card structures, and portfolio overlays.
- **Fluid Typography**: Text sizes dynamically scale across devices to ensure legibility and visual rhythm.
- **Modern Color Palette**:
  - `Primary Background`: Warm Alabaster Cream (`#faf9f6`)
  - `Secondary Background`: Soft Sand Gray (`#f4f2ee`)
  - `Text Colors`: Deep Charcoal (`#1c1b18`) & Slate Gray (`#6b6861`)
  - `Accent Highlights`: Architectural Bronze / Taupe (`#8c7b68`)

---

## 🚀 Key Features

*   **Responsive Sticky Navigation**: A fixed header using CSS glassmorphism (translucent background blur) that remains pinned as you scroll.
*   **CSS-Only Mobile Menu (Checkbox Hack)**:
    *   Responsive drawer overlay controlled entirely by a checkbox state.
    *   No JS dependencies or frameworks.
    *   Interactive backdrop overlay that closes the menu drawer when a user clicks outside the menu.
*   **Asymmetric Hero Section**: Dynamic side-by-side grid split highlighting the primary visual badge and structural description.
*   **Philosophy & Stats Blocks**: A section showcasing values, an overlapping blockquote, and project milestones.
*   **Four-Card Services Grid**: Highlights core offerings with layout shifts and color transitions on hover.
*   **Selected Works Portfolio (Magazine Style)**:
    *   Implements an asymmetrical CSS grid combining column and row spans.
    *   Fully responsive grid resizing (scales from 1-column mobile to multi-column desktop layout).
    *   Smooth zoom actions and custom hover overlays displaying category, project title, and action icons.
*   **Interactive Contact Form**: A dark contrast CTA banner containing a form configured with dynamic underline inputs.

---

## 📂 File Directory

```text
TASK-2/
├── index.html        # Main semantic HTML structure
├── style.css         # Mobile-first CSS styling rules
├── hero.png          # High-resolution modern home exterior image
├── about.png         # Studio workshop / designer workspace photo
├── gallery_1.png     # Architectural concrete staircase study image
└── gallery_2.png     # Modernist forest villa living area image
```

---

## 💻 How to Run Locally

Since this project consists of standard HTML5 and CSS3, it can be launched directly in any web browser. However, for full responsive and asset loading consistency, we recommend running it via a local server.

### Option 1: Python HTTP Server (Recommended)
Run the following command in your terminal from the project folder:
```bash
python -m http.server 8080
```
Then, open your browser and navigate to:
```text
http://localhost:8080
```

### Option 2: Live Server (VS Code Extension)
1. Open the project folder in VS Code.
2. Click **Go Live** on the bottom status bar, or right-click `index.html` and select **Open with Live Server**.

---

## 📏 Responsive Layout Breakpoints

The CSS files are architected mobile-first and transition gracefully at the following breakpoints:
*   **Mobile default**: Viewports up to `599px` (single columns, full-width content, checkbox header drawer).
*   **Tablets & Small Screens (`@media (min-width: 600px)`)**: Services cards wrap to 2 columns; portfolio projects form a 2-column square grid.
*   **Large Tablets & Desktops (`@media (min-width: 768px)`)**: Hamburger button disappears, normal inline navigation layout loads; Hero/About panels switch to dual-column layouts; Portfolio adapts to asymmetric spans.
*   **Wide Desktop Screens (`@media (min-width: 1024px)`)**: Services cards align to 4 columns; headers side-align.
*   **Massive Screens Support (`@media (min-width: 1400px)`)**: Scaled root typography sizes to preserve ratio.
