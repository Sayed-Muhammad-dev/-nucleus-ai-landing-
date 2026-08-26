"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Github, Hexagon, Menu, Twitter, X } from "lucide-react";
import { brand, footerColumns } from "@/src/data/content";
import { cn } from "@/src/lib/utils";

const navLinks = [
  { href: "#platform", label: "Platform" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#demo", label: "Demo" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" }
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition duration-300",
        scrolled ? "border-b border-white/8 bg-void-950/80 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex shrink-0 items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-electric-500 to-violet-600 text-white shadow-glow">
            <Hexagon size={17} />
          </span>
          <span className="text-lg font-semibold tracking-tight text-white">{brand.name}</span>
        </a>

        <nav className="ml-6 hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <a
            href="#pricing"
            className="hidden rounded-xl px-4 py-2 text-sm font-medium text-slate-300 transition hover:text-white sm:block"
          >
            Sign in
          </a>
          <a
            href="#demo"
            className="group hidden items-center gap-1.5 rounded-xl bg-gradient-to-r from-electric-500 to-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-glow transition duration-300 hover:shadow-glow-lg sm:inline-flex"
          >
            Book a demo
            <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
          </a>

          <button
            className="grid size-10 place-items-center rounded-xl text-slate-300 transition hover:bg-white/5 lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav className="animate-rise border-t border-white/8 bg-void-950/95 px-4 py-3 backdrop-blur-xl lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#demo"
            onClick={() => setMenuOpen(false)}
            className="mt-2 block rounded-xl bg-gradient-to-r from-electric-500 to-violet-600 px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Book a demo
          </a>
        </nav>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-white/8">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr,repeat(3,minmax(0,1fr))]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-electric-500 to-violet-600 text-white">
                <Hexagon size={17} />
              </span>
              <span className="text-lg font-semibold text-white">{brand.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">{brand.mission}</p>

            <div className="mt-6 flex gap-2">
              {[Github, Twitter].map((Icon, index) => (
                <span
                  key={index}
                  className="grid size-9 cursor-pointer place-items-center rounded-xl border border-white/10 text-slate-400 transition hover:border-violet-400/40 hover:text-violet-300"
                >
                  <Icon size={16} />
                </span>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
                {column.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <span className="cursor-pointer text-sm text-slate-400 transition hover:text-white">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/8 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Nucleus Labs. A portfolio project — not a real company.</p>
          <p>SOC 2 Type II · GDPR · Zero data retention</p>
        </div>
      </div>
    </footer>
  );
}
