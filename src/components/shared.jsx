export function SectionHeader({ number, eyebrow, title, description }) {
  return (
    <div className="grid gap-6 border-t border-line pt-7 md:grid-cols-[86px_1fr]">
      {number && (
        <div className="flex items-start">
          <span className="rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[10px] font-semibold tracking-[0.18em] text-muted shadow-sm">
            {number}
          </span>
        </div>
      )}

      <div className="max-w-3xl">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-ink sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export function Tag({ children }) {
  return (
    <span className="rounded-full border border-line bg-soft px-3 py-1.5 text-xs font-medium text-charcoal transition-all duration-200 hover:-translate-y-0.5 hover:border-charcoal hover:bg-surface hover:text-ink">
      {children}
    </span>
  );
}
