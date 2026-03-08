import { useState, useEffect, useMemo } from "react";

import Filters from "./components/Filters";
import SpellList from "./components/SpellList";
import SpellModal from "./components/SpellModal";


// API da planilha
const SHEET_URL =
"https://opensheet.elk.sh/1wUbc1tUzFjLgWPI9m3x8Rav9BS2bKS_2_ZH_80K0Ntw/Grimorio";


// cache
const CACHE_KEY = "spells_cache";
const CACHE_TIME = "spells_cache_time";
const CACHE_DURATION = 1 * 60 * 60 * 1000; // 1 hora


export default function App() {

  const [spells, setSpells] = useState([]);

  const [busca, setBusca] = useState("");
  const [filtroGrau, setFiltroGrau] = useState("");
  const [filtroOrigem, setFiltroOrigem] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("");
  const [filtroEscola, setFiltroEscola] = useState("");
  const [filtroExecucao, setFiltroExecucao] = useState("");
const [filtroAlcance, setFiltroAlcance] = useState("");
const [filtroDuracao, setFiltroDuracao] = useState("");
const [filtroAlvo, setFiltroAlvo] = useState("");
const [filtroResistencia, setFiltroResistencia] = useState("");

  const [magiaSelecionada, setMagiaSelecionada] = useState(null);



  // carregar planilha
  useEffect(() => {

    const cache = localStorage.getItem(CACHE_KEY);
    const cacheTime = localStorage.getItem(CACHE_TIME);
    const now = Date.now();

    // usar cache se válido
if (cache && cacheTime && now - cacheTime < CACHE_DURATION) {
  console.log("Spells carregadas do cache");
  setSpells(JSON.parse(cache));
}

// SEM return — continua buscando atualização

   // buscar planilha
    fetch(SHEET_URL)
      .then(res => res.json())
      .then(data => {

        // Função mágica para limpar espaços extras e padronizar maiúsculas/minúsculas
        const padronizarTexto = (texto) => {
          if (!texto) return "";
          const limpo = texto.trim();
          // Deixa a primeira letra maiúscula e o resto minúsculo
          // Resolve o problema de "Parcial" vs "parcial"
          return limpo.charAt(0).toUpperCase() + limpo.slice(1).toLowerCase();
        };

        const parsed = data.map((s, index) => ({
          id: index + 1,
          nome: s["Feitiço"]?.trim() ?? "",
          grau: parseInt(s["Grau"]) || 0,
          origem: padronizarTexto(s["Origem"]),
          
          tipo: s["Tipo"]
            ? s["Tipo"].split(",").map(t => padronizarTexto(t))
            : [],
            
          escola: padronizarTexto(s["Escola"]),
          execucao: padronizarTexto(s["Execução:"]),
          alcance: padronizarTexto(s["Alcance:"]),
          duracao: padronizarTexto(s["Duração"]),
          alvo: padronizarTexto(s["Alvo / Área / Efeito:"]),
          resistencia: padronizarTexto(s["Resistência:"]), // A limpeza acontece aqui!
          descricao: s["Descrição"]?.trim() ?? ""
        }));

        setSpells(parsed);


        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify(parsed)
        );

        localStorage.setItem(
          CACHE_TIME,
          now.toString()
        );

      })
      .catch(err => {
        console.error("Erro ao carregar planilha:", err);
      });

  }, []);



  // aplicar filtros
const magiasFiltradas = useMemo(() => {

  return spells.filter(magia => {

    const matchNome =
      magia.nome
        ?.toLowerCase()
        .includes(busca.toLowerCase());

    const matchGrau =
      filtroGrau
        ? magia.grau === Number(filtroGrau)
        : true;

    const matchOrigem =
      filtroOrigem
        ? magia.origem === filtroOrigem
        : true;

    const matchTipo =
      filtroTipo
        ? magia.tipo?.includes(filtroTipo)
        : true;

    const matchEscola =
      filtroEscola
        ? magia.escola === filtroEscola
        : true;

    const matchExecucao =
      filtroExecucao
        ? magia.execucao === filtroExecucao
        : true;

    const matchAlcance =
      filtroAlcance
        ? magia.alcance === filtroAlcance
        : true;

    const matchDuracao =
      filtroDuracao
        ? magia.duracao === filtroDuracao
        : true;

    const matchAlvo =
      filtroAlvo
        ? magia.alvo === filtroAlvo
        : true;

    const matchResistencia =
      filtroResistencia
        ? magia.resistencia === filtroResistencia
        : true;

    return (
      matchNome &&
      matchGrau &&
      matchOrigem &&
      matchTipo &&
      matchEscola &&
      matchExecucao &&
      matchAlcance &&
      matchDuracao &&
      matchAlvo &&
      matchResistencia
    );

  });

}, [
  spells,
  busca,
  filtroGrau,
  filtroOrigem,
  filtroTipo,
  filtroEscola,
  filtroExecucao,
  filtroAlcance,
  filtroDuracao,
  filtroAlvo,
  filtroResistencia
]);


