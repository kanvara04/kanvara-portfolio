import { projects } from "../data/site.js";
import { Tag } from "../components/shared.jsx";
import {
  ArrowIcon,
  BackArrowIcon,
  DocumentIcon,
} from "../components/icons.jsx";

function GalleryPlaceholder() {
  return (
    <div className="project-placeholder grid aspect-[16/10] place-items-center rounded-2xl border border-line">
      <div className="px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-charcoal">
          Project Image
        </p>
        <p className="mt-3 max-w-xs text-sm leading-6 text-muted">
          Add screenshots for this project to the gallery in src/data/site.js
        </p>
      </div>
    </div>
  );
}

function ProjectLinks({ project }) {
  if (!project.codeUrl && !project.liveUrl) return null;

  return (
    <div className="mt-6 flex flex-wrap gap-5 border-t border-line pt-6">
      {project.codeUrl && (
        <a
          href={project.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-muted"
        >
          Source Code <ArrowIcon />
        </a>
      )}

      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-muted"
        >
          Live Project <ArrowIcon />
        </a>
      )}
    </div>
  );
}

export default function ProjectDetailPage({ slug, onBack }) {
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="page-shell py-24">
        <p className="text-lg text-muted">Project not found.</p>
        <button
          type="button"
          onClick={onBack}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-muted"
        >
          <BackArrowIcon /> Back to projects
        </button>
      </div>
    );
  }

  const hasGallery = Boolean(project.gallery?.length);
  const hasResponsibilities = Boolean(project.responsibilities?.length);

  return (
    <article className="bg-canvas">
      <div className="page-shell py-12 sm:py-16 lg:py-20">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-ink"
        >
          <BackArrowIcon /> Back to projects
        </button>

        <header className="mt-7 grid gap-4 border-t border-line pt-7 md:grid-cols-[48px_1fr]">
          <p className="font-mono text-xs font-semibold tracking-[0.18em] text-muted">
            {project.number}
          </p>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-charcoal">
                {project.category}
              </p>
              {project.status && (
                <span className="rounded-md bg-soft px-2.5 py-1 text-[11px] font-semibold text-charcoal">
                  {project.status}
                </span>
              )}
              {project.period && (
                <span className="text-xs font-medium text-muted">
                  {project.period}
                </span>
              )}
            </div>

            <h1 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-ink sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>

            {project.course && (
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                {project.course}
              </p>
            )}

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">
              {project.description}
            </p>

            {project.tags?.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            )}

            {project.reportFile && (
              <a
                href={project.reportFile}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-charcoal hover:bg-soft"
              >
                <DocumentIcon className="h-4 w-4" />
                Full Report
                <ArrowIcon />
              </a>
            )}
          </div>
        </header>

        <section className="mt-10 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <article className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-charcoal">
              Project Overview
            </p>
            <p className="mt-4 text-base leading-8 text-charcoal">
              {project.overview || project.description}
            </p>
            <ProjectLinks project={project} />
          </article>

          {project.role && (
            <aside className="rounded-2xl border border-line bg-soft p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                My Role
              </p>
              <h2 className="mt-3 text-xl font-semibold tracking-[-0.035em] text-ink">
                {project.role}
              </h2>

              {project.roleSubtitle && (
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-charcoal">
                  {project.roleSubtitle}
                </p>
              )}

              {project.roleDescription && (
                <p className="mt-3 text-sm leading-7 text-muted">
                  {project.roleDescription}
                </p>
              )}

              {hasResponsibilities && (
                <ul className="mt-5 space-y-3 border-t border-line pt-5">
                  {project.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex gap-3 text-sm leading-6 text-charcoal"
                    >
                      <span
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-charcoal"
                        aria-hidden="true"
                      />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              )}
            </aside>
          )}
        </section>

        <section className="mt-12">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4 border-b border-line pb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Project Gallery
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-[-0.035em] text-ink">
                Process & Results
              </h2>
            </div>

            {hasGallery && (
              <span className="font-mono text-xs text-muted">
                {String(project.gallery.length).padStart(2, "0")} Images
              </span>
            )}
          </div>

          {hasGallery ? (
            <div className="grid gap-x-5 gap-y-8 md:grid-cols-2">
              {project.gallery.map((image, index) => (
                <figure
                  key={`${project.slug}-${image.src}`}
                  className={image.span === "full" ? "md:col-span-2" : "min-w-0"}
                >
                  <div
                    className={`overflow-hidden rounded-2xl border border-line bg-soft p-2 ${
                      image.span === "full" ? "aspect-[16/8]" : "aspect-[16/10]"
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt || `${project.title} screenshot ${index + 1}`}
                      className="h-full w-full rounded-xl object-contain"
                      loading="lazy"
                    />
                  </div>

                  {image.caption && (
                    <figcaption className="mt-3 text-sm leading-6 text-muted">
                      {image.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          ) : (
            <GalleryPlaceholder />
          )}
        </section>
      </div>
    </article>
  );
}
