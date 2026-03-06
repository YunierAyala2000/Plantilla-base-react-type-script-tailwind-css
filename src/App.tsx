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
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-3xl" />
      </div>

      <div className="relative mx-4 w-full max-w-sm">
        {/* Card principal */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl shadow-black/50 backdrop-blur-xl">
          {/* Franja superior degradada */}
          <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500" />

          {/* Header */}
          <div className="px-8 pt-8 pb-4 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-white">Contador</h1>
          </div>

          {/* Número */}
          <div className="flex flex-col items-center gap-2 px-8 py-6">
            <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-inner">
              {/* Anillo animado */}
              <div
                className={`absolute inset-0 rounded-full transition-all duration-500 ${
                  isPositive
                    ? "shadow-[0_0_30px_4px_rgba(52,211,153,0.15)] ring-2 ring-emerald-400/40"
                    : isNegative
                      ? "shadow-[0_0_30px_4px_rgba(251,113,133,0.15)] ring-2 ring-rose-400/40"
                      : "shadow-[0_0_30px_4px_rgba(167,139,250,0.1)] ring-2 ring-purple-400/30"
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
              className={`text-xs font-semibold tracking-widest uppercase transition-colors duration-300 ${
                isPositive ? "text-emerald-400/70" : isNegative ? "text-rose-400/70" : "text-white/30"
              }`}
            >
              {isPositive ? "Positivo" : isNegative ? "Negativo" : "Neutro"}
            </span>
          </div>

          {/* Botones +/- */}
          <div className="flex items-center justify-center gap-5 px-8 pb-6">
            <Button
              onClick={() => setCount((c) => c - 1)}
              aria-label="Disminuir"
              className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 shadow-md transition-all duration-150 hover:border-rose-400/40 hover:bg-rose-500/20 hover:text-rose-300 active:scale-95"
            >
              <Minus className="h-5 w-5" />
            </Button>

            <Button
              onClick={() => setCount(0)}
              aria-label="Resetear"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/40 transition-all duration-150 hover:bg-white/10 hover:text-white/70 active:scale-95"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>

            <Button
              onClick={() => setCount((c) => c + 1)}
              aria-label="Aumentar"
              className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 shadow-md transition-all duration-150 hover:border-emerald-400/40 hover:bg-emerald-500/20 hover:text-emerald-300 active:scale-95"
            >
              <Plus className="h-5 w-5" />
            </Button>
          </div>

          {/* Botón resetear grande */}
          <div className="px-8 pb-8">
            <Button
              variant="default"
              className="h-11 w-full rounded-xl border-0 bg-gradient-to-r from-purple-600 to-indigo-600 font-semibold text-white shadow-lg shadow-purple-900/40 transition-all duration-200 hover:from-purple-500 hover:to-indigo-500"
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
