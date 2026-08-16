import { Mail, Phone } from "lucide-react";
import { profile } from "../data/content";
import GithubMark from "./icons/GithubMark";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-sm text-[var(--color-text)]">
            isf<span className="text-[var(--color-accent)]">.</span>dev
          </p>
          <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{profile.location}</p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-sm text-[var(--color-text-secondary)]">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-2 transition-colors hover:text-[var(--color-text)]">
            <Mail size={15} /> {profile.email}
          </a>
          <a href={`tel:${profile.phone}`} className="flex items-center gap-2 transition-colors hover:text-[var(--color-text)]">
            <Phone size={15} /> {profile.phone}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-[var(--color-text)]"
          >
            <GithubMark size={15} /> GitHub
          </a>
        </div>
      </div>
      <div className="border-t border-[var(--color-border)] px-6 py-4 text-center text-xs text-[var(--color-text-secondary)]">
        © {new Date().getFullYear()} {profile.name}. Dibangun dengan React & Tailwind.
      </div>
    </footer>
  );
}
