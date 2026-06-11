"use client";

import { useState } from "react";
import styles from "./Faq.module.css";

const faqData = [
  {
    question:
      "Os certificados emitidos pela CENADT são válidos em todo o território nacional?",
    answer:
      "Sim, absolutamente. Todos os nossos certificados de formação e reciclagem são emitidos em estrita conformidade com as diretrizes do Ministério do Trabalho e Emprego (MTE) e normas regulamentadoras nacionais, sendo amplamente aceitos e válidos em todo o Brasil.",
  },
  {
    question: "Como funcionam os treinamentos in-company personalizados?",
    answer:
      "Nossa equipe de engenheiros e instrutores planeja e realiza o treinamento diretamente nas instalações da sua empresa. Adaptamos os cenários práticos e teóricos de acordo com a realidade física e os riscos específicos da sua planta industrial ou comercial.",
  },
  {
    question:
      "Quais são as formas de pagamento disponíveis para cursos e serviços?",
    answer:
      "Para empresas parceiras, trabalhamos com faturamento direto via boleto bancário ou transferência. Para inscrições de alunos individuais, oferecemos parcelamento em até 10x sem juros no cartão de crédito, pagamento via PIX com desconto ou cartão de débito.",
  },
  {
    question:
      "A CENADT presta assessoria completa para emissão ou renovação de AVCB?",
    answer:
      "Sim, prestamos assessoria integral. Nossa equipe realiza o levantamento das instalações, elabora o projeto de combate a incêndio, assessora a compra dos equipamentos adequados, treina a brigada de incêndio interna e acompanha a vistoria oficial do Corpo de Bombeiros até a emissão definitiva do AVCB.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faq}>
      <div className="container">
        <div className={styles.layout}>
          {/* Left column — sticky header */}
          <div className={styles.headerCol}>
            <span className={styles.overline}>Dúvidas Frequentes</span>
            <h2 className={styles.title}>Perguntas Frequentes</h2>
            <p className={styles.subtitle}>
              Encontre respostas rápidas para as principais dúvidas sobre nossos
              treinamentos técnicos, certificações e serviços de consultoria.
            </p>
          </div>

          {/* Right column — accordion */}
          <div className={styles.accordion}>
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`${styles.item} ${
                  activeIndex === index ? styles.itemActive : ""
                }`}
              >
                <button
                  className={styles.trigger}
                  onClick={() => handleToggle(index)}
                  aria-expanded={activeIndex === index}
                >
                  <span className={styles.triggerText}>{item.question}</span>
                  <span className={styles.indicator}>
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>

                <div className={styles.content}>
                  <div className={styles.contentText}>{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
