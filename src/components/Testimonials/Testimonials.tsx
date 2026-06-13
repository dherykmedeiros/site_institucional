import styles from "./Testimonials.module.css";
import { defaultContent } from "@/lib/defaultContent";

interface TestimonialsProps {
  testimonials?: typeof defaultContent.testimonials;
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const overline = testimonials?.overline ?? defaultContent.testimonials.overline;
  const title = testimonials?.title ?? defaultContent.testimonials.title;
  const subtitle = testimonials?.subtitle ?? defaultContent.testimonials.subtitle;
  const featured = testimonials?.featured ?? defaultContent.testimonials.featured;
  const smallQuotes = testimonials?.smallQuotes ?? defaultContent.testimonials.smallQuotes;

  return (
    <section id="depoimentos" className={styles.testimonials}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.overline}>{overline}</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>
            {subtitle}
          </p>
        </div>

        {/* Featured large quote */}
        <div className={styles.featured}>
          <span className={styles.quoteMark}>&ldquo;</span>
          <p className={styles.featuredText}>{featured.text}</p>
          <div className={styles.author}>
            <span className={styles.authorName}>{featured.name}</span>
            <span className={styles.authorRole}>{featured.role}</span>
          </div>
        </div>

        {/* Two smaller quotes */}
        <div className={styles.smallGrid}>
          {smallQuotes.map((quote, i) => (
            <div key={i} className={styles.smallQuote}>
              <span className={styles.smallQuoteMark}>&ldquo;</span>
              <p className={styles.smallText}>{quote.text}</p>
              <div className={styles.author}>
                <span className={styles.authorName}>{quote.name}</span>
                <span className={styles.authorRole}>{quote.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
