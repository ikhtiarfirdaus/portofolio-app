import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Row = { label: string; value: string; delta: string };

const initialRows: Row[] = [
  { label: "shopee_orders.csv", value: "12,480", delta: "+312" },
  { label: "tiktok_live.csv", value: "3,092", delta: "+58" },
  { label: "commission_tiers", value: "synced", delta: "" },
];

export default function SyncPanel() {
  const [rows, setRows] = useState(initialRows);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setPulse(true);
      setRows((prev) =>
        prev.map((r) =>
          r.delta
            ? {
                ...r,
                value: (parseInt(r.value.replace(/,/g, ""), 10) + Math.floor(Math.random() * 20 + 1)).toLocaleString("en-US"),
                delta: `+${Math.floor(Math.random() * 40 + 5)}`,
              }
            : r
        )
      );
      setTimeout(() => setPulse(false), 400);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full max-w-sm rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl shadow-black/40"
    >
      <div className="flex items-center justify-between border-b border-[var(--color-border)] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full bg-emerald-400 ${pulse ? "animate-ping" : ""}`} />
          <span className="font-mono text-xs text-[var(--color-text-secondary)]">data-sync-hub</span>
        </div>
        <span className="font-mono text-[10px] text-[var(--color-text-secondary)]">live</span>
      </div>

      <div className="divide-y divide-[var(--color-border)]">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center justify-between px-4 py-2.5">
            <span className="font-mono text-xs text-[var(--color-text-secondary)]">{r.label}</span>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--color-text)]">{r.value}</span>
              {r.delta && <span className="font-mono text-[10px] text-[var(--color-accent)]">{r.delta}</span>}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between px-4 py-3 text-[10px] text-[var(--color-text-secondary)]">
        <span className="font-mono">reporting time</span>
        <span className="font-mono text-emerald-400">jam → menit</span>
      </div>
    </motion.div>
  );
}
