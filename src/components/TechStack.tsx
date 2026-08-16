import { motion } from "framer-motion";
import { techStack } from "../data/content";

const groups: { label: string; items: string[] }[] = [
  { label: "Backend", items: techStack.backend },
  { label: "Frontend", items: techStack.frontend },
  { label: "Database", items: techStack.database },
  { label: "Operasional", items: techStack.operasional },
];

export default function TechStack() {
  return (
    <section className="border-b border-[var(--color-border)] px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
          Stack &amp; Keahlian
        </p>
        <h2 className="mt-2 text-2xl font-bold text-[var(--color-text)]">
          Dari lantai gudang sampai baris kode
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
            >
              <p className="font-mono text-xs text-[var(--color-accent)]">{g.label}</p>
              <ul className="mt-3 space-y-1.5">
                {g.items.map((item) => (
                  <li key={item} className="text-sm text-[var(--color-text-secondary)]">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
