import { TRANSLATIONS } from "@/translations";
import { ChatMessage } from "@/types/types";
import { Bot, RefreshCw, Send, User, X, Zap } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";

interface AiAssistantDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: "en" | "vi";
}

export default function AiAssistantDrawer({
  isOpen,
  onClose,
  lang = "vi",
}: AiAssistantDrawerProps) {
  const t = TRANSLATIONS[lang];

  const presetPrompts =
    lang === "en"
      ? [
          "What are the specifications of G1?",
          "What is the difference between Standard and Developer edition?",
          "Tell me about the tactile hands upgrade.",
          "How does the hot-swap battery system work?",
        ]
      : [
          "Thông số kỹ thuật của G1 là gì?",
          "Sự khác biệt giữa bản Standard và Developer?",
          "Thông tin về gói nâng cấp bàn tay khéo léo?",
          "Hệ thống pin thay nóng hoạt động như thế nào?",
        ];

  const welcomeTimestamp = useMemo(
    () =>
      new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    [],
  );

  const welcomeMessage = useMemo<ChatMessage>(
    () => ({
      id: "welcome",
      role: "assistant",
      text: t.chatWelcomeMsg,
      timestamp: welcomeTimestamp,
    }),
    [t.chatWelcomeMsg, welcomeTimestamp],
  );

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const displayMessages = [welcomeMessage, ...messages];

  // const [messages, setMessages] = useState<ChatMessage[]>(() => [
  //   {
  //     id: "welcome",
  //     role: "assistant",
  //     text: t.chatWelcomeMsg,
  //     timestamp: new Date().toLocaleTimeString([], {
  //       hour: "2-digit",
  //       minute: "2-digit",
  //     }),
  //   },
  // ]);

  // Update welcome message if language changes
  // useEffect(() => {
  //   setMessages((prev) => {
  //     if (prev.length === 1 && prev[0].id === "welcome") {
  //       return [
  //         {
  //           id: "welcome",
  //           role: "assistant",
  //           text: t.chatWelcomeMsg,
  //           timestamp: prev[0].timestamp,
  //         },
  //       ];
  //     }
  //     return prev;
  //   });
  // }, [lang, t.chatWelcomeMsg]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll on new messages
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      id: "msg-" + Date.now(),
      role: "user",
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      // Package conversation history (last 5 messages) for contextual conversation
      const conversationHistory = messages.slice(-5).map((m) => ({
        role: m.role,
        text: m.text,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: textToSend,
          history: conversationHistory,
        }),
      });

      if (!res.ok) {
        throw new Error(t.chatErrorContact);
      }

      const data = await res.json();

      const assistantMsg: ChatMessage = {
        id: "reply-" + Date.now(),
        role: "assistant",
        text:
          data.text ||
          (lang === "en"
            ? "Could not parse response from advisor."
            : "Không thể phân tích phản hồi từ cố vấn."),
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, assistantMsg]);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(
        err.message ||
          (lang === "en"
            ? "An unexpected error occurred during transmission."
            : "Đã xảy ra lỗi không mong đợi trong quá trình truyền tải."),
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            id="assistant-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-50 transition-opacity"
          />

          {/* Drawer Container */}
          <motion.div
            id="assistant-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white dark:bg-neutral-900 shadow-2xl z-50 flex flex-col border-l border-neutral-200 dark:border-neutral-800"
          >
            {/* Header */}
            <div className="p-4 border-b border-neutral-200 dark:border-neutral-800 flex justify-between items-center bg-neutral-50 dark:bg-neutral-950">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 dark:text-white">
                    {t.chatHeaderTitle}
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                      {t.chatActiveBadge}
                    </span>
                  </div>
                </div>
              </div>
              <button
                id="close-assistant-btn"
                onClick={onClose}
                className="p-2 text-neutral-500 hover:text-neutral-800 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div
              id="chat-messages-area"
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50 dark:bg-neutral-950/40"
            >
              {displayMessages.map((msg) => (
                <div
                  key={msg.id}
                  id={`chat-bubble-${msg.id}`}
                  className={`flex gap-3 max-w-[85%] ${
                    msg.role === "user" ? "ml-auto flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border ${
                      msg.role === "user"
                        ? "bg-neutral-900 border-neutral-800 text-white"
                        : "bg-white border-neutral-200 text-blue-600 dark:bg-neutral-800 dark:border-neutral-700 dark:text-blue-400"
                    }`}
                  >
                    {msg.role === "user" ? (
                      <User className="w-4 h-4" />
                    ) : (
                      <Bot className="w-4 h-4" />
                    )}
                  </div>
                  <div className="space-y-1">
                    <div
                      className={`p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                        msg.role === "user"
                          ? "bg-blue-600 text-white rounded-tr-none"
                          : "bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200/60 dark:border-neutral-700/60 rounded-tl-none shadow-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                    <p
                      className={`text-[10px] text-neutral-400 px-1 ${msg.role === "user" ? "text-right" : ""}`}
                    >
                      {msg.timestamp}
                    </p>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div
                  id="ai-loading-indicator"
                  className="flex gap-3 max-w-[85%]"
                >
                  <div className="w-8 h-8 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white dark:bg-neutral-800 border border-neutral-200/60 dark:border-neutral-700/60 p-3 rounded-2xl rounded-tl-none shadow-sm">
                    <div className="flex gap-1.5 items-center justify-center py-1">
                      <span
                        className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <span
                        className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <span
                        className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {error && (
                <div
                  id="chat-error-card"
                  className="p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 rounded-xl text-xs text-red-600 dark:text-red-400 flex flex-col gap-2"
                >
                  <p>{error}</p>
                  <button
                    onClick={() => {
                      const lastUserMsg = [...messages]
                        .reverse()
                        .find((m) => m.role === "user");
                      if (lastUserMsg) handleSend(lastUserMsg.text);
                    }}
                    className="self-start flex items-center gap-1 font-bold text-red-700 dark:text-red-300 hover:underline"
                  >
                    <RefreshCw className="w-3.5 h-3.5" /> {t.chatErrorRetry}
                  </button>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Quick-start topics */}
            {messages.length === 1 && (
              <div
                id="quick-start-prompts"
                className="p-4 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950/60"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-blue-500 fill-blue-500" />{" "}
                  {t.chatSuggestedLabel}
                </p>
                <div className="space-y-2">
                  {presetPrompts.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(prompt)}
                      className="w-full text-left p-2 text-xs bg-white hover:bg-blue-50 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:border-blue-400 dark:hover:border-blue-500 rounded-lg transition-all shadow-sm font-medium"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Bar */}
            <div className="p-4 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(input);
                }}
                className="flex gap-2"
              >
                <input
                  id="chat-input-field"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t.chatPlaceholder}
                  disabled={isLoading}
                  className="flex-1 px-4 py-3 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all disabled:opacity-50"
                />
                <button
                  id="chat-submit-btn"
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="px-4 bg-neutral-900 dark:bg-blue-600 hover:bg-neutral-800 dark:hover:bg-blue-500 text-white rounded-xl flex items-center justify-center transition-all disabled:opacity-40"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
