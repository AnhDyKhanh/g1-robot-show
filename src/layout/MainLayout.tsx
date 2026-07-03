import type { ReactNode } from "react";
import type { Translation } from "@/translations";
import { Header } from "@/layout/Header";
import { Footer } from "@/layout/Footer";
import { FloatingControlDeck } from "@/layout/FloatingControlDeck";

interface MainLayoutProps {
  children: ReactNode;
  t: Translation;
  lang: "en" | "vi";
  onLangToggle: () => void;
  isDarkMode: boolean;
  onThemeToggle: () => void;
  activeSection: string;
  onNavClick: (id: string) => void;
  onConfigureClick: () => void;
  onChatOpen: () => void;
  showScrollTop: boolean;
  onScrollTop: () => void;
}

export function MainLayout({
  children,
  t,
  lang,
  onLangToggle,
  isDarkMode,
  onThemeToggle,
  activeSection,
  onNavClick,
  onConfigureClick,
  onChatOpen,
  showScrollTop,
  onScrollTop,
}: MainLayoutProps) {
  return (
    <div
      id="portal-root"
      className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-800 dark:text-neutral-100 transition-colors duration-300 font-sans flex flex-col"
    >
      <Header
        t={t}
        lang={lang}
        activeSection={activeSection}
        isDarkMode={isDarkMode}
        onLangToggle={onLangToggle}
        onThemeToggle={onThemeToggle}
        onNavClick={onNavClick}
        onConfigureClick={onConfigureClick}
      />
      <main className="flex-grow">{children}</main>
      <Footer t={t} />
      <FloatingControlDeck
        t={t}
        showScrollTop={showScrollTop}
        onScrollTop={onScrollTop}
        onChatOpen={onChatOpen}
      />
    </div>
  );
}
