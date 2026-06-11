import React from "react";
import styles from "./Process.module.css";

export default function Process() {
  return (
    <section id="processo" className={styles.process}>
      <div className="container">
        {/* Header Block */}
        <div className={styles.header}>
          <span className="badge badge-blue">PROCESSO</span>
          <h2 className={styles.title}>
            <span className="gradient-text">Como Funciona Nosso</span>{" "}
            <span className="gradient-blue-text">Atendimento</span>
          </h2>
          <p className={styles.subtitle}>
            Da primeira conversa à entrega da certificação, estruturamos um fluxo ágil 
            e descomplicado focado na sua conformidade legal.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className={styles.timeline}>
          {/* Step 1 */}
          <div className={styles.step}>
            <div className={styles.numberBox}>
              <span className={styles.numberText}>01</span>
            </div>
            <div className={styles.info}>
              <h3 className={styles.stepTitle}>Diagnóstico</h3>
              <p className={styles.stepDesc}>
                Analisamos as necessidades da sua empresa ou carreira para indicar exatamente os cursos ou projetos necessários.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className={styles.step}>
            <div className={styles.numberBox}>
              <span className={styles.numberText}>02</span>
            </div>
            <div className={styles.info}>
              <h3 className={styles.stepTitle}>Planejamento</h3>
              <p className={styles.stepDesc}>
                Desenvolvemos propostas customizadas de conteúdo, cronogramas de aulas ou escopo de projeto de incêndio.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className={`${styles.step} styles.stepBlue`}>
            <div className={styles.numberBox}>
              <span className={styles.numberText}>03</span>
            </div>
            <div className={styles.info}>
              <h3 className={styles.stepTitle}>Execução</h3>
              <p className={styles.stepDesc}>
                Aulas dinâmicas (teoria/prática) com nossos especialistas ou execução rigorosa dos projetos de segurança.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className={`${styles.step} styles.stepBlue`}>
            <div className={styles.numberBox}>
              <span className={styles.numberText}>04</span>
            </div>
            <div className={styles.info}>
              <h3 className={styles.stepTitle}>Certificação</h3>
              <p className={styles.stepDesc}>
                Emissão rápida de laudos técnicos, AVCB ou certificados reconhecidos e válidos em todo o território nacional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
