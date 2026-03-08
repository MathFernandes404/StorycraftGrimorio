import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function MagicSelect({
  label,
  value,
  setValue,
  options
}) {

  const [open, setOpen] = useState(false);

  return (
    <div className="relative">

      <label className="block text-xs uppercase tracking-widest text-amber-500/70 mb-1 ml-1 font-semibold">
        {label}
      </label>

      <button
        onClick={()=>setOpen(!open)}
        className="w-full flex items-center justify-between
        bg-slate-900/80 border border-slate-700/80
        rounded-lg py-2 px-3 text-sm text-slate-200
        hover:border-amber-500/70
        transition-all shadow-inner"
      >

        <span>{value || "Todos"}</span>

        <ChevronDown className={`w-4 h-4 transition ${open ? "rotate-180 text-amber-400" : "text-slate-500"}`} />

      </button>


      {open && (

        <div className="
        absolute z-[999] mt-2 w-full
        bg-slate-950/95 backdrop-blur-md
        border border-amber-500/30
        rounded-lg shadow-xl
        overflow-hidden
        animate-fadeIn
        ">

          <Option
            label="Todos"
            onClick={()=>{
              setValue("");
              setOpen(false);
            }}
          />

          {options?.map(opt=>(
            <Option
              key={opt}
              label={opt}
              onClick={()=>{
                setValue(opt);
                setOpen(false);
              }}
            />
          ))}

        </div>

      )}

    </div>
  );

}


function Option({ label, onClick }) {

  return (

    <div
      onClick={onClick}
      className="
      px-3 py-2 text-sm text-slate-200
      hover:bg-gradient-to-r hover:from-amber-500/10 hover:to-amber-400/20 hover:text-amber-300
      cursor-pointer transition
      "
    >
      {label}
    </div>

  );

}