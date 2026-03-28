// js/main.js

import { updateSimulation, sim } from "./simulation.js";
import { createScreenTexture, updateScreen } from "./screens.js";
import { setupInteraction } from "./interaction.js";

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

// Camera
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 100);
camera.position.set(0, 1.6, 3);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

// Light
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(0, 5, 5);
scene.add(light);

// Floor
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(10, 10),
  new THREE.MeshStandardMaterial({ color: 0x222222 })
);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

// Screen
const { canvas, ctx, texture } = createScreenTexture();

const screen = new THREE.Mesh(
  new THREE.PlaneGeometry(2, 1),
  new THREE.MeshBasicMaterial({ map: texture })
);

screen.position.set(0, 1.5, -3);
screen.name = "monitor";

scene.add(screen);

// Movement
let keys = {};

window.addEventListener("keydown", e => keys[e.key] = true);
window.addEventListener("keyup", e => keys[e.key] = false);

function move() {
  const speed = 0.05;

  if (keys["w"]) camera.position.z -= speed;
  if (keys["s"]) camera.position.z += speed;
  if (keys["a"]) camera.position.x -= speed;
  if (keys["d"]) camera.position.x += speed;
}

// Interaction
setupInteraction(camera, scene);

// HUD
const depthUI = document.getElementById("depth");
const gasUI = document.getElementById("gas");

// Animation loop
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);

  const dt = clock.getDelta();

  move();
  updateSimulation(dt);
  updateScreen(ctx, canvas, texture);

  depthUI.innerText = `Depth: ${sim.depth.toFixed(1)} m`;
  gasUI.innerText = `Gas: ${sim.gas.toFixed(0)} ppm`;

  renderer.render(scene, camera);
}

animate();
