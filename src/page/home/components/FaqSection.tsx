import Accordion from "@/components/Accordion";
import type { FAQItem } from "@/types";
import type { Translation } from "@/translations";

interface FaqSectionProps {
  t: Translation;
  faqs: FAQItem[];
}

export function FaqSection({ t, faqs }: FaqSectionProps) {
  return (
    <section id="faq" className="py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase">
          {t.faqBadge}
        </span>
        <h2 className="text-3xl font-extrabold tracking-tight mt-1 text-neutral-900 dark:text-white">
          {t.faqTitle}
        </h2>
      </div>

      <div className="space-y-1">
        {faqs.map((faq) => (
          <Accordion key={faq.id} item={faq} />
        ))}
      </div>
    </section>
  );
}
