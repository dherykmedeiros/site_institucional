import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Decorative grids and blur background effects */}
      <div className={styles.background}>
        <div className={styles.grid}></div>
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>
      </div>

      <div className={`container ${styles.container}`}>
        {/* Left Side Content */}
        <div className={`${styles.content} animate-fade-in-up`}>
          <div className={styles.slogan}>
            <span className={styles.sloganDot}></span>
            <span>Qualidade na formação, sucesso na profissão</span>
          </div>

          <h1 className={styles.title}>
            <span className="gradient-text">Profissionalismo em</span>
            <br />
            <span className="gradient-accent-text">Treinamentos e Serviços</span>
          </h1>

          <p className={styles.subtitle}>
            A CENADT é referência no Nordeste em capacitação profissional de elite, 
            normas regulamentadoras (NRs) e assessoria técnica em engenharia de segurança 
            e combate a incêndios. Proteja sua empresa e impulsione sua carreira.
          </p>

          <div className={styles.buttonGroup}>
            <a href="#servicos" className="btn btn-primary">
              Conhecer Cursos e Serviços
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#cta" className="btn btn-secondary">
              Falar com Engenheiro
            </a>
          </div>
        </div>

        {/* Right Side Visual Panel (Livre de fotos genéricas de IA) */}
        <div className={`${styles.visual} animate-fade-in`}>
          <div className={styles.card}>
            <span className={styles.badgeCard}>CERTIFICAÇÃO NACIONAL</span>
            <h3 className={styles.cardTitle}>Centro Avançado de Formação & Assessoria</h3>
            
            <div className={styles.tagRow}>
              <span className={styles.tag}>NR-10 / 35 / 33</span>
              <span className={styles.tag}>Bombeiro Civil</span>
              <span className={styles.tag}>Projetos de Incêndio</span>
              <span className={styles.tag}>Laudos & AVCB</span>
            </div>

            <div className={styles.statsRow}>
              <div className={styles.statItem}>
                <span className={styles.statNum}>2016</span>
                <span className={styles.statLabel}>Fundação</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>5k+</span>
                <span className={styles.statLabel}>Certificados</span>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-blue)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span>Homologado de acordo com as normas vigentes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
