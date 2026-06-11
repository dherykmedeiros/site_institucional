import styles from "./Hero.module.css";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5585999000534";

const STATS = [
  { value: "2016", label: "Anos de Mercado" },
  { value: "+5.000", label: "Certificados Emitidos" },
  { value: "100%", label: "Conformidade NRs" },
];

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.heroInner}>
        {/* Left Column */}
        <div className={styles.content}>
          <span className={styles.overline}>
            Centro Avançado de Treinamentos
          </span>

          <div className={styles.divider} />

          <h1 className={styles.title}>
            Qualidade na formação,{" "}
            <span className={styles.titleAccent}>sucesso</span> na profissão
          </h1>

          <p className={styles.subtitle}>
            Formamos profissionais preparados para atuar com segurança e
            excelência. Cursos de NR-10, NR-35, NR-33, brigada de incêndio e
            consultoria especializada em segurança do trabalho para empresas de
            todo o Ceará.
          </p>

          <div className={styles.actions}>
            <a href="#servicos" className={styles.btnPrimary}>
              Ver Cursos
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnSecondary}
            >
              Falar com Especialista
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.aside}>
          <div className={styles.statsCard}>
            {STATS.map((stat) => (
              <div key={stat.label} className={styles.statItem}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
