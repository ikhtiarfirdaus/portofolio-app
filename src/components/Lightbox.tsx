import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";

type Props = {
  images: string[];
  index: number;
  onClose: () => void;
  onIndexChange: (i: number) => void;
  alt: string;
};

export default function Lightbox({ images, index, onClose, onIndexChange, alt }: Props) {
  const go = (dir: 1 | -1) => onIndexChange((index + dir + images.length) % images.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          aria-label="Tutup"
          className="absolute right-5 top-5 rounded-full border border-white/15 bg-white/5 p-2 text-white/80 transition-colors hover:bg-white/15 hover:text-white"
        >
          <X size={20} />
        </button>

        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            aria-label="Sebelumnya"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-white/5 p-2 text-white/80 transition-colors hover:bg-white/15 hover:text-white sm:left-6"
          >
            <ChevronLeft size={22} />
          </button>
        )}

        <motion.img
          key={images[index]}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.18 }}
          src={images[index]}
          alt={`${alt} — screenshot ${index + 1}`}
          onClick={(e) => e.stopPropagation()}
          className="max-h-[85vh] max-w-[92vw] rounded-lg border border-white/10 object-contain shadow-2xl"
        />

        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            aria-label="Berikutnya"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-white/5 p-2 text-white/80 transition-colors hover:bg-white/15 hover:text-white sm:right-6"
          >
            <ChevronRight size={22} />
          </button>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 font-mono text-xs text-white/70">
            {index + 1} / {images.length}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
