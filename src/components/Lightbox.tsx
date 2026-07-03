import { motion, AnimatePresence } from "motion/react";
import { X, ArrowLeft, ArrowRight, Info } from "lucide-react";

interface LightboxProps {
  image: {
    id: string;
    title: string;
    alt: string;
    url: string;
  } | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function Lightbox({
  image,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  return (
    <AnimatePresence>
      {image && (
        <>
          {/* Backdrop */}
          <motion.div
            id="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.95 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-950/98 z-55 backdrop-blur-md"
          />

          {/* Centered Viewer */}
          <div className="fixed inset-0 z-55 flex flex-col justify-between p-4 md:p-8 pointer-events-none">
            {/* Header controls */}
            <div className="flex justify-between items-center w-full max-w-6xl mx-auto pointer-events-auto">
              <h3 className="text-white text-base md:text-lg font-bold tracking-tight">
                {image.title}
              </h3>
              <button
                id="close-lightbox-btn"
                onClick={onClose}
                className="p-2 bg-neutral-900/60 hover:bg-neutral-800 text-neutral-300 hover:text-white rounded-full transition-all border border-neutral-800 focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Stage */}
            <div className="flex-1 flex items-center justify-center relative w-full max-w-5xl mx-auto py-4">
              {/* Left Navigation */}
              {onPrev && (
                <button
                  id="prev-lightbox-btn"
                  onClick={onPrev}
                  className="absolute left-0 md:-left-16 p-3 bg-neutral-900/40 hover:bg-neutral-800/80 text-white rounded-full transition-all border border-neutral-800/50 pointer-events-auto focus:outline-none hidden sm:block"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
              )}

              {/* Central Image Container */}
              <motion.div
                initial={{ scale: 0.97, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.97, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 180 }}
                className="relative max-h-[70vh] max-w-full pointer-events-auto flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl border border-neutral-800/40"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  referrerPolicy="no-referrer"
                  className="max-h-[70vh] max-w-full object-contain pointer-events-none rounded-xl"
                />
              </motion.div>

              {/* Right Navigation */}
              {onNext && (
                <button
                  id="next-lightbox-btn"
                  onClick={onNext}
                  className="absolute right-0 md:-right-16 p-3 bg-neutral-900/40 hover:bg-neutral-800/80 text-white rounded-full transition-all border border-neutral-800/50 pointer-events-auto focus:outline-none hidden sm:block"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Details Panel */}
            <div className="w-full max-w-4xl mx-auto bg-neutral-900/50 border border-neutral-800/60 p-4 rounded-2xl pointer-events-auto flex items-start gap-3.5 mb-2">
              <Info className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="space-y-1 text-left">
                <p className="text-xs text-neutral-400 font-bold uppercase tracking-wide">
                  Image Description / Spec Context
                </p>
                <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                  {image.alt}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
