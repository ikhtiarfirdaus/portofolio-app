import { motion } from "framer-motion";
import { education, experience, profile } from "../data/content";

export default function ExperienceSection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
          Perjalanan
        </p>
        <h2 className="mt-2 text-2xl font-bold text-[var(--color-text)]">Pengalaman & Pendidikan</h2>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {profile.summary}
        </p>

        <div className="mt-10 space-y-10">
          {experience.map((exp) => (
            <div key={exp.company} className="grid gap-6 md:grid-cols-[220px_1fr]">
              <div>
                <p className="font-semibold text-[var(--color-text)]">{exp.company}</p>
                <p className="text-sm text-[var(--color-text-secondary)]">{exp.role}</p>
                <p className="mt-1 font-mono text-xs text-[var(--color-accent)]">{exp.period}</p>
                <p className="mt-1 text-xs text-[var(--color-text-secondary)]">{exp.location}</p>
              </div>

              <ul className="space-y-4 border-l border-[var(--color-border)] pl-6">
                {exp.points.map((p, i) => (
                  <motion.li
                    key={p.title}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <p className="text-sm font-medium text-[var(--color-text)]">{p.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">{p.detail}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 border-t border-[var(--color-border)] pt-10 md:grid-cols-[220px_1fr]">
          <div>
            <p className="font-semibold text-[var(--color-text)]">{education.school}</p>
            <p className="mt-1 font-mono text-xs text-[var(--color-accent)]">{education.period}</p>
          </div>
          <p className="text-sm text-[var(--color-text-secondary)]">{education.program}</p>
        </div>
      </div>
    </section>
  );
}
