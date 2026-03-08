import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import MagicSelect from "./MagicSelect";


export default function Filters({

  busca,
  setBusca,

  filtroGrau,
  setFiltroGrau,

  filtroOrigem,
  setFiltroOrigem,

  filtroTipo,
  setFiltroTipo,

  filtroEscola,
  setFiltroEscola,

  filtroExecucao,
  setFiltroExecucao,

  filtroAlcance,
  setFiltroAlcance,

  filtroDuracao,
  setFiltroDuracao,

  filtroAlvo,
  setFiltroAlvo,

  filtroResistencia,
  setFiltroResistencia,

  opcoes

}) {

  const [avancado, setAvancado] = useState(false);

return (

  <section
    className="
    relative z-40
    bg-slate-950/80 backdrop-blur-md
    border border-amber-500/30
    rounded-xl
    p-6
    mb-12
    shadow-[0_0_30px_rgba(0,0,0,0.5)]
    overflow-visible
    "
  >

    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>

    <div className="flex items-center gap-2 mb-6 text-amber-400">
      <Filter className="w-5 h-5" />

      <h2 className="text-xl font-serif font-semibold tracking-wider uppercase">
        Filtros de Essência
      </h2>
    </div>


    {/* FILTROS PRINCIPAIS */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

      {/* BUSCA */}
      <div className="lg:col-span-2 relative">

        <label className="block text-xs uppercase tracking-widest text-amber-500/70 mb-1 ml-1 font-semibold">
          Invocação
        </label>

        <div className="relative">

          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-500/50" />

          <input
            type="text"
            placeholder="Nome da magia..."
            value={busca}
            onChange={(e)=>setBusca(e.target.value)}
            className="
            w-full
            bg-slate-900/80
            border border-slate-700/80
            rounded-lg
            py-2 pl-9 pr-3
            text-sm text-slate-200
            placeholder-slate-600
            focus:outline-none
            focus:border-amber-500/80
            focus:ring-1
            focus:ring-amber-500/80
            transition-all
            shadow-inner
            "
          />

        </div>

      </div>


      <MagicSelect
        label="Grau"
        value={filtroGrau}
        setValue={setFiltroGrau}
        options={opcoes.graus}
      />

      <MagicSelect
        label="Origem"
        value={filtroOrigem}
        setValue={setFiltroOrigem}
        options={opcoes.origens}
      />

      <MagicSelect
        label="Tipo"
        value={filtroTipo}
        setValue={setFiltroTipo}
        options={opcoes.tipos}
      />

      <MagicSelect
        label="Escola"
        value={filtroEscola}
        setValue={setFiltroEscola}
        options={opcoes.escolas}
      />

    </div>



    {/* BOTÃO FILTROS AVANÇADOS */}
    <div className="mt-4">

      <button
        onClick={()=>setAvancado(!avancado)}
        className="flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 transition"
      >

        <SlidersHorizontal className="w-4 h-4" />

        {avancado
          ? "Ocultar filtros avançados"
          : "Mais filtros"
        }

      </button>

    </div>



    {/* FILTROS AVANÇADOS */}
    {avancado && (

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">

        <MagicSelect
          label="Execução"
          value={filtroExecucao}
          setValue={setFiltroExecucao}
          options={opcoes.execucoes}
        />

        <MagicSelect
          label="Alcance"
          value={filtroAlcance}
          setValue={setFiltroAlcance}
          options={opcoes.alcances}
        />

        <MagicSelect
          label="Duração"
          value={filtroDuracao}
          setValue={setFiltroDuracao}
          options={opcoes.duracoes}
        />

        <MagicSelect
          label="Resistência"
          value={filtroResistencia}
          setValue={setFiltroResistencia}
          options={opcoes.resistencias}
        />

        <div className="lg:col-span-2">

          <MagicSelect
            label="Alvo / Área / Efeito"
            value={filtroAlvo}
            setValue={setFiltroAlvo}
            options={opcoes.alvos}
          />

        </div>

      </div>

    )}



    {/* CHIPS DE FILTROS ATIVOS */}
    {(

      filtroGrau ||
      filtroOrigem ||
      filtroTipo ||
      filtroEscola ||
      filtroExecucao ||
      filtroAlcance ||
      filtroDuracao ||
      filtroAlvo ||
      filtroResistencia

    ) && (

      <div className="mt-6 flex flex-wrap gap-2">

        <FilterChip label={`${filtroGrau}º Grau`} value={filtroGrau} clear={()=>setFiltroGrau("")} />

        <FilterChip label={filtroOrigem} value={filtroOrigem} clear={()=>setFiltroOrigem("")} />

        <FilterChip label={filtroTipo} value={filtroTipo} clear={()=>setFiltroTipo("")} />

        <FilterChip label={filtroEscola} value={filtroEscola} clear={()=>setFiltroEscola("")} />

        <FilterChip label={filtroExecucao} value={filtroExecucao} clear={()=>setFiltroExecucao("")} />

        <FilterChip label={filtroAlcance} value={filtroAlcance} clear={()=>setFiltroAlcance("")} />

        <FilterChip label={filtroDuracao} value={filtroDuracao} clear={()=>setFiltroDuracao("")} />

        <FilterChip label={filtroAlvo} value={filtroAlvo} clear={()=>setFiltroAlvo("")} />

        <FilterChip label={filtroResistencia} value={filtroResistencia} clear={()=>setFiltroResistencia("")} />

      </div>

    )}

  </section>

);
}

// Adicione isso no final do seu arquivo Filters.jsx, fora da função principal Filters()

function FilterChip({ label, value, clear }) {
  // Se não tiver valor ativo, não renderiza nada
  if (!value) return null;

  return (
    <span 
      className="
        flex items-center gap-2 px-3 py-1 
        bg-amber-900/30 border border-amber-500/40 
        rounded-full text-xs font-semibold text-amber-300 
        uppercase tracking-wider backdrop-blur-sm shadow-sm 
        transition-all hover:bg-amber-900/50 hover:border-amber-400
      "
    >
      {label}
      <button
        onClick={clear}
        className="ml-1 text-amber-500 hover:text-amber-200 transition-colors focus:outline-none text-base leading-none"
        aria-label={`Remover filtro de ${label}`}
      >
        &times;
      </button>
    </span>
  );
}