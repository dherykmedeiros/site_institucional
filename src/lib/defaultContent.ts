export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ServiceItem {
  id: string;
  category: string;
  title: string;
  desc: string;
  linkText: string;
}

export interface DifferentialItem {
  index: string;
  title: string;
  desc: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  text: string;
  name: string;
  role: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const defaultContent = {
  general: {
    logoText: "CENA",
    logoSub: "DT",
    logoImage: "", // URL se preferir imagem
    whatsappUrl: "https://api.whatsapp.com/send?phone=5585999000534",
  },
  header: {
    navItems: [
      { label: "Início", href: "#inicio" },
      { label: "Sobre", href: "#sobre" },
      { label: "Serviços", href: "#servicos" },
      { label: "Diferenciais", href: "#diferenciais" },
      { label: "Contato", href: "#contato" },
    ] as NavItem[],
  },
  hero: {
    overline: "Centro Avançado de Treinamentos",
    title: "Qualidade na formação, sucesso na profissão",
    subtitle: "Formamos profissionais preparados para atuar com segurança e excelência. Cursos de NR-10, NR-35, NR-33, brigada de incêndio e consultoria especializada em segurança do trabalho para empresas de todo o Ceará.",
    stats: [
      { value: "2016", label: "Anos de Mercado" },
      { value: "+5.000", label: "Certificados Emitidos" },
      { value: "100%", label: "Conformidade NRs" },
    ] as StatItem[],
  },
  about: {
    overline: "Sobre Nós",
    title: "Formando profissionais que salvam vidas desde 2016",
    paragraphs: [
      "Fundado em setembro de 2016 em Maranguape, Ceará, o CENADT — Centro Avançado de Treinamentos & Serviços — nasceu com a missão de elevar o padrão da educação profissional e dos serviços técnicos de segurança no Nordeste do Brasil.",
      "Nosso corpo docente é composto por engenheiros de segurança, especialistas certificados e veteranos das forças de salvamento e segurança pública. Aliamos teoria rigorosa a simulações práticas realistas, garantindo que profissionais e empresas estejam preparados para qualquer cenário de emergência."
    ] as string[],
    stats: [
      { number: "+5.000", label: "Profissionais Certificados" },
      { number: "2016", label: "Ano de Fundação" },
      { number: "100%", label: "Conformidade Normativa" }
    ]
  },
  services: {
    overline: "Nosso Portfólio",
    title: "Cursos e serviços que protegem vidas",
    subtitle: "Treinamentos técnicos certificados e serviços de engenharia contra incêndio. Soluções completas para capacitar pessoas e proteger estruturas.",
    coursesList: [
      {
        id: "nr10",
        category: "Norma Regulamentadora",
        title: "NR-10 — Segurança em Instalações Elétricas",
        desc: "Curso completo de 40 horas abordando os requisitos mínimos para garantir a segurança dos trabalhadores que interagem direta ou indiretamente com eletricidade.",
        linkText: "Fazer Inscrição",
      },
      {
        id: "nr35",
        category: "Norma Regulamentadora",
        title: "NR-35 — Trabalho em Altura",
        desc: "Capacitação essencial sobre planejamento, organização e execução de atividades acima de 2 metros, com ênfase na prevenção de quedas.",
        linkText: "Fazer Inscrição",
      },
      {
        id: "bombeiro",
        category: "Formação Profissional",
        title: "Bombeiro Civil",
        desc: "Capacitação completa para atuar na prevenção e combate a incêndios, prestação de primeiros socorros e avaliação de riscos em edificações.",
        linkText: "Ver Turmas",
      },
      {
        id: "brigada",
        category: "Segurança Corporativa",
        title: "Brigada de Incêndio",
        desc: "Formação de equipe voluntária treinada para prevenção, controle de pânico, primeiros socorros e abandono de área em situações de emergência.",
        linkText: "Agendar Treinamento",
      },
    ] as ServiceItem[],
    servicesList: [
      {
        id: "projetos",
        category: "Engenharia",
        title: "Projetos de Incêndio",
        desc: "Elaboração de projetos de sinalização, segurança contra incêndio e pânico, e planos de evacuação detalhados para certificação junto ao Corpo de Bombeiros.",
        linkText: "Solicitar Orçamento",
      },
      {
        id: "assessoria",
        category: "Consultoria",
        title: "Assessoria Técnica",
        desc: "Consultoria especializada para estruturar planos de manutenção, gestão de segurança interna e adequação às normas regulamentadoras vigentes.",
        linkText: "Falar com Consultor",
      },
      {
        id: "terceirizacao",
        category: "Operacional",
        title: "Terceirização de Pessoal",
        desc: "Alocação e gestão de profissionais qualificados — bombeiros civis, porteiros, zeladores e equipe de apoio operacional para sua empresa.",
        linkText: "Contratar Equipe",
      },
      {
        id: "incompany",
        category: "Sob Demanda",
        title: "Treinamentos In-Company",
        desc: "Programas de qualificação desenhados para as particularidades de riscos e processos da sua empresa, realizados nas suas próprias instalações.",
        linkText: "Customizar Programa",
      },
    ] as ServiceItem[],
  },
  differentials: {
    overline: "Diferenciais",
    title: "O que nos torna diferentes",
    paragraph: "Unimos credibilidade técnica, metodologia eficiente e experiência operacional para entregar resultados reais aos nossos alunos e parceiros corporativos.",
    items: [
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
    ] as DifferentialItem[],
  },
  process: {
    overline: "Processo",
    title: "Como Funciona Nosso Atendimento",
    subtitle: "Da primeira conversa à entrega da certificação, estruturamos um fluxo ágil e descomplicado focado na sua conformidade legal.",
    steps: [
      {
        number: "01",
        title: "Diagnóstico",
        description: "Analisamos as necessidades da sua empresa ou carreira para indicar exatamente os cursos ou projetos necessários.",
      },
      {
        number: "02",
        title: "Planejamento",
        description: "Desenvolvemos propostas customizadas de conteúdo, cronogramas e escopo de projeto de segurança.",
      },
      {
        number: "03",
        title: "Execução",
        description: "Aulas dinâmicas com nossos especialistas ou execução rigorosa dos projetos de segurança contra incêndio.",
      },
      {
        number: "04",
        title: "Certificação",
        description: "Emissão rápida de laudos técnicos, AVCB ou certificados reconhecidos e válidos em todo o território nacional.",
      },
    ] as ProcessStep[],
  },
  testimonials: {
    overline: "Depoimentos",
    title: "Quem Confia na CENADT",
    subtitle: "Confira as opiniões de profissionais formados e gestores de empresas que elevaram seus padrões de segurança com nossas soluções.",
    featured: {
      text: "Contratamos o treinamento in-company de NR-10 e NR-35 com a CENADT. O conhecimento dos instrutores, todos veteranos de resgate militar, fez total diferença na postura de segurança dos nossos colaboradores. Recomendo fortemente!",
      name: "Davi Silveira",
      role: "Gerente de EHS — Indústria Metalúrgica Ceará",
    } as TestimonialItem,
    smallQuotes: [
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
    ] as TestimonialItem[],
  },
  faq: {
    overline: "Dúvidas Frequentes",
    title: "Perguntas Frequentes",
    subtitle: "Encontre respostas rápidas para as principais dúvidas sobre nossos treinamentos técnicos, certificações e serviços de consultoria.",
    faqData: [
      {
        question: "Os certificados emitidos pela CENADT são válidos em todo o território nacional?",
        answer: "Sim, absolutamente. Todos os nossos certificados de formação e reciclagem são emitidos em estrita conformidade com as diretrizes do Ministério do Trabalho e Emprego (MTE) e normas regulamentadoras nacionais, sendo amplamente aceitos e válidos em todo o Brasil.",
      },
      {
        question: "Como funcionam os treinamentos in-company personalizados?",
        answer: "Nossa equipe de engenheiros e instrutores planeja e realiza o treinamento diretamente nas instalações da sua empresa. Adaptamos os cenários práticos e teóricos de acordo com a realidade física e os riscos específicos da sua planta industrial ou comercial.",
      },
      {
        question: "Quais são as formas de pagamento disponíveis para cursos e serviços?",
        answer: "Para empresas parceiras, trabalhamos com faturamento direto via boleto bancário ou transferência. Para inscrições de alunos individuais, oferecemos parcelamento em até 10x sem juros no cartão de crédito, pagamento via PIX com desconto ou cartão de débito.",
      },
      {
        question: "A CENADT presta assessoria completa para emissão ou renovação de AVCB?",
        answer: "Sim, prestamos assessoria integral. Nossa equipe realiza o levantamento das instalações, elabora o projeto de combate a incêndio, assessora a compra dos equipamentos adequados, treina a brigada de incêndio interna e acompanha a vistoria oficial do Corpo de Bombeiros até a emissão definitiva do AVCB.",
      },
    ] as FaqItem[],
  },
  cta: {
    overline: "Pronto para Começar?",
    title: "Garanta a segurança e conformidade da sua empresa",
    desc: "Converse diretamente com um de nossos consultores técnicos. Tire dúvidas sobre cursos, solicite orçamentos para treinamentos in-company ou agende a elaboração do seu projeto contra incêndio.",
    whatsappUrl: "https://api.whatsapp.com/send?phone=5585999000534",
    phoneUrl: "tel:+5585999000534",
    phoneLabel: "Ligar: (85) 99900-0534",
  },
  footer: {
    brandDesc: "Referência em educação profissional e engenharia de segurança contra incêndios. Qualidade na formação, sucesso na profissão. Maranguape, Ceará.",
    address: "Maranguape — Ceará, Brasil",
    phones: [
      { number: "tel:+5585999000534", label: "(85) 99900-0534" },
      { number: "tel:+5585981906077", label: "(85) 98190-6077" }
    ],
    emails: [
      { address: "mailto:cenadt@cenadt.com", label: "cenadt@cenadt.com" },
      { address: "mailto:cenadt.treinamentos@gmail.com", label: "cenadt.treinamentos@gmail.com" }
    ],
    cnpj: "CNPJ 26.375.818/0001-82",
    credit: "Desenvolvido com Alto Padrão",
  }
};

export type SiteContent = typeof defaultContent;
export type ContentKey = keyof SiteContent;
