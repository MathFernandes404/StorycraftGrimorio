import { X, Hexagon } from "lucide-react";

export default function SpellModal({ spell, onClose }) {

  if (!spell) return null;

  return (

    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/70 backdrop-blur-md">

      {/* overlay */}
      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      {/* container */}
      <div className="
        relative
        w-full
        w-full h-full sm:h-auto
max-w-none sm:max-w-xl lg:max-w-3xl xl:max-w-4xl
        max-h-[90vh]
        bg-gradient-to-br from-slate-900 to-slate-950
        rounded-2xl
        border border-amber-500/50
        shadow-[0_0_50px_rgba(245,158,11,0.15)]
        overflow-hidden
      ">

        {/* bordas decorativas */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"/>
        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent"/>

        {/* botão fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-amber-400 hover:bg-slate-800 rounded-full transition-colors z-10"
        >
          <X className="w-5 h-5"/>
        </button>

        {/* conteúdo scrollável */}
        <div className="relative p-4 sm:p-6 lg:p-8">

          {/* marca d'água */}
          <Hexagon className="absolute right-[-20px] top-[-20px] w-48 h-48 text-indigo-900/20 rotate-12 pointer-events-none"/>

          <div className="relative z-10">

            {/* header */}
            <div className="flex items-center gap-2 mb-2 text-amber-500">
              <Hexagon className="w-4 h-4 fill-amber-500/20"/>
              <span className="text-xs font-bold uppercase tracking-widest">
                Feitiço de {spell.grau}º Grau
              </span>
            </div>

            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-serif font-bold text-amber-100 mb-8 drop-shadow-md">
              {spell.nome}
            </h2>

            {/* origem + escola */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">

              <Info label="Origem" value={spell.origem}/>
              <Info label="Escola" value={spell.escola}/>

            </div>

            {/* informações técnicas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">

              <Info label="Execução" value={spell.execucao}/>
              <Info label="Alcance" value={spell.alcance}/>
              <Info label="Duração" value={spell.duracao}/>
              <Info label="Resistência" value={spell.resistencia}/>

            </div>

            {/* alvo */}
            {spell.alvo && (
              <div className="mb-8 bg-slate-950/60 rounded-lg p-3 border border-indigo-500/20 shadow-inner">

                <span className="block text-[10px] uppercase tracking-widest text-indigo-400 mb-1">
                  Alvo / Área / Efeito
                </span>

                <span className="font-serif text-slate-200">
                  {spell.alvo}
                </span>

              </div>
            )}

            {/* tipos */}
            {spell.tipo && (
              <div className="mb-8">

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
            )}

            {/* divisor */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent mb-8"/>

            {/* descrição */}
            <div>

              <span className="block text-[10px] uppercase tracking-widest text-amber-500/70 mb-3">
                Descrição do Efeito
              </span>

              <div className="
                max-h-[50vh] sm:max-h-[40vh]
                overflow-y-auto
                pr-2
                scrollbar-thin
                scrollbar-thumb-amber-500/40
                scrollbar-track-transparent
              ">

                <p className="
                  text-slate-300
                  text-[15px] sm:text-base
                  leading-relaxed
                  font-serif
                  italic
                  bg-slate-950/30
                  p-4
                  rounded-lg
                  border-l-2
                  border-amber-500/50
                ">
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


/* componente reutilizável */
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