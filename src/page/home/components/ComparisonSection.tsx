import type { Translation } from "@/translations";

interface ComparisonRow {
  feature: string;
  g1: string;
  traditional: string;
}

interface ComparisonSectionProps {
  t: Translation;
  comparisons: ComparisonRow[];
}

export function ComparisonSection({ t, comparisons }: ComparisonSectionProps) {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase">
          {t.compBadge}
        </span>
        <h2 className="text-3xl font-extrabold tracking-tight mt-1 text-neutral-900 dark:text-white">
          {t.compTitle}
        </h2>
      </div>

      <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm bg-neutral-50/20 dark:bg-neutral-950/20">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
              <th className="px-5 py-4 font-extrabold text-neutral-900 dark:text-white">
                {t.compColFeature}
              </th>
              <th className="px-5 py-4 font-extrabold text-blue-600 dark:text-blue-400">
                {t.compColG1}
              </th>
              <th className="px-5 py-4 font-extrabold text-neutral-500">
                {t.compColTraditional}
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((comp, idx) => (
              <tr
                key={idx}
                className="border-b border-neutral-200 dark:border-neutral-900 hover:bg-neutral-100/50 dark:hover:bg-neutral-900/30 transition-all"
              >
                <td className="px-5 py-4 font-bold text-neutral-900 dark:text-white border-r border-neutral-200/50 dark:border-neutral-900/50">
                  {comp.feature}
                </td>
                <td className="px-5 py-4 text-neutral-800 dark:text-neutral-200 font-semibold">
                  {comp.g1}
                </td>
                <td className="px-5 py-4 text-neutral-500">
                  {comp.traditional}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
