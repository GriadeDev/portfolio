import type { IconType } from "react-icons";
import { FaBrain, FaToolbox, FaCode, FaDiagramProject, FaLayerGroup, FaLanguage, FaHeart } from "react-icons/fa6";

export type Profil={
    chemin_image: string,
    chemin_cv:string,
    linkedin: string,
    github:string,
    nom:string,
    titre:string,
    accroche:string
};

export type GroupeCompetences = {
  categorie: string;
  icone: IconType;
  items: string[];
};

export const PROFIL: Profil ={
    chemin_image: "/moi.png",
    chemin_cv: "/cv-riad-ramdane.pdf",
    linkedin: "https://www.linkedin.com/in/riad-ramdane/",
    github: "https://github.com/GriadeDev",
    nom: "Riad Ramdane",
    titre: "Étudiant en intelligence artificielle et DATA",
    accroche: "a ecrire"
} ;

export const COMPETENCES: GroupeCompetences[] = [
    {
        categorie : "IA",
        icone: FaBrain,
        items : ["TensorFlow", "Scikit-learn", "LLM", "Apprentissage supervisé", "XGBoost", "SHAP","pandas","NumPy"]
    },
    {
        categorie : "Logiciels",
        icone: FaToolbox,
        items : ["Suites Office", "Illustrator", "Git", "Suites JetBrains", "Visual Studio Code", "Modelio", "Docker","Excel", "Power BI", "Supabase"]
    },
    {
        categorie : "Langages",
        icone: FaCode,
        items : ["Python", "SQL", "HTML", "CSS", "Java", "JavaScript", "C++", "Rust", "PHP", "C" ,"C#"]
    },
    {
        categorie : "Méthodes",
        icone: FaDiagramProject,
        items : ["UML", "Agile Scrum", "Gitflow (+ CI/CD)", "Tests unitaires (JUnit)"]
    },
    {
        categorie : "Frameworks",
        icone: FaLayerGroup,
        items : ["Symfony", "Next.js", "React"]
    },
    {
        categorie : "Langues",
        icone: FaLanguage,
        items : ["Français (Langue maternelle)", "Anglais (B2)", "Espagnol (A2)"]
    }, 
    {
        categorie : "Passions",
        icone: FaHeart,
        items : ["Piano", "Cinéma", "Musculation"]
    },
];