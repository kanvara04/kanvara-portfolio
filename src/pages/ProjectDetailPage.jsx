import { projects } from "../data/site.js";
import { Tag } from "../components/shared.jsx";
import { ArrowIcon, BackArrowIcon, DocumentIcon } from "../components/icons.jsx";

function GalleryPlaceholder() {
  return (
    <div className="project-placeholder grid aspect-[16/10] place-items-center rounded-2xl border border-line">
      <div className="text-center">
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

  const hasGallery = project.gallery && project.gallery.length > 0;

  return (
    <article className="bg-canvas">
      <div className="page-shell py-14 sm:py-16 lg:py-20">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-ink"
        >
          <BackArrowIcon /> Back to projects
        </button>

        <div className="mt-8 grid gap-5 border-t border-line pt-8 md:grid-cols-[72px_1fr]">
          <p className="font-mono text-xs font-semibold tracking-[0.18em] text-muted">
            {project.number}
          </p>

          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-charcoal">
                {project.category}
              </p>
              <span className="rounded-md bg-soft px-3 py-1.5 text-xs font-semibold text-charcoal">
                {project.status}
              </span>
            </div>
            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>

            {project.reportFile && (
              <a
                href={project.reportFile}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-charcoal hover:bg-soft"
              >
                <DocumentIcon className="h-4 w-4" />
                Read full project report (PDF)
                <ArrowIcon />
              </a>
            )}
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-12">
          {hasGallery ? (
            <div className="grid gap-6 sm:grid-cols-2">
              {project.gallery.map((image, index) => (
                <figure
                  key={index}
                  className={image.span === "half" ? "" : "sm:col-span-2"}
                >
                  <div className="overflow-hidden rounded-2xl border border-line bg-surface">
                    <img
                      src={image.src}
                      alt={image.alt || `${project.title} screenshot ${index + 1}`}
                      className="w-full h-[600px] object-cover rounded-lg"
                    />
                  </div>
                  {image.caption && (
                    <figcaption className="mt-3 text-sm leading-7 text-muted">
                      {image.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          ) : (
            <GalleryPlaceholder />
          )}
        </div>

        {/* Overview + description */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <article className="rounded-2xl border border-line bg-surface p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-charcoal">
              Overview
            </p>
            <p className="mt-4 text-lg leading-9 text-charcoal">
              {project.overview || project.description}
            </p>
          </article>

          <aside className="rounded-2xl border border-line bg-surface p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-charcoal">
              Summary
            </p>
            <p className="mt-4 text-sm leading-8 text-muted">
              {project.description}
            </p>

            <div className="mt-6 border-t border-line pt-6">
              {project.codeUrl || project.liveUrl ? (
                <div className="flex flex-col gap-3">
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-muted"
                    >
                      Source Code <ArrowIcon />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-muted"
                    >
                      Live Project <ArrowIcon />
                    </a>
                  )}
                </div>
              ) : (
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                </span>
              )}
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
