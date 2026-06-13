"use client";

import { useState } from "react";
import styles from "./Faq.module.css";
import { defaultContent } from "@/lib/defaultContent";

interface FaqProps {
  faq?: typeof defaultContent.faq;
}

export default function Faq({ faq }: FaqProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const overline = faq?.overline ?? defaultContent.faq.overline;
  const title = faq?.title ?? defaultContent.faq.title;
  const subtitle = faq?.subtitle ?? defaultContent.faq.subtitle;
  const faqData = faq?.faqData ?? defaultContent.faq.faqData;

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faq}>
      <div className="container">
        <div className={styles.layout}>
          {/* Left column — sticky header */}
          <div className={styles.headerCol}>
            <span className={styles.overline}>{overline}</span>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtitle}>
              {subtitle}
            </p>
          </div>

          {/* Right column — accordion */}
          <div className={styles.accordion}>
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`${styles.item} ${
                  activeIndex === index ? styles.itemActive : ""
                }`}
              >
                <button
                  className={styles.trigger}
                  onClick={() => handleToggle(index)}
                  aria-expanded={activeIndex === index}
                >
                  <span className={styles.triggerText}>{item.question}</span>
                  <span className={styles.indicator}>
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>

                <div className={styles.content}>
                  <div className={styles.contentText}>{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
