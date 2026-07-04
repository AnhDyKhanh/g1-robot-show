import { TRANSLATIONS } from "@/translations";
import { Configuration, CustomerDetails } from "@/types/types";
import {
  ArrowRight,
  Check,
  PackageCheck,
  ShieldCheck,
  ShoppingBag,
  Truck,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";

interface ConfiguratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: "en" | "vi";
}

const DEFAULT_CONFIG: Configuration = {
  model: "standard",
  handsUpgrade: false,
  spareBattery: false,
  protectiveCase: false,
  supportPlan: "standard",
};

const DEFAULT_CUSTOMER: CustomerDetails = {
  name: "",
  email: "",
  company: "",
  country: "United States",
  useCase: "Research & Education",
};

export default function ConfiguratorModal({
  isOpen,
  onClose,
  lang = "vi",
}: ConfiguratorModalProps) {
  const t = TRANSLATIONS[lang];
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [config, setConfig] = useState<Configuration>(DEFAULT_CONFIG);
  const [customer, setCustomer] = useState<CustomerDetails>(DEFAULT_CUSTOMER);

  // Submission & Loading States
  const [isSubmitting, setIsSubmitting] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [submitResult, setSubmitResult] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Price Calculations
  const modelPrice = config.model === "standard" ? 16000 : 22000;
  const handsPrice = config.handsUpgrade ? 3500 : 0;
  const batteryPrice = config.spareBattery ? 1200 : 0;
  const casePrice = config.protectiveCase ? 850 : 0;
  const supportPrice = config.supportPlan === "premium" ? 2500 : 0;

  const subtotal =
    modelPrice + handsPrice + batteryPrice + casePrice + supportPrice;
  const shippingEst = 450;
  const total = subtotal + shippingEst;

  const handleReset = () => {
    setConfig(DEFAULT_CONFIG);
    setCustomer(DEFAULT_CUSTOMER);
    setStep(1);
    setSubmitResult(null);
    setError(null);
  };

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customer.name || !customer.email) {
      setError(t.configModalRequiredError);
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/preorder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          config: {
            ...config,
            subtotal,
            total,
            modelPrice,
            handsPrice,
            batteryPrice,
            casePrice,
            supportPrice,
          },
          customer,
        }),
      });

      if (!response.ok) {
        throw new Error(
          lang === "vi"
            ? "Không thể truyền dữ liệu đặt trước lên máy chủ."
            : "Unable to transmit reservation parameters to server.",
        );
      }

      const data = await response.json();
      if (data.success) {
        setSubmitResult(data.order);
        setStep(3);
      } else {
        throw new Error(
          data.error ||
            (lang === "vi"
              ? "Máy chủ đã từ chối đặt trước."
              : "Server declined pre-order reservation."),
        );
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(
        err.message ||
          (lang === "vi"
            ? "Đã xảy ra lỗi không mong muốn khi gửi đơn hàng."
            : "An unexpected pre-order submission issue occurred."),
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            id="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-950/80 z-50 backdrop-blur-sm"
          />

          {/* Modal Centered Wrapper */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              id="configurator-modal"
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative bg-white dark:bg-neutral-900 rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-neutral-200 dark:border-neutral-800 my-8"
            >
              {/* Left Form Area (Steps 1 & 2) */}
              <div className="flex-1 p-6 md:p-8 overflow-y-auto max-h-[85vh] md:max-h-[750px]">
                {/* Header Row */}
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
                      {t.configModalPreorder}
                    </span>
                    <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white tracking-tight mt-0.5">
                      {t.configModalTitle}
                    </h2>
                  </div>
                  {step < 3 && (
                    <button
                      id="close-config-btn"
                      onClick={onClose}
                      className="p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>

                {/* Progress Indicators */}
                {step < 3 && (
                  <div className="flex items-center gap-3 mb-6 bg-neutral-50 dark:bg-neutral-950 p-2.5 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50">
                    <button
                      onClick={() => setStep(1)}
                      className={`flex-1 text-xs font-bold py-2 px-3 rounded-lg text-center transition-all ${
                        step === 1
                          ? "bg-neutral-900 dark:bg-blue-600 text-white"
                          : "text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-300"
                      }`}
                    >
                      {t.configModalStep1}
                    </button>
                    <div className="text-neutral-300 dark:text-neutral-800">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                    <button
                      onClick={() => {
                        if (step === 1) setStep(2);
                      }}
                      className={`flex-1 text-xs font-bold py-2 px-3 rounded-lg text-center transition-all ${
                        step === 2
                          ? "bg-neutral-900 dark:bg-blue-600 text-white"
                          : "text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-300"
                      }`}
                    >
                      {t.configModalStep2}
                    </button>
                  </div>
                )}

                {/* Step 1: Configuration Form */}
                {step === 1 && (
                  <div className="space-y-6">
                    {/* Model Selector */}
                    <div>
                      <label className="block text-sm font-bold text-neutral-800 dark:text-neutral-300 mb-2.5">
                        {t.configModalPlatform}
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() =>
                            setConfig((prev) => ({
                              ...prev,
                              model: "standard",
                            }))
                          }
                          className={`p-4 rounded-2xl border text-left transition-all relative ${
                            config.model === "standard"
                              ? "border-blue-600 dark:border-blue-500 bg-blue-50/40 dark:bg-blue-950/20 ring-1 ring-blue-600"
                              : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-400"
                          }`}
                        >
                          {config.model === "standard" && (
                            <span className="absolute top-3 right-3 bg-blue-600 text-white rounded-full p-0.5">
                              <Check className="w-3.5 h-3.5" />
                            </span>
                          )}
                          <p className="font-extrabold text-neutral-900 dark:text-white text-base">
                            {t.configModalStandardTitle}
                          </p>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                            {t.configModalStandardDesc}
                          </p>
                          <p className="text-lg font-black text-neutral-900 dark:text-white mt-3">
                            $16,000 USD
                          </p>
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            setConfig((prev) => ({
                              ...prev,
                              model: "developer",
                            }))
                          }
                          className={`p-4 rounded-2xl border text-left transition-all relative ${
                            config.model === "developer"
                              ? "border-blue-600 dark:border-blue-500 bg-blue-50/40 dark:bg-blue-950/20 ring-1 ring-blue-600"
                              : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-400"
                          }`}
                        >
                          {config.model === "developer" && (
                            <span className="absolute top-3 right-3 bg-blue-600 text-white rounded-full p-0.5">
                              <Check className="w-3.5 h-3.5" />
                            </span>
                          )}
                          <div className="flex items-center gap-1.5">
                            <p className="font-extrabold text-neutral-900 dark:text-white text-base">
                              {t.configModalDeveloperTitle}
                            </p>
                            <span className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-[9px] font-bold rounded">
                              SDK
                            </span>
                          </div>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                            {t.configModalDeveloperDesc}
                          </p>
                          <p className="text-lg font-black text-neutral-900 dark:text-white mt-3">
                            $22,000 USD
                          </p>
                        </button>
                      </div>
                    </div>

                    {/* Upgrades */}
                    <div>
                      <label className="block text-sm font-bold text-neutral-800 dark:text-neutral-300 mb-2.5">
                        {t.configModalAddonsLabel}
                      </label>
                      <div className="space-y-2.5">
                        {/* Hands Upgrade */}
                        <div
                          onClick={() =>
                            setConfig((prev) => ({
                              ...prev,
                              handsUpgrade: !prev.handsUpgrade,
                            }))
                          }
                          className={`p-3.5 rounded-xl border flex justify-between items-center cursor-pointer transition-all ${
                            config.handsUpgrade
                              ? "border-neutral-900 dark:border-white bg-neutral-50 dark:bg-neutral-800/40"
                              : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-300"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={config.handsUpgrade}
                              onChange={() => {}} // handled by div click
                              className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400 rounded-md border-neutral-300 focus:ring-0"
                            />
                            <div>
                              <p className="text-sm font-bold text-neutral-900 dark:text-white">
                                {t.configModalHandsTitle}
                              </p>
                              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                {t.configModalHandsDesc}
                              </p>
                            </div>
                          </div>
                          <span className="text-sm font-extrabold text-neutral-900 dark:text-white">
                            +$3,500
                          </span>
                        </div>

                        {/* Battery Upgrade */}
                        <div
                          onClick={() =>
                            setConfig((prev) => ({
                              ...prev,
                              spareBattery: !prev.spareBattery,
                            }))
                          }
                          className={`p-3.5 rounded-xl border flex justify-between items-center cursor-pointer transition-all ${
                            config.spareBattery
                              ? "border-neutral-900 dark:border-white bg-neutral-50 dark:bg-neutral-800/40"
                              : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-300"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={config.spareBattery}
                              onChange={() => {}}
                              className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400 rounded-md border-neutral-300 focus:ring-0"
                            />
                            <div>
                              <p className="text-sm font-bold text-neutral-900 dark:text-white">
                                {t.configModalBatteryTitle}
                              </p>
                              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                {t.configModalBatteryDesc}
                              </p>
                            </div>
                          </div>
                          <span className="text-sm font-extrabold text-neutral-900 dark:text-white">
                            +$1,200
                          </span>
                        </div>

                        {/* Protective Case */}
                        <div
                          onClick={() =>
                            setConfig((prev) => ({
                              ...prev,
                              protectiveCase: !prev.protectiveCase,
                            }))
                          }
                          className={`p-3.5 rounded-xl border flex justify-between items-center cursor-pointer transition-all ${
                            config.protectiveCase
                              ? "border-neutral-900 dark:border-white bg-neutral-50 dark:bg-neutral-800/40"
                              : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-300"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={config.protectiveCase}
                              onChange={() => {}}
                              className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400 rounded-md border-neutral-300 focus:ring-0"
                            />
                            <div>
                              <p className="text-sm font-bold text-neutral-900 dark:text-white">
                                {t.configModalCaseTitle}
                              </p>
                              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                {t.configModalCaseDesc}
                              </p>
                            </div>
                          </div>
                          <span className="text-sm font-extrabold text-neutral-900 dark:text-white">
                            +$850
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Support Tier Selection */}
                    <div>
                      <label className="block text-sm font-bold text-neutral-800 dark:text-neutral-300 mb-2.5">
                        {t.configModalSupportTierLabel}
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div
                          onClick={() =>
                            setConfig((prev) => ({
                              ...prev,
                              supportPlan: "standard",
                            }))
                          }
                          className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all relative ${
                            config.supportPlan === "standard"
                              ? "border-blue-600 dark:border-blue-500 bg-blue-50/20 dark:bg-blue-950/20"
                              : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-300"
                          }`}
                        >
                          <p className="text-sm font-bold text-neutral-900 dark:text-white">
                            {t.configModalSupportStdTitle}
                          </p>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                            {t.configModalSupportStdDesc}
                          </p>
                          <p className="text-xs font-extrabold text-blue-600 dark:text-blue-400 mt-3">
                            {t.configModalSupportStdBadge}
                          </p>
                        </div>

                        <div
                          onClick={() =>
                            setConfig((prev) => ({
                              ...prev,
                              supportPlan: "premium",
                            }))
                          }
                          className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all relative ${
                            config.supportPlan === "premium"
                              ? "border-blue-600 dark:border-blue-500 bg-blue-50/20 dark:bg-blue-950/20"
                              : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-300"
                          }`}
                        >
                          <div className="flex items-center gap-1.5">
                            <p className="text-sm font-bold text-neutral-900 dark:text-white">
                              {t.configModalSupportPremTitle}
                            </p>
                            <ShieldCheck className="w-3.5 h-3.5 text-blue-500 fill-blue-500/10" />
                          </div>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                            {t.configModalSupportPremDesc}
                          </p>
                          <p className="text-xs font-extrabold text-neutral-900 dark:text-white mt-3">
                            {t.configModalSupportPremPrice}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Next Action */}
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="w-full py-3 px-5 bg-neutral-900 hover:bg-neutral-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
                      >
                        {t.configModalProceed}{" "}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Customer Information Form */}
                {step === 2 && (
                  <form onSubmit={handleOrderSubmit} className="space-y-5">
                    <div className="bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-900/50 p-4 rounded-2xl flex gap-3">
                      <ShoppingBag className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold text-blue-800 dark:text-blue-300 uppercase">
                          {t.configModalLogisticsMsgTitle}
                        </p>
                        <p className="text-xs text-blue-600 dark:text-blue-400 mt-0.5 leading-relaxed">
                          {t.configModalLogisticsMsgDesc}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-1.5">
                          {t.configModalFullName}{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={customer.name}
                          onChange={(e) =>
                            setCustomer((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                          placeholder="Dr. Elena Thorne"
                          className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none focus:border-blue-500 text-neutral-900 dark:text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-1.5">
                          {t.configModalEmail}{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={customer.email}
                          onChange={(e) =>
                            setCustomer((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                          placeholder="elena@techcorp.com"
                          className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none focus:border-blue-500 text-neutral-900 dark:text-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-1.5">
                          {t.configModalCompany}
                        </label>
                        <input
                          type="text"
                          value={customer.company}
                          onChange={(e) =>
                            setCustomer((prev) => ({
                              ...prev,
                              company: e.target.value,
                            }))
                          }
                          placeholder={t.configModalCompanyOpt}
                          className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none focus:border-blue-500 text-neutral-900 dark:text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-1.5">
                          {t.configModalCountry}
                        </label>
                        <select
                          value={customer.country}
                          onChange={(e) =>
                            setCustomer((prev) => ({
                              ...prev,
                              country: e.target.value,
                            }))
                          }
                          className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none focus:border-blue-500 text-neutral-900 dark:text-white"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>United Kingdom</option>
                          <option>Germany</option>
                          <option>Japan</option>
                          <option>Singapore</option>
                          <option>Australia</option>
                          <option>Vietnam</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider mb-1.5">
                        {t.configModalUseCase}
                      </label>
                      <select
                        value={customer.useCase}
                        onChange={(e) =>
                          setCustomer((prev) => ({
                            ...prev,
                            useCase: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none focus:border-blue-500 text-neutral-900 dark:text-white"
                      >
                        <option value="Research & Education">
                          {t.configModalUseCaseOption1}
                        </option>
                        <option value="Concierge & Corporate Hospitality">
                          {t.configModalUseCaseOption2}
                        </option>
                        <option value="Industrial Manufacturing & Logistics">
                          {t.configModalUseCaseOption3}
                        </option>
                        <option value="Household & Personal Assistance">
                          {t.configModalUseCaseOption4}
                        </option>
                        <option value="Software SDK Development">
                          {t.configModalUseCaseOption5}
                        </option>
                      </select>
                    </div>

                    {error && (
                      <p className="text-xs font-semibold text-red-500">
                        {error}
                      </p>
                    )}

                    <div className="flex gap-3 pt-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 py-3 px-4 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-800 dark:text-white rounded-xl font-bold text-sm transition-all"
                      >
                        {t.configModalBack}
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-2 py-3 px-5 bg-neutral-900 hover:bg-neutral-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                      >
                        {isSubmitting
                          ? t.configModalSubmittingBtn
                          : t.configModalSubmitBtn}{" "}
                        <Truck className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}

                {/* Step 3: Success Confirmation State */}
                {step === 3 && submitResult && (
                  <div className="space-y-6 text-center py-6">
                    <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-500 border border-green-500/30 flex items-center justify-center mx-auto mb-2">
                      <PackageCheck className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-neutral-900 dark:text-white tracking-tight">
                        {t.configModalSuccessTitle}
                      </h3>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 max-w-md mx-auto">
                        {t.configModalSuccessDesc}
                      </p>
                    </div>

                    <div className="bg-neutral-50 dark:bg-neutral-950 p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 text-left space-y-3.5 max-w-lg mx-auto">
                      <div className="flex justify-between items-center pb-2.5 border-b border-neutral-200 dark:border-neutral-800">
                        <span className="text-xs font-bold text-neutral-400 uppercase">
                          {t.configModalSuccessId}
                        </span>
                        <span className="text-sm font-mono font-bold text-blue-600 dark:text-blue-400">
                          {submitResult.orderId}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <p className="font-bold text-neutral-400 uppercase mb-0.5">
                            {t.configModalSuccessCustomer}
                          </p>
                          <p className="font-extrabold text-neutral-800 dark:text-neutral-200">
                            {submitResult.customer.name}
                          </p>
                          <p className="text-neutral-500 dark:text-neutral-400">
                            {submitResult.customer.email}
                          </p>
                        </div>
                        <div>
                          <p className="font-bold text-neutral-400 uppercase mb-0.5">
                            {t.configModalSuccessDeployment}
                          </p>
                          <p className="font-extrabold text-neutral-800 dark:text-neutral-200">
                            {submitResult.customer.country}
                          </p>
                          <p className="text-neutral-500 dark:text-neutral-400">
                            {submitResult.customer.useCase ===
                            "Research & Education"
                              ? t.configModalUseCaseOption1
                              : submitResult.customer.useCase ===
                                  "Concierge & Corporate Hospitality"
                                ? t.configModalUseCaseOption2
                                : submitResult.customer.useCase ===
                                    "Industrial Manufacturing & Logistics"
                                  ? t.configModalUseCaseOption3
                                  : submitResult.customer.useCase ===
                                      "Household & Personal Assistance"
                                    ? t.configModalUseCaseOption4
                                    : submitResult.customer.useCase ===
                                        "Software SDK Development"
                                      ? t.configModalUseCaseOption5
                                      : submitResult.customer.useCase}
                          </p>
                        </div>
                      </div>

                      <div className="pt-2.5 border-t border-neutral-200 dark:border-neutral-800">
                        <p className="text-xs font-bold text-neutral-400 uppercase mb-2">
                          {t.configModalSuccessHardware}
                        </p>
                        <div className="space-y-1.5 text-xs">
                          <div className="flex justify-between">
                            <span className="text-neutral-500 dark:text-neutral-400">
                              {submitResult.config.model === "developer"
                                ? t.configModalSuccessBaseDeveloper
                                : t.configModalSuccessBaseStandard}
                            </span>
                            <span className="font-bold text-neutral-800 dark:text-neutral-200">
                              ${submitResult.config.modelPrice.toLocaleString()}
                            </span>
                          </div>
                          {submitResult.config.handsUpgrade && (
                            <div className="flex justify-between">
                              <span className="text-neutral-500 dark:text-neutral-400">
                                {t.configModalSuccessTactileHands}
                              </span>
                              <span className="font-bold text-neutral-800 dark:text-neutral-200">
                                +$3,500
                              </span>
                            </div>
                          )}
                          {submitResult.config.spareBattery && (
                            <div className="flex justify-between">
                              <span className="text-neutral-500 dark:text-neutral-400">
                                {t.configModalSuccessSpareBattery}
                              </span>
                              <span className="font-bold text-neutral-800 dark:text-neutral-200">
                                +$1,200
                              </span>
                            </div>
                          )}
                          {submitResult.config.protectiveCase && (
                            <div className="flex justify-between">
                              <span className="text-neutral-500 dark:text-neutral-400">
                                {t.configModalSuccessFlightCase}
                              </span>
                              <span className="font-bold text-neutral-800 dark:text-neutral-200">
                                +$850
                              </span>
                            </div>
                          )}
                          {submitResult.config.supportPlan === "premium" && (
                            <div className="flex justify-between">
                              <span className="text-neutral-500 dark:text-neutral-400">
                                {t.configModalSuccessPremiumSupport}
                              </span>
                              <span className="font-bold text-neutral-800 dark:text-neutral-200">
                                +$2,500
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="pt-2.5 border-t border-neutral-200 dark:border-neutral-800 flex justify-between items-center text-sm">
                        <span className="font-extrabold text-neutral-800 dark:text-white">
                          {t.configModalSuccessTotalDue}
                        </span>
                        <span className="font-black text-blue-600 dark:text-blue-400 text-base">
                          ${submitResult.config.total.toLocaleString()} USD
                        </span>
                      </div>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row gap-2.5 justify-center">
                      <button
                        onClick={handleReset}
                        className="py-2.5 px-5 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-800 dark:text-white text-xs font-bold rounded-xl transition-all"
                      >
                        {t.configModalSuccessConfigureAnother}
                      </button>
                      <button
                        onClick={onClose}
                        className="py-2.5 px-5 bg-neutral-900 hover:bg-neutral-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-all"
                      >
                        {t.configModalSuccessReturn}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Summary Panel (Steps 1 & 2 only) */}
              {step < 3 && (
                <div className="w-full md:w-80 bg-neutral-50 dark:bg-neutral-950 border-t md:border-t-0 md:border-l border-neutral-200 dark:border-neutral-800 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-wider text-neutral-400 mb-4 flex items-center gap-1">
                      {t.configModalLiveEstimate}
                    </h3>

                    <div className="space-y-4">
                      {/* Model */}
                      <div>
                        <p className="text-[10px] text-neutral-400 font-bold uppercase">
                          {t.configModalLivePlatform}
                        </p>
                        <div className="flex justify-between items-center text-xs mt-0.5">
                          <span className="font-semibold text-neutral-700 dark:text-neutral-300">
                            {config.model === "standard"
                              ? t.configModalStandardTitle
                              : t.configModalDeveloperTitle}
                          </span>
                          <span className="font-mono text-neutral-500 dark:text-neutral-400">
                            ${modelPrice.toLocaleString()}
                          </span>
                        </div>
                      </div>

                      {/* Addons List */}
                      {(config.handsUpgrade ||
                        config.spareBattery ||
                        config.protectiveCase ||
                        config.supportPlan === "premium") && (
                        <div>
                          <p className="text-[10px] text-neutral-400 font-bold uppercase">
                            {t.configModalLiveUpgrades}
                          </p>
                          <div className="space-y-1.5 text-xs mt-1">
                            {config.handsUpgrade && (
                              <div className="flex justify-between text-neutral-700 dark:text-neutral-300">
                                <span>{t.configModalHandsTitle}</span>
                                <span className="font-mono text-neutral-500 dark:text-neutral-400">
                                  +$3,500
                                </span>
                              </div>
                            )}
                            {config.spareBattery && (
                              <div className="flex justify-between text-neutral-700 dark:text-neutral-300">
                                <span>{t.configModalBatteryTitle}</span>
                                <span className="font-mono text-neutral-500 dark:text-neutral-400">
                                  +$1,200
                                </span>
                              </div>
                            )}
                            {config.protectiveCase && (
                              <div className="flex justify-between text-neutral-700 dark:text-neutral-300">
                                <span>{t.configModalCaseTitle}</span>
                                <span className="font-mono text-neutral-500 dark:text-neutral-400">
                                  +$850
                                </span>
                              </div>
                            )}
                            {config.supportPlan === "premium" && (
                              <div className="flex justify-between text-neutral-700 dark:text-neutral-300">
                                <span>{t.configModalSupportPremTitle}</span>
                                <span className="font-mono text-neutral-500 dark:text-neutral-400">
                                  +$2,500
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Math Summary */}
                      <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 space-y-2 text-xs">
                        <div className="flex justify-between text-neutral-500">
                          <span>{t.configModalLiveSubtotal}</span>
                          <span className="font-mono">
                            ${subtotal.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between text-neutral-500">
                          <span>{t.configModalLiveLogistics}</span>
                          <span className="font-mono">
                            ${shippingEst.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Large Total display */}
                  <div className="pt-6 mt-6 border-t border-neutral-200 dark:border-neutral-800">
                    <p className="text-[10px] text-neutral-400 font-bold uppercase">
                      {t.configModalLiveCost}
                    </p>
                    <p className="text-3xl font-black text-neutral-900 dark:text-white tracking-tight mt-0.5">
                      ${total.toLocaleString()}
                      <span className="text-xs font-normal text-neutral-400 ml-1">
                        USD
                      </span>
                    </p>
                    <p className="text-[10px] text-neutral-400 mt-2 leading-tight">
                      {t.configModalLiveDisclaimer}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
