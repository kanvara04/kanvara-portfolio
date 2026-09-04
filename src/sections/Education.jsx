import { education } from "../data/site.js";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-16 bg-surface text-ink">
      <div className="page-shell py-20 sm:py-24 lg:py-28">
        <div className="grid gap-5 border-t border-line pt-6 md:grid-cols-[72px_1fr]">
          <p className="font-mono text-xs font-semibold tracking-[0.18em] text-muted">
            03
          </p>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-charcoal">
              Academic Background
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Education
            </h2>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_280px]">
          <article className="rounded-2xl border border-line bg-canvas p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              {education.degree} · {education.period}
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
              {education.major}
            </h3>
            <p className="mt-3 text-lg text-charcoal">{education.school}</p>
          </article>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <article className="rounded-2xl bg-accent p-7 text-accentInk">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accentInk/60">
                GPAX
              </p>
              <p className="mt-4 text-6xl font-semibold tracking-[-0.07em]">
                {education.gpax}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
