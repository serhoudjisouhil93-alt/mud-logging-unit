// js/screens.js

import { sim } from "./simulation.js";

export function createScreenTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 256;

  const ctx = canvas.getContext("2d");
  const texture = new THREE.CanvasTexture(canvas);

  return { canvas, ctx, texture };
}

export function updateScreen(ctx, canvas, texture) {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff88";
  ctx.font = "16px monospace";

  ctx.fillText(`Depth: ${sim.depth.toFixed(1)} m`, 10, 30);
  ctx.fillText(`Gas: ${sim.gas.toFixed(0)} ppm`, 10, 60);
  ctx.fillText(`ROP: ${sim.rop.toFixed(1)}`, 10, 90);
  ctx.fillText(`Lithology: ${sim.lithology}`, 10, 120);

  // simple animated curve
  ctx.beginPath();
  ctx.strokeStyle = "#00ff88";

  for (let x = 0; x < canvas.width; x++) {
    const y = 150 + Math.sin(x * 0.05 + sim.depth * 0.01) * 30;
    ctx.lineTo(x, y);
  }

  ctx.stroke();

  texture.needsUpdate = true;
}
