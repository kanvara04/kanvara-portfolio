import { projects } from "../data/site.js";
import { SectionHeader, Tag } from "../components/shared.jsx";
import { ArrowIcon } from "../components/icons.jsx";

function ProjectVisual({ project, featured }) {
  if (project.cover) {
    return (
      <div className={`relative overflow-hidden border-b border-line ${featured ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
        <img
          src={project.cover}
          alt={project.coverAlt}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    );
  }

  return (
    <div className={`project-placeholder grid place-items-center border-b border-line p-8 ${featured ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-charcoal">
          Project Image
        </p>
        <p className="mt-3 text-sm text-muted">Add project screenshot here</p>
      </div>
    </div>
  );
}

export default function Projects({ onOpenProject }) {
  return (
    <section id="projects" className="scroll-mt-16 bg-canvas">
      <div className="page-shell py-20 sm:py-24 lg:py-28">
        <SectionHeader
          number="01"
          title="Projects"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {projects.map((project, index) => {
            const featured = index === 0;

            return (
              <article
                key={project.slug}
                className={`group interactive-card relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-line bg-surface hover:border-charcoal ${featured ? "lg:col-span-7" : "lg:col-span-5"}`}
              >
                <button
                  type="button"
                  onClick={() => onOpenProject(project.slug)}
                  className="flex h-full flex-1 flex-col text-left"
                  aria-label={`View details for ${project.title}`}
                >
                  <ProjectVisual project={project} featured={featured} />

                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="font-mono text-xs font-semibold text-muted">
                        {project.number}
                      </span>
                      <span className="rounded-full border border-line bg-soft px-3 py-1.5 text-xs font-semibold text-charcoal">
                        {project.status}
                      </span>
                    </div>

                    <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                      {project.category}
                    </p>
                    {(project.roleSubtitle || project.role || project.period) && (
                      <p className="mt-2 text-xs font-medium leading-5 text-charcoal">
                        {project.roleSubtitle || project.role}
                        {(project.roleSubtitle || project.role) && project.period ? " · " : ""}
                        {project.period || ""}
                      </p>
                    )}
                    <h3 className={`mt-3 font-semibold tracking-[-0.04em] text-ink ${featured ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"}`}>
                      {project.title}
                    </h3>
                    <p className="mt-5 flex-1 text-sm leading-8 text-muted">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>

                    <div className="mt-7 flex items-center justify-between border-t border-line pt-5 text-sm font-semibold text-ink">
                      <span>View project details</span>
                      <span className="grid h-9 w-9 place-items-center rounded-full border border-line bg-soft transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-accent group-hover:text-accentInk">
                        <ArrowIcon />
                      </span>
                    </div>
                  </div>
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
