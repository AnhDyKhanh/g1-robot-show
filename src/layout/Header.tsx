import { Languages, Sun, Moon, ArrowUpRight } from "lucide-react";
import { SECTION_IDS } from "@/hooks/useScrollSpy";
import type { Translation } from "@/translations";

interface HeaderProps {
  t: Translation;
  lang: "en" | "vi";
  activeSection: string;
  isDarkMode: boolean;
  onLangToggle: () => void;
  onThemeToggle: () => void;
  onNavClick: (id: string) => void;
  onConfigureClick: () => void;
}

const NAV_LABELS: Record<string, keyof Translation> = {
  overview: "navOverview",
  features: "navFeatures",
  specifications: "navSpecifications",
  gallery: "navGallery",
  faq: "navFaq",
};

export function Header({
  t,
  lang,
  activeSection,
  isDarkMode,
  onLangToggle,
  onThemeToggle,
  onNavClick,
  onConfigureClick,
}: HeaderProps) {
  return (
    <header
      id="main-header"
      className="sticky top-0 z-40 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200/60 dark:border-neutral-900/60 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        <div
          id="brand-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-neutral-900 dark:bg-white flex items-center justify-center transition-all group-hover:scale-105">
            <span className="text-white dark:text-neutral-900 font-black text-xl tracking-tighter">
              U
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-neutral-900 dark:text-white tracking-wider text-base leading-none">
              UNITREE
            </span>
            <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest mt-1">
              {t.brandModel}
            </span>
          </div>
        </div>

        <nav
          id="desktop-nav"
          className="hidden lg:flex items-center gap-1 bg-neutral-100/60 dark:bg-neutral-900/50 p-1.5 rounded-full border border-neutral-200/50 dark:border-neutral-800/50"
        >
          {SECTION_IDS.map((section) => (
            <button
              key={section}
              id={`nav-link-${section}`}
              onClick={() => onNavClick(section)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${activeSection === section
                ? "bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white shadow-sm"
                : "text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-300"
                }`}
            >
              {t[NAV_LABELS[section]]}
            </button>
          ))}
        </nav>

        <div id="controls-deck" className="flex items-center gap-3">
          <button
            id="language-toggle-btn"
            onClick={onLangToggle}
            className="px-5 py-2.5 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 rounded-xl transition-all text-xs font-black text-neutral-800 dark:text-white flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95"
            aria-label="Toggle language"
          >
            <Languages className="w-5 h-5 text-blue-500" />
            <span>{lang === "en" ? "English" : "Tiếng Việt"}</span>
          </button>

          <button
            id="theme-toggle-btn"
            onClick={onThemeToggle}
            className="hidden p-2.5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all text-neutral-600 dark:text-neutral-300"
            aria-label="Toggle visual theme mode"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          <button
            id="buy-now-header-btn"
            onClick={onConfigureClick}
            className="relative px-5 py-2.5 bg-neutral-950 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-950 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-1.5 active:scale-98"
          >
            {t.btnConfigure} <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
