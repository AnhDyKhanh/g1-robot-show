import type { Translation } from "@/translations";

interface ConfiguratorBannerProps {
  t: Translation;
  onConfigOpen: () => void;
}

export function ConfiguratorBanner({ t, onConfigOpen }: ConfiguratorBannerProps) {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-neutral-900 to-neutral-950 text-white">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <span className="text-[10px] font-black uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full inline-block">
          {t.bannerBadge}
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none text-white">
          {t.bannerTitle}
        </h2>
        <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          {t.bannerDesc}
        </p>
        <div className="pt-2">
          <button
            id="banner-configurator-trigger"
            onClick={onConfigOpen}
            className="px-7 py-4 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-98 cursor-pointer"
          >
            {t.btnLaunchConfigurator}
          </button>
        </div>
      </div>
    </section>
  );
}
