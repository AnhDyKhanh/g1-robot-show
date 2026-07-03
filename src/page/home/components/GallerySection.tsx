import { GALLERY } from "@/data";
import type { Translation } from "@/translations";

interface GalleryImage {
  id: string;
  title: string;
  alt: string;
  url: string;
  spanClass: string;
}

interface GallerySectionProps {
  t: Translation;
  onImageSelect: (image: GalleryImage) => void;
}

export function GallerySection({ t, onImageSelect }: GallerySectionProps) {
  return (
    <section
      id="gallery"
      className="py-20 bg-neutral-50 dark:bg-neutral-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase">
            {t.galleryBadge}
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight mt-1 text-neutral-900 dark:text-white">
            {t.galleryTitle}
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 font-normal">
            {t.galleryDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {GALLERY.map((img) => (
            <div
              key={img.id}
              id={`gallery-thumb-${img.id}`}
              onClick={() => onImageSelect(img)}
              className={`group relative overflow-hidden rounded-2xl border border-neutral-200/60 dark:border-neutral-800/60 cursor-pointer h-72 sm:h-80 md:h-96 ${img.spanClass}`}
            >
              <img
                src={img.url}
                alt={img.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102 select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-left">
                <p className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                  {img.title}
                </p>
                <p className="text-xs text-neutral-300 mt-1 line-clamp-2">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
