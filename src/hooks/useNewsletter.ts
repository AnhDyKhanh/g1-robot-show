import { useState, type FormEvent } from "react";

type NewsletterStatus = {
  type: "idle" | "loading" | "success" | "error";
  message: string;
};

export function useNewsletter(lang: "en" | "vi") {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<NewsletterStatus>({
    type: "idle",
    message: "",
  });

  const handleNewsletterSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) {
      setNewsletterStatus({
        type: "error",
        message:
          lang === "en"
            ? "Please write a functional email address."
            : "Vui lòng nhập địa chỉ email hợp lệ.",
      });
      return;
    }

    setNewsletterStatus({
      type: "loading",
      message:
        lang === "en" ? "Syncing details..." : "Đang đồng bộ thông tin...",
    });

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      const data = await res.json();
      if (res.ok) {
        setNewsletterStatus({ type: "success", message: data.message });
        setNewsletterEmail("");
      } else {
        setNewsletterStatus({
          type: "error",
          message:
            data.error ||
            (lang === "en"
              ? "Subscription transmission failed."
              : "Gửi đăng ký bản tin thất bại."),
        });
      }
    } catch {
      setNewsletterStatus({
        type: "error",
        message:
          lang === "en"
            ? "Connection to newsletter dispatch lost."
            : "Mất kết nối với dịch vụ đăng ký bản tin.",
      });
    }
  };

  return {
    newsletterEmail,
    setNewsletterEmail,
    newsletterStatus,
    handleNewsletterSubmit,
  };
}
