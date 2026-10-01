"use client";

import Hero from "@/components/Hero";
import NeuralBackground from "@/components/NeuralBackground";
import Contact from "@/components/Contact";
import Project from "@/components/Project";
import {useState} from "react";

type Section = "home" | "project" | "contact";

export default function Home() {
  const [section, setSection] = useState<Section>("home");
  return (
    <main className="flex flex-col h-screen overflow-hidden">
      <NeuralBackground/>
      <nav className="fixed top-0 flex gap-6 p-6">
        <button onClick={() => setSection("home")}>Accueil</button>
        <button onClick={() => setSection("project")}>Projets</button>
        <button onClick={() => setSection("contact")}>Contact</button>
      </nav>
      {section === "home" && <Hero name="Riad Ramdane" title="Etudiant en IA / Data"/>}
      {section === "project" && <Project title="Mes projets"/>}
      {section === "contact" && <Contact title="Me Contacter"/>}
    </main>
  );
}
