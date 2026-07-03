import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '@/types';

interface AccordionProps {
  item: FAQItem;
  key?: string;
}

export default function Accordion({ item }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id={`faq-container-${item.id}`} className="border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <button
        id={`faq-btn-${item.id}`}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left text-neutral-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none group"
      >
        <span className="text-lg md:text-xl font-semibold tracking-tight">{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div id={`faq-answer-${item.id}`} className="pb-6 text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
