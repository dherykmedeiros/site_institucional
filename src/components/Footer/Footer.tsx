import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Column 1: Brand */}
          <div>
            <a href="#home" className={styles.logo}>
              <span className={styles.logoText}>
                CENA<span className={styles.logoSub}>DT</span>
              </span>
            </a>
            <p className={styles.brandDesc}>
              Referência em educação profissional e engenharia de segurança
              contra incêndios. Qualidade na formação, sucesso na profissão.
              Maranguape, Ceará.
            </p>
          </div>

          {/* Column 2: Navigation */}
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
                <a href="#servicos">Cursos &amp; Serviços</a>
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
            <h3 className={styles.colTitle}>Cursos</h3>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <a href="#servicos">NR-10 — Eletricidade</a>
              </li>
              <li className={styles.linkItem}>
                <a href="#servicos">NR-35 — Trabalho em Altura</a>
              </li>
              <li className={styles.linkItem}>
                <a href="#servicos">NR-33 — Espaço Confinado</a>
              </li>
              <li className={styles.linkItem}>
                <a href="#servicos">Formação de Bombeiro Civil</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className={styles.colTitle}>Contato</h3>
            <div className={styles.contactList}>
              <p className={styles.contactLine}>Maranguape — Ceará, Brasil</p>
              <p className={styles.contactLine}>
                <a href="tel:+5585999000534">(85) 99900-0534</a>
              </p>
              <p className={styles.contactLine}>
                <a href="tel:+5585981906077">(85) 98190-6077</a>
              </p>
              <p className={styles.contactLine}>
                <a href="mailto:cenadt@cenadt.com">cenadt@cenadt.com</a>
              </p>
              <p className={styles.contactLine}>
                <a href="mailto:cenadt.treinamentos@gmail.com">
                  cenadt.treinamentos@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <span className={styles.copyright}>
            &copy; {currentYear} CENADT — Centro Avançado de Treinamentos &amp;
            Serviços. Todos os direitos reservados.
          </span>

          <div className={styles.legal}>
            <span className={styles.cnpj}>CNPJ 26.375.818/0001-82</span>
            <span className={styles.credit}>Desenvolvido com Alto Padrão</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
