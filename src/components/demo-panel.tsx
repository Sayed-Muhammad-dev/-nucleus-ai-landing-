"use client";

import { useEffect, useRef, useState } from "react";
import { CornerDownLeft, FileText, RotateCcw, Sparkles } from "lucide-react";
import { demoThreads } from "@/src/data/content";
import { cn } from "@/src/lib/utils";

const TYPE_INTERVAL_MS = 12;

/**
 * A mock product surface: pick a thread, watch the question land, then watch the
 * grounded answer type out with its citations. Nothing here calls a model — the
 * exchanges are scripted in `content.ts` — but the retrieval-then-cite shape is
 * the point being demonstrated.
 */
export function DemoPanel() {
  const [threadIndex, setThreadIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<"idle" | "thinking" | "typing" | "done">("idle");
  const timers = useRef<number[]>([]);

  const thread = demoThreads[threadIndex];
  const question = thread.messages[0];
  const answer = thread.messages[1];

  function clearTimers() {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
  }

  /** Replays the current thread from the top. */
  function run() {
    clearTimers();
    setTyped("");
    setPhase("thinking");

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setTyped(answer.text);
      setPhase("done");
      return;
    }

    timers.current.push(
      window.setTimeout(() => {
        setPhase("typing");
        let index = 0;
        const step = () => {
          index += 2;
          setTyped(answer.text.slice(0, index));
          if (index < answer.text.length) {
            timers.current.push(window.setTimeout(step, TYPE_INTERVAL_MS));
          } else {
            setPhase("done");
          }
        };
        step();
      }, 900)
    );
  }

  // Restart whenever the selected thread changes, and clean up on unmount.
  useEffect(() => {
    run();
    return clearTimers;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threadIndex]);

  return (
    <div className="ring-gradient overflow-hidden rounded-3xl bg-void-900/80 shadow-panel backdrop-blur-xl">
      {/* Window chrome */}
      <div className="flex items-center gap-3 border-b border-white/5 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-red-400/70" />
          <span className="size-2.5 rounded-full bg-amber-400/70" />
          <span className="size-2.5 rounded-full bg-emerald-400/70" />
        </div>
        <p className="ml-1 font-mono text-xs text-slate-400">nucleus / workspace</p>
        <button
          onClick={run}
          className="ml-auto inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs text-slate-400 transition hover:bg-white/5 hover:text-slate-200"
        >
          <RotateCcw size={12} /> Replay
        </button>
      </div>

      {/* Thread tabs */}
      <div className="flex gap-1 border-b border-white/5 px-3 py-2.5">
        {demoThreads.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setThreadIndex(index)}
            aria-pressed={index === threadIndex}
            className={cn(
              "rounded-lg px-3 py-1.5 text-xs font-medium transition",
              index === threadIndex
                ? "bg-violet-500/20 text-violet-200 shadow-glow"
                : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Conversation */}
      <div className="bg-grid min-h-[340px] space-y-4 p-4 sm:min-h-[380px] sm:p-5">
        <div className="flex justify-end">
          <p className="max-w-[85%] rounded-2xl rounded-br-md bg-white/8 px-4 py-2.5 text-sm text-slate-200">
            {question.text}
          </p>
        </div>

        <div className="flex gap-3">
          <span className="relative mt-0.5 grid size-8 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-electric-500 to-violet-600 text-white">
            <Sparkles size={15} />
            {phase === "thinking" ? (
              <span className="absolute inset-0 animate-pulseRing rounded-xl border border-violet-400" />
            ) : null}
          </span>

          <div className="min-w-0 flex-1">
            {phase === "thinking" ? (
              <div className="space-y-2 py-1">
                <p className="font-mono text-xs text-violet-300">
                  searching 41 sources…
                </p>
                <div className="h-2 w-2/3 animate-pulse rounded-full bg-white/10" />
                <div className="h-2 w-1/2 animate-pulse rounded-full bg-white/10" />
              </div>
            ) : (
              <>
                <p className="whitespace-pre-line text-sm leading-relaxed text-slate-200">
                  {typed}
                  {phase === "typing" ? (
                    <span className="ml-0.5 inline-block h-4 w-1.5 animate-blink bg-violet-300 align-text-bottom" />
                  ) : null}
                </p>

                {phase === "done" && answer.citations ? (
                  <div className="mt-4 animate-rise">
                    <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-slate-500">
                      Sources
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {answer.citations.map((citation) => (
                        <span
                          key={citation.label}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] text-slate-300 transition hover:border-violet-400/40 hover:bg-violet-500/10"
                        >
                          <FileText size={11} className="shrink-0 text-violet-300" />
                          {citation.label}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Composer */}
      <div className="flex items-center gap-2 border-t border-white/5 px-4 py-3">
        <div className="flex-1 rounded-xl border border-white/10 bg-void-800/60 px-3.5 py-2.5 text-sm text-slate-500">
          Ask about your data…
        </div>
        <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-electric-500 to-violet-600 text-white">
          <CornerDownLeft size={15} />
        </span>
      </div>
    </div>
  );
}
