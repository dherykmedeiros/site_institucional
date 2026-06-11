import React from "react";
import styles from "./Testimonials.module.css";

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  initials: string;
  theme: "orange" | "blue";
}

export default function Testimonials() {
  const testimonials: TestimonialItem[] = [
    {
      id: "t1",
      name: "Davi Silveira",
      role: "Gerente de EHS",
      company: "Indústria Metalúrgica Ceará",
      initials: "DS",
      theme: "orange",
      text: "Contratamos o treinamento in-company de NR-10 e NR-35 com a CENADT. O conhecimento dos instrutores, todos veteranos de resgate militar, fez total diferença na postura de segurança dos nossos colaboradores. Recomendo fortemente!"
    },
    {
      id: "t2",
      name: "Bruna Lemos",
      role: "Aluna Formada",
      company: "Bombeira Civil Certificada",
      initials: "BL",
      theme: "blue",
      text: "Fiz minha formação de Bombeira Civil na CENADT e hoje já estou inserida no mercado, atuando em um grande shopping center em Fortaleza. A infraestrutura prática deles de simulação de combate a incêndio é sensacional."
    },
    {
      id: "t3",
      name: "Carlos Mendes",
      role: "Diretor Técnico",
      company: "Horizon Incorporações",
      initials: "CM",
      theme: "blue",
      text: "O projeto de segurança contra incêndio e pânico da nossa nova sede comercial foi totalmente elaborado pela CENADT. Aprovado pelo Corpo de Bombeiros sem nenhuma pendência ou dor de cabeça. Excelência técnica pura!"
    },
    {
      id: "t4",
      name: "Felipe Almeida",
      role: "Supervisor de Operações",
      company: "Terminal de Logística Nordeste",
      initials: "FA",
      theme: "orange",
      text: "Os treinamentos de Brigada de Incêndio da CENADT são extremamente focados na nossa realidade industrial. Nossos colaboradores aprenderam na prática como conter princípios de sinistros e organizar evacuações organizadas."
    }
  ];

  return (
    <section id="depoimentos" className={styles.testimonials}>
      <div className="container">
        {/* Header Block */}
        <div className={styles.header}>
          <span className="badge badge-blue">DEPOIMENTOS</span>
          <h2 className={styles.title}>
            <span className="gradient-text">Quem Confia na</span>{" "}
            <span className="gradient-blue-text">CENADT</span>
          </h2>
          <p className={styles.subtitle}>
            Confira as opiniões de profissionais formados e de gestores de empresas 
            que elevaram seus padrões de segurança com nossas soluções.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className={styles.grid}>
          {testimonials.map((item) => (
            <div key={item.id} className={`${styles.card} ${item.theme === "blue" ? styles.cardBlue : ""}`}>
              {/* Quote SVG Decoration */}
              <svg className={styles.quoteIcon} width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className={styles.text}>"{item.text}"</p>

              <div className={styles.profile}>
                <div className={`${styles.avatar} ${item.theme === "blue" ? styles.avatarBlue : ""}`}>
                  {item.initials}
                </div>
                <div className={styles.meta}>
                  <h4 className={styles.name}>{item.name}</h4>
                  <span className={styles.company}>{item.role} &bull; {item.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
