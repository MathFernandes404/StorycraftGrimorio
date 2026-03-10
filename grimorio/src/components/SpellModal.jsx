import { X, Hexagon } from "lucide-react";

export default function SpellModal({ spell, onClose }) {

  if (!spell) return null;

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">

      {/* overlay */}
      <div
        className="absolute inset-0"
        onClick={onClose}
      ></div>

      {/* container */}
      <div className="relative w-full max-w-lg max-h-[85vh] bg-slate-900 rounded-2xl border border-amber-500/50 shadow-[0_0_50px_rgba(245,158,11,0.15)] overflow-hidden transform transition-all">

        {/* bordas decorativas */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>

        {/* botão fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-amber-400 hover:bg-slate-800 rounded-full transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 relative">

          {/* marca d'água */}
          <Hexagon className="absolute right-[-20px] top-[-20px] w-48 h-48 text-indigo-900/20 rotate-12 pointer-events-none" />

          <div className="relative z-10">

            <div className="flex items-center gap-2 mb-2 text-amber-500">
              <Hexagon className="w-4 h-4 fill-amber-500/20" />
              <span className="text-xs font-bold uppercase tracking-widest">
                Feitiço de {spell.grau}º Grau
              </span>
            </div>

            <h2 className="text-3xl font-serif font-bold text-amber-100 mb-6 drop-shadow-md">
              {spell.nome}
            </h2>


            {/* origem + escola */}
            <div className="grid grid-cols-2 gap-4 mb-6">

              <div className="bg-slate-950/60 rounded-lg p-3 border border-indigo-500/20 shadow-inner">
                <span className="block text-[10px] uppercase tracking-widest text-indigo-400 mb-1">
                  Origem
                </span>
                <span className="font-serif text-slate-200">
                  {spell.origem}
                </span>
              </div>

              <div className="bg-slate-950/60 rounded-lg p-3 border border-indigo-500/20 shadow-inner">
                <span className="block text-[10px] uppercase tracking-widest text-indigo-400 mb-1">
                  Escola
                </span>
                <span className="font-serif text-slate-200">
                  {spell.escola}
                </span>
              </div>

            </div>


            {/* informações técnicas */}
            <div className="grid grid-cols-2 gap-4 mb-6">

              <Info label="Execução" value={spell.execucao} />
              <Info label="Alcance" value={spell.alcance} />
              <Info label="Duração" value={spell.duracao} />
              <Info label="Resistência" value={spell.resistencia} />

            </div>


            {/* alvo */}
            {spell.alvo && (
              <div className="mb-6 bg-slate-950/60 rounded-lg p-3 border border-indigo-500/20 shadow-inner">
                <span className="block text-[10px] uppercase tracking-widest text-indigo-400 mb-1">
                  Alvo / Área / Efeito
                </span>

                <span className="font-serif text-slate-200">
                  {spell.alvo}
                </span>
              </div>
            )}


            {/* tipos */}
            <div className="mb-6">

              <span className="block text-[10px] uppercase tracking-widest text-indigo-400 mb-2">
                Manifestações
              </span>

              <div className="flex flex-wrap gap-2">

                {spell.tipo.map((t, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-semibold rounded-md bg-indigo-950 border border-indigo-700 text-indigo-200"
                  >
                    {t}
                  </span>
                ))}

              </div>

            </div>


            <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent mb-6"></div>


            {/* descrição com scroll */}
            <div>

              <span className="block text-[10px] uppercase tracking-widest text-amber-500/70 mb-2">
                Descrição do Efeito
              </span>

              <div className="max-h-60 overflow-y-auto pr-2">

                <p className="text-slate-300 text-base leading-relaxed font-serif italic bg-slate-950/30 p-4 rounded-lg border-l-2 border-amber-500/50">
                  {spell.descricao}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}


/* pequeno componente reutilizável */
function Info({ label, value }) {

  if (!value) return null;

  return (
    <div className="bg-slate-950/60 rounded-lg p-3 border border-indigo-500/20 shadow-inner">
      <span className="block text-[10px] uppercase tracking-widest text-indigo-400 mb-1">
        {label}
      </span>

      <span className="font-serif text-slate-200">
        {value}
      </span>
    </div>
  );

}