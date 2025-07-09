import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    console.log("Three.js Scene is initializing...");

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Load Texture
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load("/tshirt.png", function (texture) {
      console.log("Texture loaded successfully");

      const geometry = new THREE.PlaneGeometry(2, 3); // Plane size for clothing
      const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
      const shirt = new THREE.Mesh(geometry, material);
      
      scene.add(shirt);
      shirt.position.set(0, 0, 0); // Center the shirt

      // Animation Loop
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
      animate();
    }, undefined, function (error) {
      console.error("Error loading texture:", error);
    });

    // Cleanup
    return () => {
      console.log("Cleanup: Removing Three.js canvas");
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default ThreeScene;
