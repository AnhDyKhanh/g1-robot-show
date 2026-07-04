import type { SpecRow } from "@/types/types";
import type { Translation } from "@/translations";

interface SpecificationsSectionProps {
  t: Translation;
  specifications: SpecRow[];
}

export function SpecificationsSection({
  t,
  specifications,
}: SpecificationsSectionProps) {
  return (
    <section id="specifications" className="py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase">
          {t.specsBadge}
        </span>
        <h2 className="text-3xl font-extrabold tracking-tight mt-1 text-neutral-900 dark:text-white">
          {t.specsTitle}
        </h2>
      </div>

      <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm bg-neutral-50/20 dark:bg-neutral-950/20">
        <table className="w-full text-left border-collapse text-sm">
          <tbody>
            {specifications.map((spec, idx) => (
              <tr
                key={idx}
                className="border-b border-neutral-200 dark:border-neutral-900 hover:bg-neutral-100/50 dark:hover:bg-neutral-900/30 transition-all"
              >
                <td className="px-5 py-4 font-bold text-neutral-900 dark:text-white w-1/3 border-r border-neutral-200/50 dark:border-neutral-900/50">
                  {spec.label}
                </td>
                <td className="px-5 py-4 text-neutral-600 dark:text-neutral-400">
                  {spec.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
