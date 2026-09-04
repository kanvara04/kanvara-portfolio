import { skillGroups } from "../data/site.js";
import { SectionHeader, Tag } from "../components/shared.jsx";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 bg-surface">
      <div className="page-shell py-20 sm:py-24 lg:py-28">
        <SectionHeader
          number="02"
          eyebrow="Capabilities"
          title="A toolkit built through hands-on work."
          description="ทักษะที่พัฒนาจากการเรียน การทำโปรเจกต์ และการทดลองใช้เครื่องมือในสถานการณ์จริง"
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              className="interactive-card rounded-[1.75rem] border border-line bg-canvas p-6 hover:border-charcoal sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                    Skill group
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-ink">
                    {group.title}
                  </h3>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface font-mono text-xs font-semibold text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {group.description && (
                <p className="mt-4 text-sm leading-7 text-muted">
                  {group.description}
                </p>
              )}

              <div className="mt-7 flex flex-wrap content-start gap-2">
                {group.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
