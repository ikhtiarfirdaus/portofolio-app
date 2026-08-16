import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "../data/content";
import SyncPanel from "./SyncPanel";

export default function Hero() {
  return (
    <section className="bg-grid relative overflow-hidden border-b border-[var(--color-border)]">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-28">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]"
          >
            {profile.title}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl font-extrabold leading-tight tracking-tight text-[var(--color-text)] sm:text-5xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 max-w-xl text-lg text-[var(--color-text-secondary)]"
          >
            {profile.heroHighlight}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 flex items-center gap-2 text-sm text-[var(--color-text-secondary)]"
          >
            <MapPin size={15} />
            {profile.location}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              Lihat Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-soft)]"
            >
              Hubungi Saya
            </a>
          </motion.div>
        </div>

        <div className="flex justify-center md:justify-end">
          <SyncPanel />
        </div>
      </div>
    </section>
  );
}
