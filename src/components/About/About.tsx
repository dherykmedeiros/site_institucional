import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="sobre" className={styles.about}>
      {/* Glow background effect */}
      <div className={styles.blob}></div>

      <div className={`container ${styles.container}`}>
        {/* Left Side: Presentation text */}
        <div className={styles.content}>
          <span className="badge">SOBRE A CENADT</span>
          <h2 className={styles.title}>
            <span className="gradient-text">Compromisso com a</span>{" "}
            <span className="gradient-accent-text">Segurança e Formação de Elite</span>
          </h2>
          <p className={styles.description}>
            Fundado em setembro de 2016 em Maranguape, Ceará, o **CENADT (Centro Avançado de Treinamentos & Serviços)** 
            surgiu com o propósito de transformar o cenário da educação profissional e da prestação de serviços 
            técnicos de segurança no Nordeste.
          </p>
          <p className={styles.description}>
            Nossos treinamentos são ministrados por um corpo docente altamente qualificado, composto por engenheiros, 
            especialistas em segurança do trabalho e veteranos das forças de salvamento e segurança pública. 
            Aliamos a teoria rigorosa a simulações práticas realistas, garantindo que profissionais e empresas estejam 
            100% preparados para qualquer desafio operacional ou de emergência.
          </p>
          
          <div className={styles.visionBox}>
            <h3 className={styles.visionTitle}>Nossa Visão</h3>
            <p className={`${styles.visionText} p`}>
              Ser a instituição de referência em educação profissional e consultoria técnica de segurança no Ceará, 
              entregando soluções inovadoras, eficientes e sustentáveis que garantam a melhor relação custo-benefício.
            </p>
          </div>
        </div>

        {/* Right Side: Metrics Grid */}
        <div className={styles.statsGrid}>
          {/* Card 1 */}
          <div className={styles.statCard}>
            <span className={`${styles.statNum} gradient-accent-text`}>+10</span>
            <h3 className={styles.statLabel}>Anos de História</h3>
            <p className={styles.statDesc}>Empresa sólida fundada em 2016 com foco em ética e dedicação.</p>
          </div>

          {/* Card 2 */}
          <div className={styles.statCard}>
            <span className={`${styles.statNum} gradient-blue-text`}>5k+</span>
            <h3 className={styles.statLabel}>Alunos Certificados</h3>
            <p className={styles.statDesc}>Profissionais capacitados e devidamente prontos para o mercado.</p>
          </div>

          {/* Card 3 */}
          <div className={styles.statCard}>
            <span className={`${styles.statNum} gradient-blue-text`}>100%</span>
            <h3 className={styles.statLabel}>Corpo Docente Elite</h3>
            <p className={styles.statDesc}>Especialistas, engenheiros e veteranos de forças de resgate.</p>
          </div>

          {/* Card 4 */}
          <div className={styles.statCard}>
            <span className={`${styles.statNum} gradient-accent-text`}>Legal</span>
            <h3 className={styles.statLabel}>Homologação Total</h3>
            <p className={styles.statDesc}>Treinamentos alinhados às portarias do MTE e Corpo de Bombeiros.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
