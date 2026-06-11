import styles from "./Testimonials.module.css";

const featured = {
  text: "Contratamos o treinamento in-company de NR-10 e NR-35 com a CENADT. O conhecimento dos instrutores, todos veteranos de resgate militar, fez total diferença na postura de segurança dos nossos colaboradores. Recomendo fortemente!",
  name: "Davi Silveira",
  role: "Gerente de EHS — Indústria Metalúrgica Ceará",
};

const smallQuotes = [
  {
    text: "Fiz minha formação de Bombeira Civil na CENADT e hoje já estou inserida no mercado, atuando em um grande shopping center em Fortaleza. A infraestrutura prática de simulação é sensacional.",
    name: "Bruna Lemos",
    role: "Bombeira Civil Certificada",
  },
  {
    text: "O projeto de segurança contra incêndio da nossa sede comercial foi totalmente elaborado pela CENADT. Aprovado pelo Corpo de Bombeiros sem nenhuma pendência. Excelência técnica!",
    name: "Carlos Mendes",
    role: "Diretor Técnico — Horizon Incorporações",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className={styles.testimonials}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.overline}>Depoimentos</span>
          <h2 className={styles.title}>Quem Confia na CENADT</h2>
          <p className={styles.subtitle}>
            Confira as opiniões de profissionais formados e gestores de empresas
            que elevaram seus padrões de segurança com nossas soluções.
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
