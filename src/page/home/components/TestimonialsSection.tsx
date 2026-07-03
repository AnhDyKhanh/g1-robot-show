import { Star } from "lucide-react";
import type { Review } from "@/types";
import type { Translation } from "@/translations";

interface TestimonialsSectionProps {
  t: Translation;
  reviews: Review[];
}

export function TestimonialsSection({ t, reviews }: TestimonialsSectionProps) {
  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase">
            {t.testBadge}
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight mt-1 text-neutral-900 dark:text-white">
            {t.testTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              id={`review-${rev.id}`}
              className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-200/60 dark:border-neutral-800/60 shadow-sm flex flex-col justify-between text-left"
            >
              <div className="space-y-4">
                <div className="flex gap-1 text-amber-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-500"
                    />
                  ))}
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 italic leading-relaxed">
                  {rev.comment}
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-neutral-100 dark:border-neutral-800">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover select-none border border-neutral-200/50 dark:border-neutral-700"
                />
                <div>
                  <p className="text-xs font-bold text-neutral-900 dark:text-white">
                    {rev.name}
                  </p>
                  <p className="text-[10px] text-neutral-500 dark:text-neutral-400">
                    {rev.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
