"use client";

import { useState } from "react";
import Slide from "@/components/Slide";
import { PROJETS, Categorie, LABELS_CATEGORIE } from "@/lib/projets"
import ProjectCard  from "@/components/ProjectCard";

type ProjectProps = {
    title: string;
}



export default function Project({title}: ProjectProps) {
  const [filtre, setFiltre] = useState<Categorie | "tous">("tous");
  const projetsFiltres = filtre === "tous" ? PROJETS : PROJETS.filter((projet) => projet.categories.includes(filtre)) 
  const FILTRES: (Categorie | "tous")[] = ["tous", "web", "data-ia"];
  return (
    <Slide>
      <h2 className="mb-8 text-3xl font-bold">{title}</h2>
      <div className="flex gap-3 mb-6">
        {FILTRES.map((cat) => (
        <button
          key={cat}
          className={`rounded-full border border-sky-400 px-4 py-1 text-sm transition ${filtre === cat ? "bg-sky-400 text-slate-950" : "bg-slate-950/80 text-sky-400"}`}
          onClick={() => setFiltre(cat)}
        >
          {cat === "tous" ? "Tous" : LABELS_CATEGORIE[cat]}
        </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-6 w-full max-w-4xl"> 
        {projetsFiltres.map((projet) => (
          <ProjectCard key={projet.id} projet={projet}/>
        ))}
      </div>
    </Slide>
  );
}
