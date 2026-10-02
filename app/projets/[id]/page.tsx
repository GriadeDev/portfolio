import { PROJETS, LABELS_CONTEXTE, formaterDate } from "@/lib/projets"
import Link from "next/link";

import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProjetPage({ params }: PageProps) {
  const { id } = await params;
  const projet = PROJETS.find((p) => p.id === id);
  if (!projet) {
    notFound();
  }
   return (
    <main className="mx-auto max-w-3xl p-8 flex flex-col gap-4">
      <Link
        href="/"
        className="text-sm text-sky-400 hover:underline">
        Retour
      </Link>
      <h1 className="text-3xl font-bold">{projet.titre}</h1>
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
      {projet.lien && <a className="mt-auto self-start rounded-full border border-sky-400 px-4 py-2 text-sky-400 transition hover:bg-sky-400 hover:text-slate-950 self-start" href={projet.lien} target="_blank" rel="noopener noreferrer"> Vers le github</a>}
    </main>
  );
}