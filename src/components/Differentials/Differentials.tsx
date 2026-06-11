import styles from "./Differentials.module.css";

const items = [
  {
    index: "01",
    title: "Corpo Docente de Elite",
    desc: "Engenheiros, especialistas em segurança e veteranos das forças de salvamento com vivência real de campo.",
  },
  {
    index: "02",
    title: "Simulações Práticas Realistas",
    desc: "Treinamentos com cenários reais de combate a incêndio, resgate em altura e evacuação de emergência.",
  },
  {
    index: "03",
    title: "Melhor Custo-Benefício",
    desc: "Alto padrão de ensino com preços competitivos e condições flexíveis para autônomos e corporações.",
  },
  {
    index: "04",
    title: "Treinamentos In-Company",
    desc: "Programas customizados realizados diretamente nas instalações da sua empresa, focados nos seus riscos.",
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className={styles.differentials}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left — Intro */}
          <div className={styles.intro}>
            <span className={styles.overline}>Diferenciais</span>
            <h2 className={styles.title}>O que nos torna diferentes</h2>
            <p className={styles.paragraph}>
              Unimos credibilidade técnica, metodologia eficiente e experiência
              operacional para entregar resultados reais aos nossos alunos e
              parceiros corporativos.
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
