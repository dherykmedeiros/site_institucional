import styles from "./Footer.module.css";
import { defaultContent } from "@/lib/defaultContent";

interface FooterProps {
  footer?: typeof defaultContent.footer;
  general?: typeof defaultContent.general;
}

export default function Footer({ footer, general }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const logoText = general?.logoText ?? defaultContent.general.logoText;
  const logoSub = general?.logoSub ?? defaultContent.general.logoSub;
  const logoImage = general?.logoImage ?? defaultContent.general.logoImage;

  const brandDesc = footer?.brandDesc ?? defaultContent.footer.brandDesc;
  const address = footer?.address ?? defaultContent.footer.address;
  const phones = footer?.phones ?? defaultContent.footer.phones;
  const emails = footer?.emails ?? defaultContent.footer.emails;
  const cnpj = footer?.cnpj ?? defaultContent.footer.cnpj;
  const credit = footer?.credit ?? defaultContent.footer.credit;

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Column 1: Brand */}
          <div>
            <a href="#inicio" className={styles.logo}>
              {logoImage ? (
                <img src={logoImage} alt="CENADT Logo" style={{ maxHeight: "40px", width: "auto" }} />
              ) : (
                <span className={styles.logoText}>
                  {logoText}<span className={styles.logoSub}>{logoSub}</span>
                </span>
              )}
            </a>
            <p className={styles.brandDesc}>
              {brandDesc}
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className={styles.colTitle}>Navegação</h3>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <a href="#inicio">Início</a>
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
              <p className={styles.contactLine}>{address}</p>
              {phones.map((phone, i) => (
                <p key={i} className={styles.contactLine}>
                  <a href={phone.number}>{phone.label}</a>
                </p>
              ))}
              {emails.map((email, i) => (
                <p key={i} className={styles.contactLine}>
                  <a href={email.address}>{email.label}</a>
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <span className={styles.copyright}>
            &copy; {currentYear} {logoText}{logoSub} — Centro Avançado de Treinamentos &amp;
            Serviços. Todos os direitos reservados.
          </span>

          <div className={styles.legal}>
            <span className={styles.cnpj}>{cnpj}</span>
            <span className={styles.credit}>{credit}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
