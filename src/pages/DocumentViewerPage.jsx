import { documents } from "../data/site.js";
import { BackArrowIcon } from "../components/icons.jsx";

export default function DocumentViewerPage({ id, onBack }) {
  const doc = documents.find((item) => item.id === id);

  if (!doc || !doc.file) {
    return (
      <div className="page-shell py-24">
        <p className="text-lg text-muted">This document isn't available yet.</p>
        <button
          type="button"
          onClick={onBack}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-muted"
        >
          <BackArrowIcon /> Back to documents
        </button>
      </div>
    );
  }

  return (
    <article className="flex min-h-[calc(100vh-4rem)] flex-col bg-canvas">
      <div className="page-shell flex flex-wrap items-center justify-between gap-4 border-b border-line py-6">
        <div>
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-ink"
          >
            <BackArrowIcon /> Back to documents
          </button>
          <h1 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
            {doc.title}
          </h1>
          <p className="mt-1 text-sm text-muted">
            {doc.organization} · {doc.year}
          </p>
        </div>

        <a
          href={doc.file}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-soft"
        >
          Open in new tab
        </a>
      </div>

      <div className="flex-1 bg-surface">
        <iframe
          src={doc.file}
          title={doc.title}
          className="h-[calc(100vh-4rem-96px)] w-full min-h-[600px] border-0"
        />
      </div>
    </article>
  );
}
