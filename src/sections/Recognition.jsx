import { recognition } from "../data/site.js";
import { SectionHeader } from "../components/shared.jsx";

export default function Recognition() {
  return (
    <section id="recognition" className="scroll-mt-16 bg-surface">
      <div className="page-shell py-20 sm:py-24 lg:py-28">
        <SectionHeader number="04" eyebrow="Achievement" title="Recognition" />

        <div className="mt-12 grid gap-6">
          {recognition.map((item) => (
            <article
              key={`${item.title}-${item.year}`}
              className="grid overflow-hidden rounded-2xl border border-line md:grid-cols-[180px_1fr]"
            >
              {item.image ? (
                <div className="relative min-h-44 overflow-hidden bg-accent">
                  <img
                    src={item.image}
                    alt={item.imageAlt || item.title}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-md bg-accent/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accentInk backdrop-blur">
                    {item.year}
                  </span>
                </div>
              ) : (
                <div className="flex min-h-44 flex-col justify-between bg-accent p-7 text-accentInk">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accentInk/65">
                    Award
                  </p>
                  <p className="text-5xl font-semibold tracking-[-0.06em]">
                    {item.year}
                  </p>
                </div>
              )}

              <div className="bg-canvas p-7 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  {item.organization}
                </p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-lg font-medium text-charcoal">
                  {item.event}
                </p>
                <p className="mt-6 max-w-3xl leading-8 text-muted">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
