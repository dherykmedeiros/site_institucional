import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Main Grid */}
        <div className={styles.grid}>
          {/* Column 1: Brand Info */}
          <div className={styles.brandCol}>
            <a href="#home" className={styles.logo}>
              <svg
                className={styles.logoIcon}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>
                CENA<span className={styles.logoSub}>DT</span>
              </span>
            </a>
            
            <p className={styles.brandDesc}>
              Referência em educação profissional e engenharia de segurança contra incêndios. 
              Qualidade na formação, sucesso na profissão. Sediada em Maranguape, Ceará.
            </p>

            {/* Social Media Links */}
            <div className={styles.socials}>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram da CENADT"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Facebook da CENADT"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="YouTube da CENADT"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className={styles.colTitle}>Navegação</h3>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <a href="#home">Início</a>
              </li>
              <li className={styles.linkItem}>
                <a href="#sobre">Sobre Nós</a>
              </li>
              <li className={styles.linkItem}>
                <a href="#servicos">Cursos & Serviços</a>
              </li>
              <li className={styles.linkItem}>
                <a href="#diferenciais">Diferenciais</a>
              </li>
              <li className={styles.linkItem}>
                <a href="#faq">Dúvidas (FAQ)</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Courses */}
          <div>
            <h3 className={styles.colTitle}>Cursos Populares</h3>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <a href="#servicos">Segurança em Eletricidade (NR-10)</a>
              </li>
              <li className={styles.linkItem}>
                <a href="#servicos">Trabalho em Altura (NR-35)</a>
              </li>
              <li className={styles.linkItem}>
                <a href="#servicos">Espaço Confinado (NR-33)</a>
              </li>
              <li className={styles.linkItem}>
                <a href="#servicos">Formação de Bombeiro Civil</a>
              </li>
              <li className={styles.linkItem}>
                <a href="#servicos">Brigada de Incêndio</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h3 className={styles.colTitle}>Fale Conosco</h3>
            <div className={styles.contactList}>
              {/* Address */}
              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Maranguape - Ceará, Brasil</span>
              </div>
              
              {/* Phones */}
              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <a href="tel:+5585999000534" style={{ display: 'block' }}>(85) 99900-0534</a>
                  <a href="tel:+5585981906077" style={{ display: 'block' }}>(85) 98190-6077 (WhatsApp)</a>
                </div>
              </div>

              {/* Emails */}
              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <div>
                  <a href="mailto:cenadt@cenadt.com" style={{ display: 'block' }}>cenadt@cenadt.com</a>
                  <a href="mailto:cenadt.treinamentos@gmail.com" style={{ display: 'block' }}>cenadt.treinamentos@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottom}>
          <span>
            &copy; {currentYear} CENADT - Centro Avançado de Treinamentos & Serviços. Todos os direitos reservados.
          </span>
          
          <div className={styles.legal}>
            <span className={styles.cnpj}>CNPJ: 26.375.818/0001-82</span>
            <span>Desenvolvido com Alto Padrão</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