const opcoesFiltros = useMemo(() => ({

  graus: [...new Set(spells.map(s => s.grau))].sort(),

  origens: [...new Set(spells.map(s => s.origem).filter(Boolean))].sort(),

  tipos: [...new Set(spells.flatMap(s => s.tipo || []))].sort(),

  escolas: [...new Set(spells.map(s => s.escola).filter(Boolean))].sort(),

  execucoes: [...new Set(spells.map(s => s.execucao).filter(Boolean))].sort(),

  alcances: [...new Set(spells.map(s => s.alcance).filter(Boolean))].sort(),

  duracoes: [...new Set(spells.map(s => s.duracao).filter(Boolean))].sort(),

  resistencias: [...new Set(spells.map(s => s.resistencia).filter(Boolean))].sort(),

  alvos: [...new Set(spells.map(s => s.alvo).filter(Boolean))].sort(),

}), [spells]);


  return (

    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-indigo-950/80 to-slate-950 text-slate-200 font-sans selection:bg-amber-500/30">


      {/* fundo mágico */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-40">

        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-900/30 blur-[150px] rounded-full mix-blend-screen"></div>

        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-amber-900/20 blur-[150px] rounded-full mix-blend-screen"></div>

        <div className="absolute top-[40%] left-[20%] w-[30%] h-[30%] bg-blue-900/20 blur-[120px] rounded-full mix-blend-screen"></div>

      </div>



      <div className="relative z-10 max-w-5xl mx-auto px-4 py-10 sm:px-6 lg:px-8">


        {/* HEADER */}
        <header className="text-center mb-12">

          <h1 className="text-4xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-amber-300 to-amber-600 drop-shadow-lg font-bold tracking-widest uppercase">

            Grimório

          </h1>

          <p className="text-indigo-300/80 text-lg max-w-2xl mx-auto font-serif italic tracking-wide mt-4">

            "Há muitos caminhos para o poder: alguns o chamam de magia, outros de milagre, outros de maldição — mas todos conduzem ao mesmo destino, onde o conhecimento transforma vontade em realidade."

          </p>

        </header>



        {/* FILTROS */}
<Filters
  busca={busca}
  setBusca={setBusca}

  filtroGrau={filtroGrau}
  setFiltroGrau={setFiltroGrau}

  filtroOrigem={filtroOrigem}
  setFiltroOrigem={setFiltroOrigem}

  filtroTipo={filtroTipo}
  setFiltroTipo={setFiltroTipo}

  filtroEscola={filtroEscola}
  setFiltroEscola={setFiltroEscola}

  filtroExecucao={filtroExecucao}
  setFiltroExecucao={setFiltroExecucao}

  filtroAlcance={filtroAlcance}
  setFiltroAlcance={setFiltroAlcance}

  filtroDuracao={filtroDuracao}
  setFiltroDuracao={setFiltroDuracao}

  filtroAlvo={filtroAlvo}
  setFiltroAlvo={setFiltroAlvo}

  filtroResistencia={filtroResistencia}
  setFiltroResistencia={setFiltroResistencia}

  opcoes={opcoesFiltros}
/>


        {/* LISTA */}
        <SpellList
          spells={magiasFiltradas}
          onSelect={setMagiaSelecionada}
        />


        {/* MODAL */}
        {magiaSelecionada && (

          <SpellModal
            spell={magiaSelecionada}
            onClose={() => setMagiaSelecionada(null)}
          />

        )}

      </div>

    </div>

  );

}