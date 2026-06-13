import styles from "./Process.module.css";
import { defaultContent } from "@/lib/defaultContent";

interface ProcessProps {
  process?: typeof defaultContent.process;
}

export default function Process({ process }: ProcessProps) {
  const overline = process?.overline ?? defaultContent.process.overline;
  const title = process?.title ?? defaultContent.process.title;
  const subtitle = process?.subtitle ?? defaultContent.process.subtitle;
  const steps = process?.steps ?? defaultContent.process.steps;

  return (
    <section id="processo" className={styles.process}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.overline}>{overline}</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>
            {subtitle}
          </p>
        </div>

        <div className={styles.timeline}>
          {steps.map((step) => (
            <div key={step.number} className={styles.step}>
              <span className={styles.stepNumber}>{step.number}</span>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
