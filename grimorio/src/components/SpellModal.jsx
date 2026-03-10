import { X, Hexagon } from "lucide-react";

export default function SpellModal({ spell, onClose }) {
  if (!spell) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#05050A]/80 backdrop-blur-sm">
      
      {/* Overlay clicável para fechar */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Container Principal */}
      <div className="
        relative w-full max-w-4xl max-h-[90vh] flex flex-col
        bg-[#0B0C10] rounded-xl border border-amber-500/20
        shadow-[0_0_40px_rgba(245,158,11,0.08)] overflow-hidden
      ">
        
        {/* Bordas decorativas superior e inferior */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent z-20"/>
        <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-600/50 to-transparent z-20"/>

        {/* Botão Fechar (Fixo) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-500 hover:text-amber-400 bg-slate-900/50 hover:bg-slate-800 rounded-lg transition-all z-20"
        >
          <X className="w-5 h-5"/>
        </button>

        {/* Marca d'água (Fixa no fundo) */}
        <Hexagon className="absolute right-[-40px] top-[-40px] w-64 h-64 text-indigo-500/5 rotate-12 pointer-events-none z-0" strokeWidth={1}/>

        {/* Área de Conteúdo com Scroll */}
        <div className="relative z-10 overflow-y-auto p-5 sm:p-8 scrollbar-custom">
          
          {/* Header */}
          <div className="flex items-center gap-2 mb-2 text-amber-500">
            <Hexagon className="w-4 h-4 fill-amber-500/20" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">
              Feitiço de {spell.grau}º Grau
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-50 mb-8 drop-shadow-sm">
            {spell.nome}
          </h2>

          {/* Origem + Escola (2 Colunas) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
            <Info label="Origem" value={spell.origem} />
            <Info label="Escola" value={spell.escola} />
          </div>

          {/* Informações Técnicas (4 Colunas no Desktop, 2 no Mobile) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4">
            <Info label="Execução" value={spell.execucao} />
            <Info label="Alcance" value={spell.alcance} />
            <Info label="Duração" value={spell.duracao} />
            <Info label="Resistência" value={spell.resistencia} />
          </div>

          {/* Alvo / Área / Efeito (Ocupa 100% da largura) */}
          {spell.alvo && (
            <div className="mb-4">
              <Info label="Alvo / Área / Efeito" value={spell.alvo} fullWidth />
            </div>
          )}

          {/* Manifestações (Tags) */}
          {spell.tipo && spell.tipo.length > 0 && (
            <div className="mb-8 mt-6">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-indigo-300/70 mb-3">
                Manifestações
              </span>
              <div className="flex flex-wrap gap-2">
                {spell.tipo.map((t, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 text-xs font-medium rounded-md bg-[#131422] border border-indigo-500/30 text-indigo-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Divisor */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent mb-8 mt-2"/>

          {/* Descrição do Efeito */}
          <div>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-amber-500/70 mb-4">
              Descrição do Efeito
            </span>
            <div className="
              text-slate-300 text-[15px] sm:text-base leading-relaxed font-serif italic
              border-l-2 border-amber-500/30 pl-4 py-1
            ">
              <p>{spell.descricao}</p>
            </div>
          </div>

        </div>
      </div>

      {/* Estilo CSS injetado para a barra de rolagem (Scrollbar customizado) */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-custom::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-custom::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background-color: rgba(245, 158, 11, 0.2);
          border-radius: 10px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background-color: rgba(245, 158, 11, 0.4);
        }
      `}} />
    </div>
  );
}

/* Componente de Informação Reutilizável com ajuste visual */
function Info({ label, value, fullWidth }) {
  if (!value) return null;

  return (
    <div className={`bg-[#111218] rounded-lg p-3 sm:p-4 border border-[#1E202D] shadow-inner ${fullWidth ? 'w-full' : ''}`}>
      <span className="block text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.15em] text-indigo-400/80 mb-1.5">
        {label}
      </span>
      <span className="block font-serif text-slate-200 text-sm sm:text-base">
        {value}
      </span>
    </div>
  );
}