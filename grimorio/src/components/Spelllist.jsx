import { useState, useMemo } from "react";
import { BookOpen, ChevronDown, ChevronRight, Sparkles } from "lucide-react";

export default function SpellList({ spells, onSelect }) {

  const [grausExpandidos, setGrausExpandidos] = useState([1,2,3,4,5]);

  // Agrupar magias por grau
  const magiasAgrupadas = useMemo(() => {

    const grupos = {
      1: [],
      2: [],
      3: [],
      4: [],
      5: []
    };

    spells.forEach(magia => {
      if (grupos[magia.grau]) {
        grupos[magia.grau].push(magia);
      }
    });

    return grupos;

  }, [spells]);



  const toggleGrau = (grau) => {

    setGrausExpandidos(prev =>
      prev.includes(grau)
        ? prev.filter(g => g !== grau)
        : [...prev, grau]
    );

  };


  const totalEncontradas = Object
    .values(magiasAgrupadas)
    .reduce((acc, curr) => acc + curr.length, 0);



  return (

    <>

      {/* contador */}
      <div className="mb-6 text-indigo-300/60 font-serif italic text-center">
        Os sussurros revelaram
        <strong className="text-amber-400 text-lg mx-1">
          {totalEncontradas}
        </strong>
        feitiço(s) em suas páginas.
      </div>



      {totalEncontradas > 0 ? (

        <div className="space-y-6">

          {[1,2,3,4,5].map(grau => {

            const magiasDoGrau = magiasAgrupadas[grau];

            if (!magiasDoGrau || magiasDoGrau.length === 0)
              return null;

            const isOpen = grausExpandidos.includes(grau);

            return (

              <div
                key={grau}
                className="bg-slate-900/40 border border-indigo-500/20 rounded-xl overflow-hidden backdrop-blur-sm shadow-lg transition-all duration-300 hover:border-indigo-500/40"
              >

                {/* header do grau */}
                <button
                  onClick={() => toggleGrau(grau)}
                  className="w-full flex items-center justify-between p-5 bg-gradient-to-r from-indigo-950/80 to-slate-900/50 hover:from-indigo-900/80 transition-all"
                >

                  <div className="flex items-center gap-4">

                    <div className="p-2 bg-indigo-950 rounded-lg border border-indigo-500/30">
                      <BookOpen className="w-6 h-6 text-amber-400" />
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 drop-shadow-md">
                      {grau}º Grau
                    </h3>

                    <span className="bg-indigo-900/50 text-indigo-300 text-xs py-1 px-3 rounded-full border border-indigo-700">
                      {magiasDoGrau.length} magias
                    </span>

                  </div>

                  <div className="p-1 rounded-full bg-slate-800/50 text-amber-500">
                    {isOpen
                      ? <ChevronDown className="w-5 h-5"/>
                      : <ChevronRight className="w-5 h-5"/>
                    }
                  </div>

                </button>


                {/* lista */}
                {isOpen && (

                  <div className="p-3 bg-slate-950/50 border-t border-indigo-900/50 divide-y divide-indigo-900/30">

                    {magiasDoGrau.map(magia => (

                      <button
                        key={magia.id}
                        onClick={() => onSelect(magia)}
                        className="w-full text-left flex items-center justify-between p-4 group hover:bg-indigo-900/30 transition-colors"
                      >

                        <div className="flex items-center gap-3">

                          <Sparkles className="w-4 h-4 text-indigo-500/50 group-hover:text-amber-400 transition-colors" />

                          <span className="font-serif text-lg text-slate-300 group-hover:text-amber-200 transition-colors tracking-wide">
                            {magia.nome}
                          </span>

                        </div>

                        <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-amber-500 transition-transform group-hover:translate-x-1" />

                      </button>

                    ))}

                  </div>

                )}

              </div>

            );

          })}

        </div>

      ) : (

        <div className="text-center py-20 bg-slate-900/30 rounded-2xl border border-indigo-500/20 border-dashed backdrop-blur-sm">

          <h3 className="text-2xl font-serif text-amber-500/70">
            As páginas estão em branco
          </h3>

          <p className="text-indigo-300/60 mt-2 font-serif">
            Nenhum encantamento respondeu à sua busca.
          </p>

        </div>

      )}

    </>

  );

}