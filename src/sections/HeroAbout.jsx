import heroArtwork from "../assets/hero.jpg";
import { education, profile } from "../data/site.js";
import { ArrowIcon } from "../components/icons.jsx";

export default function HeroAbout({ onNavigate }) {
  return (
    <section id="home" className="hero-mesh scroll-mt-16 overflow-hidden">
      <div className="page-shell relative py-16 sm:py-20 lg:py-24">
        <div className="hero-orb pointer-events-none absolute -right-28 top-14 h-80 w-80 rounded-full opacity-70" />
        <div className="pointer-events-none absolute right-[8%] top-[18%] h-3 w-3 animate-drift rounded-full bg-accent opacity-40" />
        <div className="pointer-events-none absolute right-[34%] top-[10%] h-2 w-2 animate-drift rounded-full bg-charcoal opacity-30 [animation-delay:1.4s]" />

        <div className="relative grid min-h-[calc(100vh-8rem)] items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-line bg-surface/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Computer Science Portfolio
            </div>

            <h1 className="mt-8 whitespace-nowrap text-[clamp(2.9rem,8.5vw,7.4rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-ink">
              Kanvara Bonha
            </h1>

            <p className="mt-8 max-w-2xl text-xl font-medium leading-8 text-charcoal sm:text-2xl">
              {profile.role} focused on data, applied AI, and practical digital products.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-muted">
              สนใจการเปลี่ยนข้อมูลที่ซับซ้อนให้กลายเป็นระบบที่ทีมสามารถเข้าใจ ใช้งาน และนำไปตัดสินใจต่อได้จริง
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {profile.highlights.map((item) => (
                <span
                  key={item.label}
                  className="rounded-full border border-line bg-surface/80 px-4 py-2 text-sm text-muted shadow-sm backdrop-blur transition-transform hover:-translate-y-0.5"
                >
                  {item.value}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate("projects")}
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accentInk transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                View selected projects
                <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowIcon />
                </span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate("contact")}
                className="rounded-full border border-line bg-surface px-5 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-charcoal hover:bg-soft"
              >
                Contact me
              </button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[470px] lg:mx-0 lg:justify-self-end">
            <div className="absolute -inset-5 rounded-[2.5rem] border border-line/70" />
            <div className="glass-panel relative overflow-hidden rounded-[2rem] border border-line p-5 shadow-glow sm:p-7">
              <div className="artwork-paper relative grid aspect-square place-items-center overflow-hidden rounded-[1.5rem] border border-black/10">
                <div className="absolute left-5 top-5 rounded-full border border-black/10 bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-black/60 backdrop-blur">
                  Data · AI · Build
                </div>
                <img
                  src={heroArtwork}
                  alt="Abstract layered technology illustration"
                  className="w-[72%] animate-float drop-shadow-[0_24px_28px_rgba(0,0,0,0.22)]"
                />
                <div className="absolute bottom-5 right-5 h-12 w-12 rounded-full border border-black/10 bg-black/5" />
              </div>
            </div>

            <div className="absolute -bottom-5 -left-4 rounded-2xl border border-line bg-surface px-4 py-3 shadow-soft sm:-left-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                Current focus
              </p>
              <p className="mt-1 text-sm font-semibold text-ink">Applied AI & Data</p>
            </div>
          </div>
        </div>

        <div
          id="education"
          className="relative mt-20 scroll-mt-20 grid gap-7 border-t border-line pt-12 lg:grid-cols-[90px_1fr]"
        >
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            About
          </p>

          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
            <article className="interactive-card rounded-[2rem] border border-line bg-surface p-7 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Profile
              </p>
              <h2 className="mt-4 whitespace-nowrap text-[clamp(1.9rem,4vw,3.4rem)] font-semibold tracking-[-0.055em] text-ink">
                About Kanvara Bonha
              </h2>

              <div className="mt-7 max-w-3xl">
                {profile.bio.map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={index === 0 ? "text-lg leading-9 text-charcoal" : "mt-4 text-base leading-8 text-muted"}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>

            <aside className="interactive-card flex flex-col rounded-[2rem] border border-line bg-soft p-7 sm:p-9">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  Education
                </p>
                <span className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold text-charcoal">
                  {education.period}
                </span>
              </div>

              <h3 className="mt-7 text-3xl font-semibold tracking-[-0.045em] text-ink">
                {education.major}
              </h3>
              <p className="mt-2 text-sm text-muted">{education.school}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                {education.degree}
              </p>

              <div className="mt-12 flex items-end justify-between border-t border-line pt-6 lg:mt-auto">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  GPAX
                </span>
                <span className="text-5xl font-semibold tracking-[-0.06em] text-ink">
                  {education.gpax}
                </span>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
