"use client";

import React, { useState } from "react";
import styles from "./Services.module.css";

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  tag: string;
  linkText: string;
}

export default function Services() {
  const [activeTab, setActiveTab] = useState<"cursos" | "servicos">("cursos");

  const coursesList: ServiceItem[] = [
    {
      id: "nr10",
      title: "NR-10 - Segurança em Instalações Elétricas",
      desc: "Curso completo abordando os requisitos mínimos para garantir a segurança dos trabalhadores que interagem direta ou indiretamente com eletricidade.",
      tag: "40 horas",
      linkText: "Fazer Inscrição",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    },
    {
      id: "nr35",
      title: "NR-35 - Trabalho em Altura",
      desc: "Capacitação essencial sobre planejamento, organização e execução de atividades acima de 2 metros de altura, com ênfase na prevenção de quedas.",
      tag: "08 horas",
      linkText: "Fazer Inscrição",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      )
    },
    {
      id: "nr33",
      title: "NR-33 - Espaço Confinado",
      desc: "Instrução para trabalhadores autorizados, vigias e supervisores de entrada sobre segurança no reconhecimento e controle de riscos em espaços confinados.",
      tag: "16 horas",
      linkText: "Fazer Inscrição",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8" />
        </svg>
      )
    },
    {
      id: "bombeiro",
      title: "Formação de Bombeiro Civil",
      desc: "Capacitação completa para atuar na prevenção e combate a incêndios, prestação de primeiros socorros e avaliação de riscos em edificações comerciais ou industriais.",
      tag: "Profissional",
      linkText: "Ver Turmas",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      id: "brigada",
      title: "Brigada de Incêndio",
      desc: "Formação de equipe voluntária de colaboradores treinados para atuar na prevenção, controle de pânico, primeiros socorros e abandono de área em emergências.",
      tag: "CIPA / Norma CE",
      linkText: "Agendar In-Company",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
      )
    },
    {
      id: "operacionais",
      title: "Treinamentos Operacionais e Gestão",
      desc: "Ampla linha de cursos sob medida: Operador de Empilhadeira, Liderança Operacional, Capacitação de Guarda Municipal, Subinspetor e Curso de Instrutores.",
      tag: "Diversos",
      linkText: "Consultar Catálogo",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      )
    }
  ];

  const servicesList: ServiceItem[] = [
    {
      id: "projetos",
      title: "Projetos de Incêndio e Emergência",
      desc: "Elaboração de projetos de sinalização, segurança contra incêndio e pânico, e formatação de planos de evacuação detalhados para certificações.",
      tag: "Engenharia",
      linkText: "Solicitar Orçamento",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      )
    },
    {
      id: "assessoria",
      title: "Gestão Operacional e Planos de Manutenção",
      desc: "Consultoria técnica especializada para estruturar planos de manutenção (preditiva, preventiva e corretiva) e assessoria na gestão interna de segurança.",
      tag: "Consultoria",
      linkText: "Falar com Consultor",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <polyline points="17 11 19 13 23 9" />
        </svg>
      )
    },
    {
      id: "maodeobra",
      title: "Terceirização de Mão de Obra Especializada",
      desc: "Alocação e gestão de profissionais qualificados de segurança e facilidades, tais como bombeiros civis, porteiros, zeladores e pessoal de apoio operacional.",
      tag: "Operacional",
      linkText: "Contratar Equipe",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      id: "palestras",
      title: "Palestras Corporativas e SIPAT",
      desc: "Apresentações técnicas e dinâmicas motivacionais sobre segurança no trabalho, combate a incêndio e saúde para eventos corporativos e SIPAT.",
      tag: "Eventos",
      linkText: "Reservar Palestra",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      )
    },
    {
      id: "incompany",
      title: "Treinamentos Personalizados In-Company",
      desc: "Programas de qualificação desenhados para atender diretamente às particularidades físicas, de riscos e de processos industriais da sua empresa.",
      tag: "Sob Demanda",
      linkText: "Customizar Treinamento",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    }
  ];

  const getWhatsAppLink = (title: string) => {
    const message = `Olá! Gostaria de receber informações e orçamentos sobre: ${title}.`;
    return `https://api.whatsapp.com/send?phone=5585999000534&text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="servicos" className={styles.services}>
      <div className="container">
        {/* Header Block */}
        <div className={styles.header}>
          <span className="badge badge-blue">NOSSO PORTFÓLIO</span>
          <h2 className={styles.title}>
            <span className="gradient-text">O que a CENADT</span>{" "}
            <span className="gradient-blue-text">Oferece para Você</span>
          </h2>
          <p className={styles.subtitle}>
            Explore nossa variedade de cursos técnicos certificados e serviços de engenharia contra incêndio. 
            Soluções completas para capacitar pessoas e proteger estruturas.
          </p>
        </div>

        {/* Tab Controls */}
        <div className={styles.tabsContainer}>
          <button
            className={`${styles.tabBtn} ${activeTab === "cursos" ? styles.tabBtnActive : ""}`}
            onClick={() => setActiveTab("cursos")}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
            </svg>
            Cursos e Treinamentos
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === "servicos" ? styles.tabBtnActiveBlue : ""}`}
            onClick={() => setActiveTab("servicos")}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            Serviços & Assessoria
          </button>
        </div>

        {/* Dynamic Grid Rendering */}
        {activeTab === "cursos" ? (
          <div key="cursos" className={styles.grid}>
            {coursesList.map((item) => (
              <div key={item.id} className={`${styles.card} ${styles.cardOrange}`}>
                <div className={`${styles.iconWrapper} ${styles.iconOrange}`}>{item.icon}</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.duration}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {item.tag}
                  </span>
                  <a
                    href={getWhatsAppLink(item.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.cardLink} ${styles.linkOrange}`}
                  >
                    {item.linkText}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div key="servicos" className={styles.grid}>
            {servicesList.map((item) => (
              <div key={item.id} className={`${styles.card} ${styles.cardBlue}`}>
                <div className={`${styles.iconWrapper} ${styles.iconBlue}`}>{item.icon}</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.duration}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                      <line x1="7" y1="7" x2="7.01" y2="7" />
                    </svg>
                    {item.tag}
                  </span>
                  <a
                    href={getWhatsAppLink(item.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.cardLink} ${styles.linkBlue}`}
                  >
                    {item.linkText}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
