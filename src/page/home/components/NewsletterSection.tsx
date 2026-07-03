import { type FormEvent } from "react";
import { Mail, ArrowRight } from "lucide-react";
import type { Translation } from "@/translations";

interface NewsletterSectionProps {
  t: Translation;
  newsletterEmail: string;
  setNewsletterEmail: (email: string) => void;
  newsletterStatus: {
    type: "idle" | "loading" | "success" | "error";
    message: string;
  };
  handleNewsletterSubmit: (e: FormEvent) => void;
}

export function NewsletterSection({
  t,
  newsletterEmail,
  setNewsletterEmail,
  newsletterStatus,
  handleNewsletterSubmit,
}: NewsletterSectionProps) {
  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-900/30 transition-colors border-t border-neutral-100 dark:border-neutral-900">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <div className="w-12 h-12 bg-neutral-900 dark:bg-neutral-800 border border-neutral-800 dark:border-neutral-700 text-blue-500 rounded-2xl flex items-center justify-center mx-auto shadow-md">
          <Mail className="w-5 h-5 text-white dark:text-blue-400" />
        </div>

        <div>
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase block mb-1">
            {t.newsBadge}
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            {t.newsTitle}
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 max-w-md mx-auto leading-relaxed">
            {t.newsDesc}
          </p>
        </div>

        <form
          onSubmit={handleNewsletterSubmit}
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-2 pt-2"
        >
          <input
            id="newsletter-email-field"
            type="email"
            required
            value={newsletterEmail}
            onChange={(e) => setNewsletterEmail(e.target.value)}
            placeholder={t.newsPlaceholder}
            disabled={newsletterStatus.type === "loading"}
            className="flex-1 px-4 py-3 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all disabled:opacity-50 shadow-sm"
          />
          <button
            id="newsletter-submit-btn"
            type="submit"
            disabled={newsletterStatus.type === "loading"}
            className="px-5 py-3 bg-neutral-900 hover:bg-neutral-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 disabled:opacity-50"
          >
            {newsletterStatus.type === "loading"
              ? t.newsBtnSubscribing
              : t.newsBtnSubscribe}{" "}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {newsletterStatus.message && (
          <p
            className={`text-xs font-semibold ${
              newsletterStatus.type === "success"
                ? "text-green-600 dark:text-green-400"
                : "text-red-500"
            }`}
          >
            {newsletterStatus.message}
          </p>
        )}
      </div>
    </section>
  );
}
