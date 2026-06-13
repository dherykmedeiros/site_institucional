"use client";

import { useState } from "react";
import styles from "./Services.module.css";
import { defaultContent, ServiceItem } from "@/lib/defaultContent";

interface ServicesProps {
  services?: typeof defaultContent.services;
}

function getWhatsAppLink(title: string) {
  const message = `Olá! Gostaria de receber informações sobre: ${title}.`;
  return `https://api.whatsapp.com/send?phone=5585999000534&text=${encodeURIComponent(message)}`;
}

export default function Services({ services }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<"cursos" | "servicos">("cursos");

  const overline = services?.overline ?? defaultContent.services.overline;
  const title = services?.title ?? defaultContent.services.title;
  const subtitle = services?.subtitle ?? defaultContent.services.subtitle;
  const coursesList = services?.coursesList ?? defaultContent.services.coursesList;
  const servicesList = services?.servicesList ?? defaultContent.services.servicesList;

  const items = activeTab === "cursos" ? coursesList : servicesList;

  return (
    <section id="servicos" className={styles.services}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.overline}>{overline}</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        {/* Tabs */}
        <div className={styles.tabsContainer}>
          <button
            className={`${styles.tabBtn} ${activeTab === "cursos" ? styles.tabBtnActive : ""}`}
            onClick={() => setActiveTab("cursos")}
          >
            Cursos e Treinamentos
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === "servicos" ? styles.tabBtnActive : ""}`}
            onClick={() => setActiveTab("servicos")}
          >
            Serviços &amp; Assessoria
          </button>
        </div>

        {/* Cards */}
        <div className={styles.grid} key={activeTab}>
          {items.map((item) => (
            <div key={item.id} className={styles.card}>
              <span className={styles.cardCategory}>{item.category}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
              <a
                href={getWhatsAppLink(item.title)}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardLink}
              >
                {item.linkText}
                <span className={styles.arrow}>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
