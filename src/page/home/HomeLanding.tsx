import { useState } from "react";
import { GALLERY } from "@/data";
import {
  TRANSLATIONS,
  getLocalizedFeatures,
  getLocalizedApplications,
  getLocalizedSpecs,
  getLocalizedComparisons,
  getLocalizedReviews,
  getLocalizedFaqs,
} from "@/translations";
import ConfiguratorModal from "@/components/ConfiguratorModal";
import AiAssistantDrawer from "@/components/AiAssistantDrawer";
import Lightbox from "@/components/Lightbox";
import { MainLayout } from "@/layout/MainLayout";
import { useTheme } from "@/hooks/useTheme";
import { useScrollSpy, SECTION_IDS } from "@/hooks/useScrollSpy";
import { useNewsletter } from "@/hooks/useNewsletter";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { ApplicationsSection } from "./components/ApplicationsSection";
import { ConfiguratorBanner } from "./components/ConfiguratorBanner";
import { SpecificationsSection } from "./components/SpecificationsSection";
import { GallerySection } from "./components/GallerySection";
import { ComparisonSection } from "./components/ComparisonSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FaqSection } from "./components/FaqSection";
import { NewsletterSection } from "./components/NewsletterSection";

export function HomeLanding() {
  const [lang, setLang] = useState<"en" | "vi">("vi");
  const { isDarkMode, toggleTheme } = useTheme();
  const { activeSection, showScrollTop, scrollTo } = useScrollSpy(SECTION_IDS);
  const newsletter = useNewsletter(lang);

  const t = TRANSLATIONS[lang];

  const localizedFeatures = getLocalizedFeatures(lang);
  const localizedApplications = getLocalizedApplications(lang);
  const localizedSpecifications = getLocalizedSpecs(lang);
  const localizedComparisons = getLocalizedComparisons(lang);
  const localizedReviews = getLocalizedReviews(lang);
  const localizedFaqs = getLocalizedFaqs(lang);

  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<
    (typeof GALLERY)[number] | null
  >(null);

  const handlePrevImage = () => {
    if (!selectedImage) return;
    const currentIndex = GALLERY.findIndex(
      (img) => img.id === selectedImage.id,
    );
    const prevIndex = (currentIndex - 1 + GALLERY.length) % GALLERY.length;
    setSelectedImage(GALLERY[prevIndex]);
  };

  const handleNextImage = () => {
    if (!selectedImage) return;
    const currentIndex = GALLERY.findIndex(
      (img) => img.id === selectedImage.id,
    );
    const nextIndex = (currentIndex + 1) % GALLERY.length;
    setSelectedImage(GALLERY[nextIndex]);
  };

  return (
    <MainLayout
      t={t}
      lang={lang}
      onLangToggle={() => setLang(lang === "en" ? "vi" : "en")}
      isDarkMode={isDarkMode}
      onThemeToggle={toggleTheme}
      activeSection={activeSection}
      onNavClick={scrollTo}
      onConfigureClick={() => setIsConfigModalOpen(true)}
      onChatOpen={() => setIsChatOpen(true)}
      showScrollTop={showScrollTop}
      onScrollTop={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <HeroSection
        t={t}
        onConfigOpen={() => setIsConfigModalOpen(true)}
        onChatOpen={() => setIsChatOpen(true)}
      />
      <FeaturesSection
        t={t}
        features={localizedFeatures}
        onChatOpen={() => setIsChatOpen(true)}
      />
      <ApplicationsSection
        t={t}
        applications={localizedApplications}
        onConfigOpen={() => setIsConfigModalOpen(true)}
        onChatOpen={() => setIsChatOpen(true)}
      />
      <ConfiguratorBanner
        t={t}
        onConfigOpen={() => setIsConfigModalOpen(true)}
      />
      <SpecificationsSection
        t={t}
        specifications={localizedSpecifications}
      />
      <GallerySection t={t} onImageSelect={setSelectedImage} />
      <ComparisonSection t={t} comparisons={localizedComparisons} />
      <TestimonialsSection t={t} reviews={localizedReviews} />
      <FaqSection t={t} faqs={localizedFaqs} />
      <NewsletterSection t={t} {...newsletter} />

      <ConfiguratorModal
        isOpen={isConfigModalOpen}
        onClose={() => setIsConfigModalOpen(false)}
        lang={lang}
      />

      <AiAssistantDrawer
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        lang={lang}
      />

      <Lightbox
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />
    </MainLayout>
  );
}
