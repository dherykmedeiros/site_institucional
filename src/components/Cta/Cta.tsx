import styles from "./Cta.module.css";

export default function Cta() {
  return (
    <section id="cta" className={styles.cta}>
      <div className="container">
        <div className={styles.inner}>
          <span className={styles.overline}>Pronto para Começar?</span>
          <h2 className={styles.title}>
            Garanta a segurança e conformidade da sua empresa
          </h2>
          <p className={styles.desc}>
            Converse diretamente com um de nossos consultores técnicos. Tire
            dúvidas sobre cursos, solicite orçamentos para treinamentos
            in-company ou agende a elaboração do seu projeto contra incêndio.
          </p>

          <div className={styles.buttonGroup}>
            <a
              href="https://api.whatsapp.com/send?phone=5585999000534"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnWhatsapp}
            >
              Falar no WhatsApp
            </a>
            <a href="tel:+5585999000534" className={styles.btnSecondary}>
              Ligar: (85) 99900-0534
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
