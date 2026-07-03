import type { Translation } from "@/translations";

interface FooterProps {
  t: Translation;
}

export function Footer({ t }: FooterProps) {
  return (
    <footer className="py-8 bg-neutral-950 text-neutral-500 border-t border-neutral-900 text-xs text-center transition-all">
      <div className="max-w-7xl mx-auto px-4 space-y-4">
        <div className="flex justify-between items-center flex-col sm:flex-row gap-4">
          <p className="font-medium">
            {t.footerRights.replace(
              "{year}",
              new Date().getFullYear().toString(),
            )}
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">
              {t.footerPrivacy}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {t.footerTerms}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {t.footerDoc}
            </a>
          </div>
        </div>
        <p className="text-[10px] text-neutral-600 max-w-xl mx-auto leading-relaxed">
          {t.footerDisclaimer}
        </p>
      </div>
    </footer>
  );
}
