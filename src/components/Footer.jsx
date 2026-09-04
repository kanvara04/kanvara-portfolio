import { profile } from "../data/site.js";

export default function Footer({ onBackToTop }) {
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="page-shell flex flex-col gap-4 py-7 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <button
          type="button"
          onClick={onBackToTop}
          className="font-semibold text-ink hover:text-muted"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
