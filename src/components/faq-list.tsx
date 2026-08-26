"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/src/data/content";
import { cn } from "@/src/lib/utils";

export function FaqList() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const open = openIndex === index;
        return (
          <div
            key={faq.question}
            className={cn(
              "ring-gradient overflow-hidden rounded-2xl bg-void-900/50 backdrop-blur transition duration-300",
              open && "bg-void-900/80"
            )}
          >
            <h3>
              <button
                onClick={() => setOpenIndex(open ? null : index)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-white/[0.03]"
              >
                <span className="font-medium text-white">{faq.question}</span>
                <span
                  className={cn(
                    "grid size-7 shrink-0 place-items-center rounded-lg border border-white/10 text-violet-300 transition duration-300",
                    open && "rotate-45 border-violet-400/50 bg-violet-500/15"
                  )}
                >
                  <Plus size={14} />
                </span>
              </button>
            </h3>

            {/* Grid-rows trick animates to auto height without measuring. */}
            <div
              className={cn(
                "grid transition-all duration-300 ease-out",
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-slate-400">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
