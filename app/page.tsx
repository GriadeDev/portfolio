"use client";

import Hero from "@/components/Hero";
import NeuralBackground from "@/components/NeuralBackground";
import Contact from "@/components/Contact";
import Project from "@/components/Project";
import {useState} from "react";
import { AnimatePresence } from "motion/react";
import { Section } from "@/lib/noeuds";
import NavNodes from "@/components/NavNodes";

export default function Home() {
  const [section, setSection] = useState<Section>("home");
  return (
    <main className="flex flex-col h-screen overflow-hidden">
      <NeuralBackground/>
      <NavNodes active={section} onSelect={setSection} />
      {/* sans AnimatePresence, react suprime l'élément d'un coup et l'animation exit n'a pas le temps de se jouer */}
      <AnimatePresence mode="wait"> 
        {section === "home" && <Hero key="home" name="Riad Ramdane" title="Etudiant en IA / Data"/>}
        {section === "project" && <Project key="project" title="Mes projets"/>}
        {section === "contact" && <Contact key="contact" title="Me Contacter"/>}
      </AnimatePresence>
    </main>
  );
}
