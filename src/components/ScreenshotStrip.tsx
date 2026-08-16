import { useState } from "react";
import { Images } from "lucide-react";
import Lightbox from "./Lightbox";

export default function ScreenshotStrip({
  images,
  alt,
  max = 4,
}: {
  images: string[];
  alt: string;
  max?: number;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!images.length) return null;

  const visible = images.slice(0, max);
  const remaining = images.length - visible.length;

  return (
    <>
      <div className="mt-5 grid grid-cols-4 gap-2">
        {visible.map((src, i) => {
          const isLastVisible = i === visible.length - 1 && remaining > 0;
          return (
            <button
              key={src}
              onClick={() => setOpenIndex(i)}
              className="group relative aspect-video overflow-hidden rounded-md border border-[var(--color-border)] bg-black/20"
            >
              <img
                src={src}
                alt={`${alt} — preview ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
              {isLastVisible && (
                <span className="absolute inset-0 flex items-center justify-center gap-1 bg-black/60 font-mono text-xs text-white">
                  <Images size={13} /> +{remaining}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {openIndex !== null && (
        <Lightbox
          images={images}
          index={openIndex}
          onIndexChange={setOpenIndex}
          onClose={() => setOpenIndex(null)}
          alt={alt}
        />
      )}
    </>
  );
}
