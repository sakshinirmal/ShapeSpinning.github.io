import * as THREE from 'three';

// Get the shape type from the query parameter
const urlParams = new URLSearchParams(window.location.search);
const shapeType = urlParams.get('type');

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a container for the shape
const shapeContainer = new THREE.Object3D();
scene.add(shapeContainer);

// Position the camera
camera.position.z = 5;

// Define shape geometries and materials
const shapeGeometries = {
    cube: new THREE.BoxGeometry(),
    sphere: new THREE.SphereGeometry(1, 32, 32),
    cylinder: new THREE.CylinderGeometry(0.5, 0.5, 1, 32),
    cone: new THREE.ConeGeometry(0.5, 1, 32)
};

const shapeMaterials = {
    cube: new THREE.MeshBasicMaterial({ color: 0xff0000 }),
    sphere: new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
    cylinder: new THREE.MeshBasicMaterial({ color: 0x0000ff }),
    cone: new THREE.MeshBasicMaterial({ color: 0xffff00 })
};

// Create the selected shape and add it to the container
const geometry = shapeGeometries[shapeType];
const material = shapeMaterials[shapeType];
const selectedShape = new THREE.Mesh(geometry, material);
shapeContainer.add(selectedShape);

// Define an animation function
function animate() {
    requestAnimationFrame(animate);

    // Rotate the shape container
    shapeContainer.rotation.x += 0.01;
    shapeContainer.rotation.y += 0.01;

    // Render the scene with the camera
    renderer.render(scene, camera);
}

// Start the animation loop
animate();
