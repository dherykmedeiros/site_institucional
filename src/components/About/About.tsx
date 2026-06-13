import styles from "./About.module.css";
import { defaultContent } from "@/lib/defaultContent";

interface AboutProps {
  about?: typeof defaultContent.about;
}

export default function About({ about }: AboutProps) {
  const overline = about?.overline ?? defaultContent.about.overline;
  const title = about?.title ?? defaultContent.about.title;
  const paragraphs = about?.paragraphs ?? defaultContent.about.paragraphs;
  const stats = about?.stats ?? defaultContent.about.stats;

  return (
    <section id="sobre" className={styles.about}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left — Text */}
          <div className={styles.content}>
            <span className={styles.overline}>{overline}</span>
            <h2 className={styles.title}>
              {title}
            </h2>
            {paragraphs.map((p, i) => (
              <p key={i} className={styles.paragraph}>
                {p}
              </p>
            ))}
          </div>

          {/* Right — Stats */}
          <div className={styles.statsStack}>
            {stats.map((stat: any, i) => (
              <div key={i}>
                {i > 0 && <hr className={styles.divider} />}
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>{stat.number}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
