export type Categorie = "web" | "data-ia";
export type Contexte = "ecole" | "perso" | "entreprise";

export type Projet = {
  id: string;
  titre: string;
  description: string; 
  categories: Categorie[]; 
  tags: string[];
  lien?: string;
  dateDebut: string;
  dateFin?: string;
  contexte: Contexte;
};

export const PROJETS: Projet[] = [
    {
    id: "nt-career",
    titre: "NT Career : Plateforme d'aide à la recherche d'alternance",
    description: "Conception d'une plateforme web aidant les étudiants et chercheurs d'emploi à optimiser leur recherche d'alternance et d'offres d'emploi.",
    categories: ["web", "data-ia"],
    tags: ["React", "Next.js", "Tailwind", "Supabase","Postgres","LLM"],
    dateDebut: "2026-09",
    contexte: "perso",
    },
    {
    id: "house-price",
    titre: "Prédiction de prix immobiliers",
    description: "Pipeline ML complet sur le dataset Ames Housing, avec comparaison de 5 modèles et analyse SHAP.",
    categories: ["data-ia"],
    tags: ["Python", "scikit-learn", "XGBoost", "SHAP"],
    lien: "https://github.com/GriadeDev/house-price-prediction",
    dateDebut: "2026-08",
    dateFin: "2026-08",
    contexte: "perso",
    },
    {
    id: "recognition-picture",
    titre: "Modèle de reconnaissance d'objets par Deep Learning (CNN)",
    description: "Conception et entraînement d'un réseau de neurones convolutif (CNN) en Python/TensorFlow pour la classification d'images et en utilisant des techniques d'optimisation (data augmentation, dropout, normalisation)",
    categories: ["data-ia"],
    tags: ["Python", "TensorFlow"],
    dateDebut: "2026-07",
    dateFin: "2026-07",
    contexte: "perso"
    }
];