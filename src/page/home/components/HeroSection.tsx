import { motion } from "motion/react";
import { Sparkles, ArrowRight, Bot, ShieldCheck } from "lucide-react";
import type { Translation } from "@/translations";
import heroSectionImg from "@/assets/images/hero-section-img.jpg";

interface HeroSectionProps {
  t: Translation;
  onConfigOpen: () => void;
  onChatOpen: () => void;
}

export function HeroSection({ t, onConfigOpen, onChatOpen }: HeroSectionProps) {
  return (
    <section
      id="overview"
      className="relative min-h-[90vh] flex items-center justify-center py-20 px-4 bg-neutral-950 text-white overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/20 z-10" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-transparent to-neutral-950 z-10" />
        <img
          src={heroSectionImg}
          alt="Unitree G1 Cinematic humanoid posing pose"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-60 scale-105 select-none"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">
              {t.heroBadge}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none text-white max-w-2xl">
            {t.heroTitlePart1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              {t.heroTitlePart2}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 max-w-xl font-normal leading-relaxed">
            {t.heroDescription}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              id="hero-buy-btn"
              onClick={onConfigOpen}
              className="px-6 py-3.5 bg-white text-neutral-950 font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-neutral-100 transition-all shadow-md flex items-center gap-2"
            >
              {t.btnReserve} <ArrowRight className="w-4 h-4 text-neutral-900" />
            </button>
            <button
              id="hero-chat-btn"
              onClick={onChatOpen}
              className="px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2"
            >
              {t.btnChatAdvisor} <Bot className="w-4 h-4 text-blue-400" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white/5 dark:bg-neutral-900/40 backdrop-blur-md border border-white/10 dark:border-neutral-800/60 p-6 md:p-8 rounded-3xl shadow-2xl space-y-6 text-left"
          >
            <div className="pb-4 border-b border-white/10 flex justify-between items-center">
              <span className="font-extrabold uppercase tracking-widest text-[10px] text-neutral-400">
                {t.metricTitle}
              </span>
              <span className="px-2 py-0.5 bg-white/10 rounded font-mono text-[9px] text-neutral-300">
                {t.metricVersion}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              <div>
                <span className="text-[10px] text-neutral-400 font-bold uppercase block tracking-wider">
                  {t.metricHeight}
                </span>
                <span className="text-xl md:text-2xl font-black text-white mt-1 block">
                  1270 mm
                </span>
                <span className="text-[10px] text-neutral-500 block mt-0.5">
                  {t.metricHeightDesc}
                </span>
              </div>
              <div>
                <span className="text-[10px] text-neutral-400 font-bold uppercase block tracking-wider">
                  {t.metricSensing}
                </span>
                <span className="text-xl md:text-2xl font-black text-white mt-1 block">
                  3D LiDAR
                </span>
                <span className="text-[10px] text-neutral-500 block mt-0.5">
                  {t.metricSensingDesc}
                </span>
              </div>
              <div>
                <span className="text-[10px] text-neutral-400 font-bold uppercase block tracking-wider">
                  {t.metricWeight}
                </span>
                <span className="text-xl md:text-2xl font-black text-white mt-1 block">
                  35 kg
                </span>
                <span className="text-[10px] text-neutral-500 block mt-0.5">
                  {t.metricWeightDesc}
                </span>
              </div>
              <div>
                <span className="text-[10px] text-neutral-400 font-bold uppercase block tracking-wider">
                  {t.metricDof}
                </span>
                <span className="text-xl md:text-2xl font-black text-white mt-1 block">
                  43 D.O.F
                </span>
                <span className="text-[10px] text-neutral-500 block mt-0.5">
                  {t.metricDofDesc}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center gap-2.5 text-xs text-neutral-300">
              <ShieldCheck className="w-5 h-5 text-green-400" />
              <span>{t.metricCert}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
