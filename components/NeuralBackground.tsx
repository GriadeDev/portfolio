"use client";

import { useRef, useEffect } from "react";

type Point = { x: number; y: number; vx: number; vy: number };

const NB_POINTS = 80; // nombre de neurones
const DISTANCE_MAX = 140; // distance max pour relier deux points
const COULEUR = "56, 189, 248"; // bleu cyan en RGB

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let points: Point[] = [];
    const souris = { x: -1000, y: -1000 };
    let animationId = 0;

    // Adapte le canvas à la taille de l'écran (net sur les écrans haute résolution)
    const redimensionner = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      points = Array.from({ length: NB_POINTS }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      }));
    };

    // Dessine une image de l'animation, puis redemande la suivante
    const dessiner = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      for (const p of points) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }

      // Liens entre les points proches, plus transparents quand ils s'éloignent
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i];
          const b = points[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < DISTANCE_MAX) {
            ctx.strokeStyle = `rgba(${COULEUR}, ${(1 - d / DISTANCE_MAX) * 0.4})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        // Liens vers la souris
        const p = points[i];
        const dSouris = Math.hypot(p.x - souris.x, p.y - souris.y);
        if (dSouris < DISTANCE_MAX * 1.5) {
          ctx.strokeStyle = `rgba(${COULEUR}, ${(1 - dSouris / (DISTANCE_MAX * 1.5)) * 0.8})`;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(souris.x, souris.y);
          ctx.stroke();
        }
      }

      // Les points eux-mêmes
      ctx.fillStyle = `rgba(${COULEUR}, 0.9)`;
      for (const p of points) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(dessiner);
    };

    const bougerSouris = (e: MouseEvent) => {
      souris.x = e.clientX;
      souris.y = e.clientY;
    };
    const quitterSouris = () => {
      souris.x = -1000;
      souris.y = -1000;
    };

    redimensionner();
    dessiner();
    window.addEventListener("resize", redimensionner);
    window.addEventListener("mousemove", bougerSouris);
    document.addEventListener("mouseleave", quitterSouris);

    // Nettoyage quand le composant disparaît
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", redimensionner);
      window.removeEventListener("mousemove", bougerSouris);
      document.removeEventListener("mouseleave", quitterSouris);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 bg-slate-950" />;
}