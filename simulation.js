// js/simulation.js

export const sim = {
  depth: 2800,
  rop: 10,
  gas: 2000,
  wob: 12,
  rpm: 120,
  lithology: "Shale"
};

export function updateSimulation(dt) {
  sim.depth += sim.rop * dt;

  sim.rop += (Math.random() - 0.5) * 0.5;
  sim.gas += (Math.random() - 0.5) * 100;

  sim.rop = Math.max(5, Math.min(15, sim.rop));
  sim.gas = Math.max(500, Math.min(5000, sim.gas));

  // Geological behavior
  if (sim.depth > 3000) {
    sim.lithology = "Sandstone";
    sim.gas += 20;
  } else {
    sim.lithology = "Shale";
  }
}
