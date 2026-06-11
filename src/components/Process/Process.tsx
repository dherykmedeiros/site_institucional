import styles from "./Process.module.css";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Analisamos as necessidades da sua empresa ou carreira para indicar exatamente os cursos ou projetos necessários.",
  },
  {
    number: "02",
    title: "Planejamento",
    description:
      "Desenvolvemos propostas customizadas de conteúdo, cronogramas e escopo de projeto de segurança.",
  },
  {
    number: "03",
    title: "Execução",
    description:
      "Aulas dinâmicas com nossos especialistas ou execução rigorosa dos projetos de segurança contra incêndio.",
  },
  {
    number: "04",
    title: "Certificação",
    description:
      "Emissão rápida de laudos técnicos, AVCB ou certificados reconhecidos e válidos em todo o território nacional.",
  },
];

export default function Process() {
  return (
    <section id="processo" className={styles.process}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.overline}>Processo</span>
          <h2 className={styles.title}>Como Funciona Nosso Atendimento</h2>
          <p className={styles.subtitle}>
            Da primeira conversa à entrega da certificação, estruturamos um
            fluxo ágil e descomplicado focado na sua conformidade legal.
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
