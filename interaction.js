// js/interaction.js

export function setupInteraction(camera, scene) {
  const raycaster = new THREE.Raycaster();

  window.addEventListener("keydown", (e) => {
    if (e.key === "e") {
      raycaster.setFromCamera({ x: 0, y: 0 }, camera);
      const intersects = raycaster.intersectObjects(scene.children);

      if (intersects.length > 0) {
        console.log("Interacting with:", intersects[0].object.name);
      }
    }
  });
}
