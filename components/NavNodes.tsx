import { NOEUDS, Section } from "@/lib/noeuds"

type NavNodesProps = {
    active: Section;
    onSelect: (s: Section) => void;
}

export default function NavNodes({active, onSelect} : NavNodesProps){
    return (<div>
        {NOEUDS.map((noeud) => (
            <button 
            className={`absolute -translate-x-1/2 -translate-y-1/2 border border-sky-400 z-10 rounded-full px-5 py-2 hover:scale-110 transition ${active === noeud.id ? "bg-sky-400 text-slate-950 shadow-[0_0_20px_rgba(56,189,248,0.8)]" : "bg-slate-950/80 text-sky-400"}`} 
            style={{ left: `${noeud.x}%`, top: `${noeud.y}%` }}
            key={noeud.id}
            onClick={() => onSelect(noeud.id)}
            >
                {noeud.label}
            </button>
        ))}     
    </div>
    )
}