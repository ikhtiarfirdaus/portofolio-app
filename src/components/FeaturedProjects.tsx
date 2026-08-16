import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/content";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  return (
    <section className="border-b border-[var(--color-border)] px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
              Featured Work
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[var(--color-text)]">Sistem yang saya bangun</h2>
          </div>
          <Link
            to="/projects"
            className="hidden items-center gap-1 text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)] sm:flex"
          >
            Semua projects <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>

        <Link
          to="/projects"
          className="mt-8 flex items-center gap-1 text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)] sm:hidden"
        >
          Semua projects <ArrowUpRight size={15} />
        </Link>
      </div>
    </section>
  );
}
