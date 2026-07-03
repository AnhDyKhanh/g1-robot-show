import type { Translation } from "@/translations";

interface Application {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
}

interface ApplicationsSectionProps {
  t: Translation;
  applications: Application[];
  onConfigOpen: () => void;
  onChatOpen: () => void;
}

export function ApplicationsSection({
  t,
  applications,
  onConfigOpen,
  onChatOpen,
}: ApplicationsSectionProps) {
  return (
    <section
      id="applications"
      className="py-20 bg-neutral-50 dark:bg-neutral-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase">
            {t.appsBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1.5 text-neutral-900 dark:text-white">
            {t.appsTitle}
          </h2>
          <p className="text-base text-neutral-500 dark:text-neutral-400 mt-3 font-normal">
            {t.appsDesc}
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {applications.map((app, idx) => (
            <div
              key={app.id}
              id={`app-item-${app.id}`}
              className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative group overflow-hidden rounded-3xl shadow-xl border border-neutral-200 dark:border-neutral-800">
                  <img
                    src={app.image}
                    alt={app.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-[350px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-103 select-none"
                  />
                </div>
              </div>

              <div className="w-full lg:w-1/2 text-left space-y-4">
                <span className="px-2.5 py-1 bg-neutral-200 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 font-bold text-[10px] rounded uppercase tracking-wider">
                  {app.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white tracking-tight">
                  {app.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed font-normal">
                  {app.description} {t.appsSubDesc}
                </p>
                <div className="pt-2 flex gap-3">
                  <button
                    onClick={onConfigOpen}
                    className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-900 font-bold text-xs uppercase tracking-wider rounded-lg transition-all font-sans cursor-pointer"
                  >
                    {t.btnModelSelection}
                  </button>
                  <button
                    onClick={onChatOpen}
                    className="px-4 py-2 border border-neutral-200 hover:border-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700 font-bold text-xs uppercase tracking-wider rounded-lg text-neutral-600 dark:text-neutral-300 transition-all font-sans cursor-pointer"
                  >
                    {t.btnTechInquiry}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
