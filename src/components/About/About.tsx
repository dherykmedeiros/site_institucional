import styles from "./About.module.css";

export default function About() {
  return (
    <section id="sobre" className={styles.about}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left — Text */}
          <div className={styles.content}>
            <span className={styles.overline}>Sobre Nós</span>
            <h2 className={styles.title}>
              Formando profissionais que salvam vidas desde 2016
            </h2>
            <p className={styles.paragraph}>
              Fundado em setembro de 2016 em Maranguape, Ceará, o CENADT — Centro
              Avançado de Treinamentos &amp; Serviços — nasceu com a missão de
              elevar o padrão da educação profissional e dos serviços técnicos de
              segurança no Nordeste do Brasil.
            </p>
            <p className={styles.paragraph}>
              Nosso corpo docente é composto por engenheiros de segurança,
              especialistas certificados e veteranos das forças de salvamento e
              segurança pública. Aliamos teoria rigorosa a simulações práticas
              realistas, garantindo que profissionais e empresas estejam preparados
              para qualquer cenário de emergência.
            </p>
          </div>

          {/* Right — Stats */}
          <div className={styles.statsStack}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>+5.000</span>
              <span className={styles.statLabel}>Profissionais Certificados</span>
            </div>

            <hr className={styles.divider} />

            <div className={styles.statItem}>
              <span className={styles.statNumber}>2016</span>
              <span className={styles.statLabel}>Ano de Fundação</span>
            </div>

            <hr className={styles.divider} />

            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Conformidade Normativa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
