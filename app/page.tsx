import type { Faq } from "@/src/data/content";
import { ContactRequest } from "@/src/components/contact-request";
import { published } from "../server/public-data.mjs";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { DemoPanel } from "@/src/components/demo-panel";
import { Reveal } from "@/src/components/reveal";
import { FaqList } from "@/src/components/faq-list";
import {
  brand as initialBrand,
  features,
  logos,
  plans as initialPlans,
  stats,
  steps,
} from "@/src/data/content";
import { cn } from "@/src/lib/utils";

export const dynamic = "force-dynamic";
export default async function HomePage() {
  const brand =
    (await published<typeof initialBrand>("brand"))[0] || initialBrand;
  const plans = await published<(typeof initialPlans)[number]>("plans");
  const faqs = await published<Faq>("faqs");
  return (
    <>
      {/* ------------------------------------------------------------ Hero */}
      <section
        id="top"
        className="relative px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pt-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr,minmax(0,1fr)] lg:gap-14">
            <div>
              <Reveal>
                <span className="ring-gradient inline-flex items-center gap-2 rounded-full bg-white/5 px-3.5 py-1.5 text-xs font-medium text-violet-200 backdrop-blur">
                  <Sparkles size={12} />
                  Private documents. Checkable source passages.
                </span>
              </Reveal>

              <Reveal delayMs={80}>
                <h1 className="mt-6 text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {brand.tagline.split(" ").slice(0, 3).join(" ")}{" "}
                  <span className="text-gradient animate-shimmer">
                    {brand.tagline.split(" ").slice(3).join(" ")}
                  </span>
                </h1>
              </Reveal>

              <Reveal delayMs={160}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                  {brand.subline}
                </p>
              </Reveal>

              <Reveal delayMs={240}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href="/workspace"
                    className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-electric-500 to-violet-600 px-6 py-3.5 font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-0.5 hover:shadow-glow-lg"
                  >
                    See it work
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </a>
                  <a
                    href="#how-it-works"
                    className="ring-gradient inline-flex items-center gap-2 rounded-xl bg-white/5 px-6 py-3.5 font-semibold text-slate-200 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    How it works
                  </a>
                </div>
              </Reveal>

              <Reveal delayMs={320}>
                <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-white/8 pt-8 sm:grid-cols-4">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <dt className="text-2xl font-semibold text-white sm:text-3xl">
                        {stat.value}
                      </dt>
                      <dd className="mt-1 text-xs text-slate-400">
                        {stat.label}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            <Reveal delayMs={200}>
              <DemoPanel />
            </Reveal>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- Logos */}
      <section className="border-y border-white/8 py-8">
        <p className="mb-6 text-center text-xs uppercase tracking-[0.22em] text-slate-500">
          Illustrative brands in the product demonstration
        </p>
        {/* Duplicated track so the marquee loops seamlessly at -50%. */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <div className="flex w-max animate-marquee gap-14 pr-14">
            {[...logos, ...logos].map((logo, index) => (
              <span
                key={`${logo}-${index}`}
                className="whitespace-nowrap text-sm font-semibold tracking-[0.18em] text-slate-500 transition hover:text-slate-300"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- How it works */}
      <section
        id="how-it-works"
        className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Three steps from connected to answering
            </h2>
            <p className="mt-4 text-slate-400">
              No professional services engagement, no six-month rollout. Most
              teams are answering real questions inside two weeks.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {steps.map((step, index) => (
              <Reveal key={step.number} delayMs={index * 110}>
                <div className="ring-gradient group relative h-full rounded-3xl bg-void-900/60 p-6 backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:bg-void-900/80">
                  <span className="font-mono text-5xl font-semibold text-white/8 transition group-hover:text-violet-500/25">
                    {step.number}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {step.body}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-white/8 pt-5">
                    {step.detail.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-slate-300"
                      >
                        <Check
                          size={13}
                          className="shrink-0 text-electric-400"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Connector line between cards, desktop only. */}
                  {index < steps.length - 1 ? (
                    <span
                      aria-hidden
                      className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gradient-to-r from-violet-500/50 to-transparent lg:block"
                    />
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- Features */}
      <section
        id="platform"
        className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
              Platform
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Built for teams that have to justify the answer
            </h2>
            <p className="mt-4 text-slate-400">
              Every capability below exists because someone had to explain an AI
              output to an auditor, a customer or a regulator.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delayMs={(index % 3) * 90}>
                <div className="ring-gradient group h-full rounded-3xl bg-void-900/50 p-6 backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:bg-void-900/75">
                  <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-electric-500/20 to-violet-600/20 text-electric-300 transition duration-300 group-hover:from-electric-500/35 group-hover:to-violet-600/35 group-hover:text-white group-hover:shadow-glow">
                    <feature.icon size={19} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                    {feature.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- Demo */}
      <section
        id="demo"
        className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="ring-gradient overflow-hidden rounded-[2rem] bg-void-900/50 p-6 backdrop-blur sm:p-10 lg:p-14">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr),minmax(0,1.15fr)]">
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
                  Interactive preview
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Ask a question, check the receipts
                </h2>
                <p className="mt-4 leading-relaxed text-slate-400">
                  Switch between the three threads to see how a grounded answer
                  is assembled. Each response names the systems it drew from, so
                  the first thing a sceptical colleague can do is open the
                  source and check.
                </p>

                <ul className="mt-8 space-y-3">
                  {[
                    "Retrieval runs before generation, never after",
                    "Citations link to the exact record, not the workspace",
                    "Below the confidence threshold, it declines to answer",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-slate-300"
                    >
                      <Check
                        size={15}
                        className="mt-0.5 shrink-0 text-electric-400"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#pricing"
                  className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-electric-500 to-violet-600 px-6 py-3.5 font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-0.5 hover:shadow-glow-lg"
                >
                  Start a free trial
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </a>
              </Reveal>

              <Reveal delayMs={140}>
                <DemoPanel />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- Pricing */}
      <section
        id="pricing"
        className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
              Pricing
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Priced per workspace, not per question
            </h2>
            <p className="mt-4 text-slate-400">
              Model inference is included at fair-use levels. No surprise token
              bills at the end of a busy month.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <Reveal key={plan.name} delayMs={index * 110}>
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-3xl p-7 backdrop-blur transition duration-300 hover:-translate-y-1.5",
                    plan.featured
                      ? "bg-gradient-to-b from-violet-600/20 to-void-900/70 shadow-glow ring-1 ring-violet-400/40"
                      : "ring-gradient bg-void-900/50",
                  )}
                >
                  {plan.featured ? (
                    <span className="absolute -top-3 left-7 rounded-full bg-gradient-to-r from-electric-500 to-violet-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                      Most popular
                    </span>
                  ) : null}

                  <h3 className="text-lg font-semibold text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-400">{plan.blurb}</p>

                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-4xl font-semibold text-white">
                      {plan.price}
                    </span>
                    <span className="text-sm text-slate-400">
                      {plan.cadence}
                    </span>
                  </div>

                  <ul className="mt-7 flex-1 space-y-3 border-t border-white/8 pt-6">
                    {plan.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-slate-300"
                      >
                        <Check
                          size={14}
                          className="mt-0.5 shrink-0 text-electric-400"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/workspace"
                    className={cn(
                      "mt-8 w-full rounded-xl px-5 py-3 font-semibold transition duration-300",
                      plan.featured
                        ? "bg-gradient-to-r from-electric-500 to-violet-600 text-white shadow-glow hover:shadow-glow-lg"
                        : "border border-white/15 bg-white/5 text-slate-100 hover:border-violet-400/50 hover:bg-white/10",
                    )}
                  >
                    {plan.cta}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={200}>
            <p className="mt-8 text-center text-sm text-slate-500">
              Illustrative plan options. This local build does not collect
              payments or claim compliance certification.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------ FAQ */}
      <section
        id="faq"
        className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-4xl">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              The questions buyers actually ask
            </h2>
          </Reveal>

          <div className="mt-12">
            <FaqList items={faqs} />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ CTA */}
      <section className="relative px-4 pb-8 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-5xl">
          <div className="ring-gradient relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-600/25 via-void-900/80 to-electric-500/15 p-10 text-center backdrop-blur sm:p-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-1/2 left-1/2 size-[40rem] -translate-x-1/2 animate-drift rounded-full bg-violet-500/15 blur-[100px]"
            />
            <div className="relative">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Stop guessing what your data says
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-slate-300">
                Connect one source, write ten questions, and see whether the
                answers hold up. That is the whole trial.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <a
                  href="/workspace"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-void-950"
                >
                  Open workspace <ArrowRight size={16} />
                </a>
                <a
                  href="#contact"
                  className="rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white"
                >
                  Talk to the team
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
      <section id="contact" className="px-4 py-16">
        <ContactRequest />
      </section>
    </>
  );
}
