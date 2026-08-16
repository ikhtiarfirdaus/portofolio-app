import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Menu, X } from "lucide-react";
import { profile } from "../data/content";
import GithubMark from "./icons/GithubMark";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "border-[var(--color-border)] bg-[var(--color-bg)]/85 backdrop-blur" : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-mono text-sm font-medium tracking-tight text-[var(--color-text)]">
          isf<span className="text-[var(--color-accent)]">.</span>dev
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm transition-colors ${
                location.pathname === l.to
                  ? "text-[var(--color-text)]"
                  : "text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text)]"
            aria-label="GitHub"
          >
            <GithubMark size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-[var(--color-border)] px-4 py-1.5 text-sm text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-soft)]"
          >
            Hubungi Saya
          </a>
        </div>

        <button
          className="text-[var(--color-text)] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-[var(--color-text-secondary)]">
                {l.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a href={profile.github} target="_blank" rel="noreferrer" className="text-[var(--color-text-secondary)]" aria-label="GitHub">
                <GithubMark size={18} />
              </a>
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-sm text-[var(--color-text)]">
                <Mail size={16} /> {profile.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
