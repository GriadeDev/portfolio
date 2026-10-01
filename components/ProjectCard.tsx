import { Projet, LABELS_CONTEXTE, formaterDate } from "@/lib/projets"

type ProjectCardProps = {
    projet : Projet;
}

export default function ProjectCard({projet}:ProjectCardProps){
    return(
        <div className="flex flex-col gap-3 rounded-xl border border-sky-400/30 bg-slate-950/80 p-6 backdrop-blur">
            <h3 className="text-lg font-semibold">{projet.titre}</h3>
            <p>{projet.description}</p>
            <div className="flex flex-wrap gap-2">
                {projet.tags.map((tag) => (
                <span className="rounded-full border border-sky-400/40 px-3 py-1 text-xs text-sky-300" key={tag}>{tag}</span>
                ))}
            </div>
            <div className="flex gap-3 text-sm text-slate-400">
                {projet.dateFin ? <p className="text-emerald-400">finis</p> : <p className="text-amber-400">en cours</p> }
                <p>{formaterDate(projet.dateDebut)}</p>
                <p>{LABELS_CONTEXTE[projet.contexte]}</p>
            </div>
            <button className="mt-auto rounded-full border border-sky-400 px-4 py-2 text-sky-400 self-start">En savoir plus</button>
        </div>
    );
}