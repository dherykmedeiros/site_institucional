import React from "react";
import styles from "./Cta.module.css";

export default function Cta() {
  const whatsappLink = "https://api.whatsapp.com/send?phone=5585999000534&text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20treinamentos/serviços%20com%20a%20CENADT.";

  return (
    <section id="cta" className={styles.cta}>
      <div className="container">
        <div className={styles.box}>
          <span className="badge">FALE CONOSCO</span>
          <h2 className={styles.title}>
            <span className="gradient-text">Pronto para Garantir a</span>{" "}
            <span className="gradient-accent-text">Segurança e Conformidade</span>{" "}
            <span className="gradient-text">da sua Empresa?</span>
          </h2>
          <p className={styles.desc}>
            Converse diretamente com um de nossos consultores técnicos. 
            Tire dúvidas sobre cursos, solicite orçamentos para treinamentos in-company 
            ou agende a elaboração do seu projeto contra incêndio.
          </p>

          <div className={styles.buttonGroup}>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn ${styles.btnWhatsapp}`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.18 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.847.001-2.63-1.019-5.101-2.871-6.958C16.612 1.984 14.145 1.01 11.522 1.01 6.09 1.01 1.66 5.423 1.657 10.859c-.001 1.687.447 3.328 1.298 4.787l-.988 3.606 3.68-.966zm10.741-6.883c-.279-.14-1.65-.814-1.906-.906-.256-.093-.443-.14-.63.14-.186.279-.72.906-.882 1.092-.163.186-.325.21-.604.07-.279-.14-1.18-.435-2.247-1.387-.83-.74-1.39-1.653-1.553-1.932-.163-.279-.017-.43.122-.569.124-.125.279-.325.419-.488.14-.163.186-.279.279-.465.093-.186.046-.349-.023-.488-.069-.14-.63-1.517-.862-2.075-.226-.543-.454-.469-.63-.477-.162-.008-.349-.009-.536-.009-.187 0-.49.07-.747.349-.256.279-.979.957-.979 2.333 0 1.376 1.002 2.709 1.142 2.894.14.186 1.972 3.01 4.777 4.218.667.288 1.188.46 1.594.59.67.213 1.278.183 1.761.111.538-.08 1.65-.674 1.882-1.326.233-.652.233-1.21.163-1.325-.07-.111-.256-.205-.535-.346z" />
              </svg>
              Falar no WhatsApp
            </a>
            <a
              href="tel:+5585999000534"
              className="btn btn-secondary"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Ligar: (85) 99900-0534
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
