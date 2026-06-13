import styles from "./Hero.module.css";
import { defaultContent } from "@/lib/defaultContent";

interface HeroProps {
  general?: typeof defaultContent.general;
  hero?: typeof defaultContent.hero;
}

export default function Hero({ general, hero }: HeroProps) {
  const whatsappUrl = general?.whatsappUrl ?? defaultContent.general.whatsappUrl;
  const overline = hero?.overline ?? defaultContent.hero.overline;
  const title = hero?.title ?? defaultContent.hero.title;
  const subtitle = hero?.subtitle ?? defaultContent.hero.subtitle;
  const stats = hero?.stats ?? defaultContent.hero.stats;

  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.heroInner}>
        {/* Left Column */}
        <div className={styles.content}>
          <span className={styles.overline}>
            {overline}
          </span>

          <div className={styles.divider} />

          <h1 className={styles.title}>
            {title}
          </h1>

          <p className={styles.subtitle}>
            {subtitle}
          </p>

          <div className={styles.actions}>
            <a href="#servicos" className={styles.btnPrimary}>
              Ver Cursos
            </a>
            <a
              href={whatsappUrl}
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
            {stats.map((stat) => (
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
