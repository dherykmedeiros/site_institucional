import styles from "./Differentials.module.css";
import { defaultContent } from "@/lib/defaultContent";

interface DifferentialsProps {
  differentials?: typeof defaultContent.differentials;
}

export default function Differentials({ differentials }: DifferentialsProps) {
  const overline = differentials?.overline ?? defaultContent.differentials.overline;
  const title = differentials?.title ?? defaultContent.differentials.title;
  const paragraph = differentials?.paragraph ?? defaultContent.differentials.paragraph;
  const items = differentials?.items ?? defaultContent.differentials.items;

  return (
    <section id="diferenciais" className={styles.differentials}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left — Intro */}
          <div className={styles.intro}>
            <span className={styles.overline}>{overline}</span>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.paragraph}>
              {paragraph}
            </p>
          </div>

          {/* Right — Numbered list */}
          <div className={styles.list}>
            {items.map((item, i) => (
              <div key={item.index}>
                {i > 0 && <hr className={styles.divider} />}
                <div className={styles.listItem}>
                  <div className={styles.itemHeader}>
                    <span className={styles.itemIndex}>{item.index}</span>
                    <span className={styles.itemTitle}>{item.title}</span>
                  </div>
                  <p className={styles.itemDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
