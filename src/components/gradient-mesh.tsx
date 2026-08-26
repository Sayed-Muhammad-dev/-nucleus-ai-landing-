/**
 * Animated gradient mesh backdrop.
 *
 * Three blurred radial blooms drift on independent timings, over a faint grid.
 * Rendered as a fixed, pointer-events-free layer so it never intercepts clicks,
 * and `aria-hidden` because it carries no meaning. The drift animation is
 * neutralised by the reduced-motion rule in globals.css.
 */
export function GradientMesh() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-void-950" />
      <div className="bg-grid absolute inset-0 opacity-60" />

      <div className="absolute -left-[10%] -top-[20%] size-[60vw] animate-drift rounded-full bg-violet-600/25 blur-[110px]" />
      <div className="absolute -right-[12%] top-[4%] size-[52vw] animate-drift-slow rounded-full bg-electric-500/22 blur-[120px]" />
      <div className="absolute bottom-[-18%] left-[28%] size-[46vw] animate-drift rounded-full bg-violet-500/18 blur-[130px] [animation-delay:-8s]" />

      {/* Fades the mesh out toward the page bottom so long sections stay readable. */}
      <div className="absolute inset-x-0 bottom-0 h-[45vh] bg-gradient-to-b from-transparent to-void-950" />
    </div>
  );
}

/** Small decorative bloom for use inside a single section. */
export function SectionGlow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-[90px] ${className ?? ""}`}
    />
  );
}
