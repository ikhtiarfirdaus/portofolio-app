import { motion } from "framer-motion";
import screenshots from "virtual:screenshots";
import type { projects } from "../data/content";
import ScreenshotStrip from "./ScreenshotStrip";

type Project = (typeof projects)[number];

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-surface-hover)] sm:p-8"
    >
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
          Internal System
        </span>
      </div>

      <h3 className="mt-4 text-xl font-bold text-[var(--color-text)]">{project.name}</h3>
      <p className="mt-1 font-mono text-xs text-[var(--color-accent)]">{project.tagline}</p>
      <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">{project.description}</p>

      <ul className="mt-5 space-y-2">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2 text-sm text-[var(--color-text-secondary)]">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-[var(--color-border)] px-3 py-1 font-mono text-[11px] text-[var(--color-text-secondary)]"
          >
            {s}
          </span>
        ))}
      </div>

      <ScreenshotStrip images={screenshots[project.screenshotsDir] ?? []} alt={project.name} />
    </motion.article>
  );
}
