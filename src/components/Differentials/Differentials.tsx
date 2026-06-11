import React from "react";
import styles from "./Differentials.module.css";

export default function Differentials() {
  return (
    <section id="diferenciais" className={styles.differentials}>
      <div className="container">
        {/* Header Block */}
        <div className={styles.header}>
          <span className="badge">DIFERENCIAIS</span>
          <h2 className={styles.title}>
            <span className="gradient-text">Por que Escolher a</span>{" "}
            <span className="gradient-accent-text">CENADT?</span>
          </h2>
          <p className={styles.subtitle}>
            Unimos credibilidade, qualificação técnica e metodologia eficiente para entregar 
            a melhor experiência operacional para nossos alunos e parceiros corporativos.
          </p>
        </div>

        {/* Asymmetric Anti-IA Grid Row 1 */}
        <div className={styles.grid}>
          {/* Card 1: Corpo Docente (Larger) */}
          <div className={styles.card}>
            <div className={styles.glow}></div>
            <div className={styles.iconWrapper}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Corpo Docente Altamente Qualificado</h3>
            <p className={styles.cardDesc}>
              Nossa equipe é formada por especialistas, engenheiros de segurança renomados e veteranos das forças de segurança pública e salvamento militar (Corpo de Bombeiros). Isso garante que o aprendizado seja baseado em protocolos de segurança atualizados e experiência real de campo.
            </p>
          </div>

          {/* Card 2: Simulações (Smaller) */}
          <div className={`${styles.card} ${styles.cardBlue}`}>
            <div className={styles.glow}></div>
            <div className={styles.iconWrapper}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Treinamentos Práticos</h3>
            <p className={styles.cardDesc}>
              Acreditamos que a prática salva vidas. Nossos cursos incluem simulações realistas de combate a incêndio, resgate em altura e evacuação, preparando os alunos para lidar com situações reais com calma e eficácia.
            </p>
          </div>
        </div>

        {/* Asymmetric Anti-IA Grid Row 2 */}
        <div className={styles.gridRow2}>
          {/* Card 3: Custo Benefício (Smaller) */}
          <div className={`${styles.card} ${styles.cardBlue}`}>
            <div className={styles.glow}></div>
            <div className={styles.iconWrapper}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Relação Custo-Benefício</h3>
            <p className={styles.cardDesc}>
              Oferecemos o mais alto padrão de treinamento do mercado com preços competitivos e condições flexíveis, viabilizando a adequação técnica tanto para profissionais autônomos quanto para pequenas e grandes corporações.
            </p>
          </div>

          {/* Card 4: In-Company (Larger) */}
          <div className={styles.card}>
            <div className={styles.glow}></div>
            <div className={styles.iconWrapper}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Treinamentos Customizados In-Company</h3>
            <p className={styles.cardDesc}>
              Mobilizamos nossa infraestrutura de ensino e instrutores diretamente para as instalações da sua empresa. Formatamos o conteúdo e os exercícios práticos para focar nos riscos específicos do seu setor industrial ou comercial, otimizando o tempo da sua equipe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
