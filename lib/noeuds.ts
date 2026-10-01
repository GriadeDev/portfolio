export type Section = "home" | "project" | "contact";

export type Noeud = {
  id: Section;
  label: string;
  x: number; // position horizontale en % de l'écran
  y: number; // position verticale en % de l'écran
};

export const NOEUDS: Noeud[] = [
  { id: "home", label: "Accueil", x: 15, y: 50 },
  { id: "project", label: "Projets", x: 85, y: 25 },
  { id: "contact", label: "Contact", x: 85, y: 75 },
];