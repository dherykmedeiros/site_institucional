import styles from "./Cta.module.css";
import { defaultContent } from "@/lib/defaultContent";

interface CtaProps {
  cta?: typeof defaultContent.cta;
}

export default function Cta({ cta }: CtaProps) {
  const overline = cta?.overline ?? defaultContent.cta.overline;
  const title = cta?.title ?? defaultContent.cta.title;
  const desc = cta?.desc ?? defaultContent.cta.desc;
  const whatsappUrl = cta?.whatsappUrl ?? defaultContent.cta.whatsappUrl;
  const phoneUrl = cta?.phoneUrl ?? defaultContent.cta.phoneUrl;
  const phoneLabel = cta?.phoneLabel ?? defaultContent.cta.phoneLabel;

  return (
    <section id="cta" className={styles.cta}>
      <div className="container">
        <div className={styles.inner}>
          <span className={styles.overline}>{overline}</span>
          <h2 className={styles.title}>
            {title}
          </h2>
          <p className={styles.desc}>
            {desc}
          </p>

          <div className={styles.buttonGroup}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnWhatsapp}
            >
              Falar no WhatsApp
            </a>
            <a href={phoneUrl} className={styles.btnSecondary}>
              {phoneLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
