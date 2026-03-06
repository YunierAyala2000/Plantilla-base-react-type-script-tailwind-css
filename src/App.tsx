import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Minus, RotateCcw } from "lucide-react";

function App() {
  const [count, setCount] = useState(0);

  const isPositive = count > 0;
  const isNegative = count < 0;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900">
      {/* Glow ambiental */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-3xl" />
      </div>

      <div className="relative w-full max-w-sm mx-4">
        {/* Card principal */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden">
          {/* Franja superior degradada */}
          <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500" />

          {/* Header */}
          <div className="px-8 pt-8 pb-4 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-white">Contador</h1>
          </div>

          {/* Número */}
          <div className="flex flex-col items-center gap-2 px-8 py-6">
            <div className="relative flex items-center justify-center w-44 h-44 rounded-full border border-white/10 bg-white/5 shadow-inner">
              {/* Anillo animado */}
              <div
                className={`absolute inset-0 rounded-full transition-all duration-500 ${
                  isPositive
                    ? "ring-2 ring-emerald-400/40 shadow-[0_0_30px_4px_rgba(52,211,153,0.15)]"
                    : isNegative
                      ? "ring-2 ring-rose-400/40 shadow-[0_0_30px_4px_rgba(251,113,133,0.15)]"
                      : "ring-2 ring-purple-400/30 shadow-[0_0_30px_4px_rgba(167,139,250,0.1)]"
                }`}
              />
              <span
                aria-live="polite"
                aria-label="Cuenta actual"
                className={`text-7xl font-black tabular-nums transition-colors duration-300 ${
                  isPositive ? "text-emerald-400" : isNegative ? "text-rose-400" : "text-white"
                }`}
              >
                {count}
              </span>
            </div>

            {/* Etiqueta de estado */}
            <span
              className={`text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${
                isPositive ? "text-emerald-400/70" : isNegative ? "text-rose-400/70" : "text-white/30"
              }`}
            >
              {isPositive ? "Positivo" : isNegative ? "Negativo" : "Neutro"}
            </span>
          </div>

          {/* Botones +/- */}
          <div className="flex items-center justify-center gap-5 px-8 pb-6">
            <button
              onClick={() => setCount((c) => c - 1)}
              aria-label="Disminuir"
              className="flex items-center justify-center w-14 h-14 rounded-xl border border-white/10 bg-white/5 text-white/70 hover:bg-rose-500/20 hover:border-rose-400/40 hover:text-rose-300 active:scale-95 transition-all duration-150 shadow-md"
            >
              <Minus className="w-5 h-5" />
            </button>

            <button
              onClick={() => setCount(0)}
              aria-label="Resetear"
              className="flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/70 active:scale-95 transition-all duration-150"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={() => setCount((c) => c + 1)}
              aria-label="Aumentar"
              className="flex items-center justify-center w-14 h-14 rounded-xl border border-white/10 bg-white/5 text-white/70 hover:bg-emerald-500/20 hover:border-emerald-400/40 hover:text-emerald-300 active:scale-95 transition-all duration-150 shadow-md"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>

          {/* Botón resetear grande */}
          <div className="px-8 pb-8">
            <Button
              variant="default"
              className="w-full h-11 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 border-0 text-white font-semibold shadow-lg shadow-purple-900/40 transition-all duration-200"
              onClick={() => setCount(0)}
            >
              Resetear
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
