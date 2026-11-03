"use client";

import { useEffect, useRef } from "react";

/**
 * Real Three.js 3D hero element: an abstract wireframe icosahedron with an
 * inner glowing core. It rotates slowly, tilts subtly with the mouse, and
 * drifts with page scroll. If WebGL is unavailable the canvas hides itself
 * and the hero still works (gradient + video fallback behind it).
 */
export default function Hero3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    let renderer;
    let raf = 0;
    let cleanup = () => {};
    const mount = mountRef.current;
    if (!mount) return undefined;

    (async () => {
      try {
        const THREE = await import("three");
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
        camera.position.set(0, 0, 6);

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mount.appendChild(renderer.domElement);

        const group = new THREE.Group();
        const wire = new THREE.Mesh(
          new THREE.IcosahedronGeometry(1.9, 1),
          new THREE.MeshBasicMaterial({ color: 0xf5b841, wireframe: true, transparent: true, opacity: 0.55 })
        );
        const core = new THREE.Mesh(
          new THREE.IcosahedronGeometry(1.1, 0),
          new THREE.MeshStandardMaterial({ color: 0x0f766e, roughness: 0.35, metalness: 0.4, emissive: 0x0f766e, emissiveIntensity: 0.35 })
        );
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(2.6, 0.015, 8, 100),
          new THREE.MeshBasicMaterial({ color: 0xf2efe9, transparent: true, opacity: 0.35 })
        );
        ring.rotation.x = Math.PI / 2.4;
        group.add(wire, core, ring);
        scene.add(group);

        const light = new THREE.DirectionalLight(0xffffff, 2);
        light.position.set(4, 6, 6);
        scene.add(light);
        scene.add(new THREE.AmbientLight(0xffffff, 0.5));

        const mouse = { x: 0, y: 0 };
        const onMouse = (e) => {
          mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
          mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
        };
        window.addEventListener("mousemove", onMouse);

        const resize = () => {
          const w = mount.clientWidth || 1;
          const h = mount.clientHeight || 1;
          renderer.setSize(w, h);
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        };
        resize();
        window.addEventListener("resize", resize);

        const clock = new THREE.Clock();
        const tick = () => {
          const t = clock.getElapsedTime();
          group.rotation.y = t * 0.18 + mouse.x * 0.25;
          group.rotation.x = 0.35 + mouse.y * 0.2;
          group.position.y = Math.sin(t * 0.6) * 0.12 - window.scrollY * 0.0004;
          renderer.render(scene, camera);
          raf = requestAnimationFrame(tick);
        };
        tick();

        cleanup = () => {
          cancelAnimationFrame(raf);
          window.removeEventListener("mousemove", onMouse);
          window.removeEventListener("resize", resize);
          renderer.dispose();
          if (renderer.domElement.parentNode === mount) {
            mount.removeChild(renderer.domElement);
          }
        };
      } catch {
        // No WebGL / three failed: leave the hero gradient + video in place.
        mount.style.display = "none";
      }
    })();

    return () => cleanup();
  }, []);

  return <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />;
}
