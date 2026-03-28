# SERHOUDJI — Mud Logging Unit Simulation

> **Next-Generation Oil Field Solutions**

An interactive, browser-based 3D simulation of a real mud logging unit (MLU) — built with Three.js, deployable as a single HTML file with zero dependencies.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-gold?style=flat-square)](https://serhoudjisouhil93-alt.github.io/mud-logging-unit/)
[![Technology](https://img.shields.io/badge/Built%20with-Three.js%20r128-blue?style=flat-square)](https://threejs.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

---

## Overview

This project simulates the interior of a mud logging unit as used in petroleum exploration and well drilling operations. Users can explore the unit in first-person view and interact with every major instrument to learn its function, working principle, and geological significance.

Designed as a **portfolio and educational tool** for petroleum geology and petrophysics students and professionals.

---

## Features

- **First-person 3D navigation** — WASD / arrow keys + mouse look (Pointer Lock API)
- **Physically-based rendering** — ACES filmic tone mapping, procedural PBR textures, real shadow cones
- **7 interactive instruments** — walk up and press `E` to inspect any instrument
- **Real instrument geometry** — binocular microscope, mud balance, UV lamp, gas trap, 19" equipment racks, fire extinguisher built from proper 3D geometry (cylinders, toruses, lathe shapes)
- **Live log displays** — canvas-rendered gas chromatograph curves (C1–C5), drilling parameter curves (ROP/WOB/RPM), mud properties table on the workstation monitors
- **Simulated live data** — depth counter, blinking LEDs, flickering lights
- **SERHOUDJI brand board** — gold-trim branded backboard with spotlight above the workstation

---

## Instruments Covered

| Instrument | Category |
|---|---|
| Gas Chromatograph | Gas Analysis — C1 to C5 hydrocarbon detection |
| Binocular Microscope | Sample Analysis — drill cutting lithology |
| Mud Balance | Mud Properties — drilling fluid density |
| UV Fluorescence Lamp | Show Detection — crude oil and condensate |
| Gas Trap / Degasser | Gas Extraction — mud gas liberation |
| Logging Workstation | Data Systems — real-time acquisition |
| Equipment Rack | Electronics — signal conditioning and comms |

Each instrument panel includes: **what it does**, **how it works**, **geological significance**, and **live simulated readings**.

---

## Controls

| Key | Action |
|---|---|
| `W A S D` or `↑ ↓ ← →` | Move |
| Mouse (click first) | Look around |
| `E` | Inspect nearest instrument |
| `ESC` | Release mouse / close panel |

---

## Technical Stack

- **Three.js r128** — 3D engine (WebGL)
- **Vanilla JavaScript** — no build tools, no frameworks
- **HTML5 Canvas API** — procedural textures + screen displays
- **Pointer Lock API** — FPS mouse look
- **GitHub Pages** — free static hosting

---

## Running Locally

```bash
# Clone the repository
git clone https://github.com/serhoudjisouhil93-alt/mud-logging-unit.git
cd mud-logging-unit

# Start a local server (required for Pointer Lock API)
python3 -m http.server 8000

# Open in browser
# http://localhost:8000/
```

> **Note:** Opening `index.html` directly (`file://`) will disable mouse look due to browser security restrictions. Always use a local server.

---

## About

Built by **Souhil Serhoudji** — Petroleum Geology student, Algeria.

Part of a portfolio of data science and simulation tools for the oil and gas industry.

- **LinkedIn:** [linkedin.com/in/your-profile](https://www.linkedin.com/in/serhoudji-souhil-abderrhaim-480979399/)
- **Fiverr:** [fiverr.com/serhoudji_twelve](https://fiverr.com/serhoudji_twelve)

---

## License

MIT License — free to use, modify, and distribute with attribution.
