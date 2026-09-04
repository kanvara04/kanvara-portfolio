import { useState } from "react";
import { navigation, profile } from "../data/site.js";
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from "./icons.jsx";

export default function Navbar({ onNavigate, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  function handleNavigate(id) {
    setOpen(false);
    onNavigate(id);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur-xl">
      <nav className="page-shell" aria-label="Primary navigation">
        <div className="flex h-16 items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => handleNavigate("home")}
            className="group flex shrink-0 items-center gap-3"
          >
            <span className="relative grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-xs font-bold tracking-tight text-ink shadow-sm transition-all duration-300 group-hover:-rotate-6 group-hover:border-charcoal">
              {profile.initials}
              <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-canvas bg-accent" />
            </span>
            <span className="text-sm font-semibold tracking-[-0.02em] text-ink">
              Kanvara Bonha
            </span>
          </button>

          <div className="hidden items-center gap-1 xl:flex">
            {navigation.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigate(item.id)}
                className="rounded-full px-3 py-2 text-xs font-medium text-muted transition-all duration-200 hover:bg-surface hover:text-ink hover:shadow-sm"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              className="group inline-flex h-10 items-center gap-2 rounded-full border border-line bg-surface px-3 text-xs font-semibold text-ink transition-all duration-200 hover:border-charcoal hover:bg-soft"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              <span className="transition-transform duration-300 group-hover:rotate-12">
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              </span>
              <span className="hidden sm:inline">
                {theme === "dark" ? "Light" : "Dark"}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-ink transition-colors hover:bg-soft xl:hidden"
              aria-expanded={open}
              aria-label={open ? "Close navigation" : "Open navigation"}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {open && (
          <div className="grid grid-cols-2 gap-2 border-t border-line py-4 sm:grid-cols-3 xl:hidden">
            {navigation.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigate(item.id)}
                className="rounded-xl border border-line bg-surface px-4 py-3 text-center text-sm font-medium text-charcoal transition-all hover:-translate-y-0.5 hover:bg-soft hover:text-ink"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
