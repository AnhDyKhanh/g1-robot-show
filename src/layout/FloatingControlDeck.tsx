import { motion, AnimatePresence } from "motion/react";
import { ArrowUp, MessageSquare } from "lucide-react";
import type { Translation } from "@/translations";

interface FloatingControlDeckProps {
  t: Translation;
  showScrollTop: boolean;
  onScrollTop: () => void;
  onChatOpen: () => void;
}

export function FloatingControlDeck({
  t,
  showScrollTop,
  onScrollTop,
  onChatOpen,
}: FloatingControlDeckProps) {
  return (
    <div
      id="floating-control-deck"
      className="fixed bottom-6 right-6 z-40 flex flex-col gap-3"
    >
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="back-to-top"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={onScrollTop}
            className="p-3 bg-neutral-900/90 dark:bg-neutral-800 hover:bg-neutral-800 text-neutral-300 hover:text-white rounded-xl shadow-lg border border-neutral-800 hover:-translate-y-0.5 transition-all focus:outline-none"
            aria-label="Scroll to top of portal"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <button
        id="chat-fab-launcher"
        onClick={onChatOpen}
        className="p-4 bg-neutral-900 hover:bg-neutral-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white rounded-2xl shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center border border-neutral-800 dark:border-blue-500 focus:outline-none group relative cursor-pointer"
        aria-label="Launch AI Robotics Support Drawer"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute right-14 bg-neutral-950 text-white text-[10px] font-bold px-2 py-1 rounded shadow border border-neutral-800 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          {t.chatFabLabel}
        </span>
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-500 border border-neutral-900" />
      </button>
    </div>
  );
}
