"use client";
import { AnimatePresence, motion } from "motion/react";
import Slide from "@/components/Slide";
import {PROFIL, COMPETENCES} from "@/lib/profil";
import Image from "next/image";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaFileArrowDown } from "react-icons/fa6";


type OngletId = "presentation" | "competences" | "parcours";
type Onglet = { id: OngletId; label: string };

const ONGLETS : Onglet[] = [
  {
    id:"presentation",
    label:"Présentation"
  },
  {
    id:"competences",
    label:"Compétences"
  },
    {
    id:"parcours",
    label:"Parcours"
  },
]

const BOUTON = "rounded-full border flex items-center gap-2 border-sky-400 px-4 py-2 text-sky-400 transition hover:bg-sky-400 hover:text-slate-950";
const DIV = "flex h-[75vh] w-full max-w-2xl flex-col items-center justify-start gap-4 rounded-2xl border border-sky-400/30 bg-slate-950/40 p-8 text-center backdrop-blur-md";
const PAGE = "flex w-full min-h-0 flex-1 flex-col items-center justify-center gap-4"

export default function Hero() {
  const [page, setPage] = useState<OngletId>("presentation");
  return (
    <Slide>
      <div className={DIV}>
        <div className="flex gap-2">
          {ONGLETS.map((onglet) => (
            <button
              key={onglet.id}
              className={`rounded-full border border-sky-400 px-4 py-1 text-sm transition ${page === onglet.id ? "bg-sky-400 text-slate-950" : "bg-slate-950/80 text-sky-400"}`}
              onClick={() => setPage(onglet.id)}
            >
              {onglet.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {page === "presentation" && (
            <motion.div
              key="presentation"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              className={PAGE}
            >
              <Image src={PROFIL.chemin_image} alt="Photo de Riad Ramdane" width={128} height={128} className="rounded-full object-cover" />
              <h1 className="text-4xl font-bold">{PROFIL.nom}</h1>
              <p className="text-sky-300">{PROFIL.titre}</p>
              <p>{PROFIL.accroche}</p>
              <div className="flex gap-3">
                <a className={BOUTON} href={PROFIL.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
                <a className={BOUTON} href={PROFIL.github} target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
                <a className={BOUTON} href={PROFIL.chemin_cv} target="_blank"><FaFileArrowDown /> Voir mon CV</a>
              </div>
            </motion.div>
          )}

          {page === "competences" && (
          <motion.div
            key="competences"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            className={PAGE}
          >
            <div className="scroll-neural grid min-h-0 w-full flex-1 grid-cols-2 content-start gap-4 overflow-y-auto pr-2 text-left">
              {COMPETENCES.map((competence) => {
                const Icone = competence.icone;
                return (
                  <div
                    key={competence.categorie}
                    className="rounded-xl border border-sky-400/20 bg-sky-400/5 p-4"
                  >
                    <div className="mb-3 flex items-center gap-2 text-sm uppercase text-sky-300">
                      <Icone />
                      <h2>{competence.categorie}</h2>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {competence.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-sky-400/40 px-3 py-1 text-xs text-sky-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

          {page === "parcours" && (
            <motion.div
              key="parcours"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              className={PAGE}
            >
              <p>Bientôt</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Slide>
  );
}
