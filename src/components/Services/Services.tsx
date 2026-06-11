"use client";

import { useState } from "react";
import styles from "./Services.module.css";

interface ServiceItem {
  id: string;
  category: string;
  title: string;
  desc: string;
  linkText: string;
}

const coursesList: ServiceItem[] = [
  {
    id: "nr10",
    category: "Norma Regulamentadora",
    title: "NR-10 — Segurança em Instalações Elétricas",
    desc: "Curso completo de 40 horas abordando os requisitos mínimos para garantir a segurança dos trabalhadores que interagem direta ou indiretamente com eletricidade.",
    linkText: "Fazer Inscrição",
  },
  {
    id: "nr35",
    category: "Norma Regulamentadora",
    title: "NR-35 — Trabalho em Altura",
    desc: "Capacitação essencial sobre planejamento, organização e execução de atividades acima de 2 metros, com ênfase na prevenção de quedas.",
    linkText: "Fazer Inscrição",
  },
  {
    id: "bombeiro",
    category: "Formação Profissional",
    title: "Bombeiro Civil",
    desc: "Capacitação completa para atuar na prevenção e combate a incêndios, prestação de primeiros socorros e avaliação de riscos em edificações.",
    linkText: "Ver Turmas",
  },
  {
    id: "brigada",
    category: "Segurança Corporativa",
    title: "Brigada de Incêndio",
    desc: "Formação de equipe voluntária treinada para prevenção, controle de pânico, primeiros socorros e abandono de área em situações de emergência.",
    linkText: "Agendar Treinamento",
  },
];

const servicesList: ServiceItem[] = [
  {
    id: "projetos",
    category: "Engenharia",
    title: "Projetos de Incêndio",
    desc: "Elaboração de projetos de sinalização, segurança contra incêndio e pânico, e planos de evacuação detalhados para certificação junto ao Corpo de Bombeiros.",
    linkText: "Solicitar Orçamento",
  },
  {
    id: "assessoria",
    category: "Consultoria",
    title: "Assessoria Técnica",
    desc: "Consultoria especializada para estruturar planos de manutenção, gestão de segurança interna e adequação às normas regulamentadoras vigentes.",
    linkText: "Falar com Consultor",
  },
  {
    id: "terceirizacao",
    category: "Operacional",
    title: "Terceirização de Pessoal",
    desc: "Alocação e gestão de profissionais qualificados — bombeiros civis, porteiros, zeladores e equipe de apoio operacional para sua empresa.",
    linkText: "Contratar Equipe",
  },
  {
    id: "incompany",
    category: "Sob Demanda",
    title: "Treinamentos In-Company",
    desc: "Programas de qualificação desenhados para as particularidades de riscos e processos da sua empresa, realizados nas suas próprias instalações.",
    linkText: "Customizar Programa",
  },
];

function getWhatsAppLink(title: string) {
  const message = `Olá! Gostaria de receber informações sobre: ${title}.`;
  return `https://api.whatsapp.com/send?phone=5585999000534&text=${encodeURIComponent(message)}`;
}

export default function Services() {
  const [activeTab, setActiveTab] = useState<"cursos" | "servicos">("cursos");

  const items = activeTab === "cursos" ? coursesList : servicesList;

  return (
    <section id="servicos" className={styles.services}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.overline}>Nosso Portfólio</span>
          <h2 className={styles.title}>Cursos e serviços que protegem vidas</h2>
          <p className={styles.subtitle}>
            Treinamentos técnicos certificados e serviços de engenharia contra
            incêndio. Soluções completas para capacitar pessoas e proteger
            estruturas.
          </p>
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
