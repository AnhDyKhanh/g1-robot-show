import { ArrowRight } from "lucide-react";
import { ICON_MAP } from "@/icons/iconMap";
import type { Feature } from "@/types";
import type { Translation } from "@/translations";

interface FeaturesSectionProps {
  t: Translation;
  features: Feature[];
  onChatOpen: () => void;
}

export function FeaturesSection({
  t,
  features,
  onChatOpen,
}: FeaturesSectionProps) {
  return (
    <section id="features" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase">
          {t.featuresBadge}
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1.5 text-neutral-900 dark:text-white">
          {t.featuresTitle}
        </h2>
        <p className="text-base text-neutral-500 dark:text-neutral-400 mt-3 font-normal">
          {t.featuresDesc}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feat) => {
          const IconComp =
            ICON_MAP[feat.iconName as keyof typeof ICON_MAP] ??
            ICON_MAP.HelpCircle;
          return (
            <div
              key={feat.id}
              id={`feature-card-${feat.id}`}
              className="bg-neutral-50 dark:bg-neutral-900/40 p-6 md:p-8 rounded-2xl border border-neutral-200/50 dark:border-neutral-800/40 text-left transition-all hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-700 hover:scale-[1.01] flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-5 shadow-sm">
                  <IconComp className="w-5.5 h-5.5" />
                </div>
                <h3 className="text-lg md:text-xl font-bold tracking-tight text-neutral-900 dark:text-white mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 font-normal leading-relaxed">
                  {feat.description}
                </p>
              </div>
              <div className="pt-6">
                <span
                  className="text-xs font-bold text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1 cursor-pointer"
                  onClick={onChatOpen}
                >
                  {t.featuresConsult}{" "}
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
