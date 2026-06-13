const fs = require("fs");
const path = require("path");
const { Client } = require("pg");
const { createClient } = require("@supabase/supabase-js");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// Read env variables from .env.local
const envPath = path.join(__dirname, "..", ".env.local");
if (!fs.existsSync(envPath)) {
  console.error("Error: .env.local file not found.");
  process.exit(1);
}

const envContent = fs.readFileSync(envPath, "utf-8");
const env = {};
envContent.split("\n").forEach((line) => {
  const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
  if (match) {
    let value = match[2] || "";
    // Remove quotes
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.substring(1, value.length - 1);
    } else if (value.startsWith("'") && value.endsWith("'")) {
      value = value.substring(1, value.length - 1);
    }
    env[match[1]] = value;
  }
});

const connectionString = env.POSTGRES_URL_NON_POOLING || env.POSTGRES_URL;
const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = env.SUPABASE_SERVICE_ROLE_KEY;

if (!connectionString) {
  console.error("Error: POSTGRES_URL_NON_POOLING or POSTGRES_URL is missing in .env.local");
  process.exit(1);
}
if (!supabaseUrl || !serviceRoleKey) {
  console.error("Error: NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing in .env.local");
  process.exit(1);
}

// Default Content definition (synchronized with src/lib/defaultContent.ts)
const defaultContent = {
  general: {
    logoText: "CENA",
    logoSub: "DT",
    logoImage: "",
    whatsappUrl: "https://api.whatsapp.com/send?phone=5585999000534",
  },
  header: {
    navItems: [
      { label: "Início", href: "#inicio" },
      { label: "Sobre", href: "#sobre" },
      { label: "Serviços", href: "#servicos" },
      { label: "Diferenciais", href: "#diferenciais" },
      { label: "Contato", href: "#contato" },
    ],
  },
  hero: {
    overline: "Centro Avançado de Treinamentos",
    title: "Qualidade na formação, sucesso na profissão",
    subtitle: "Formamos profissionais preparados para atuar com segurança e excelência. Cursos de NR-10, NR-35, NR-33, brigada de incêndio e consultoria especializada em segurança do trabalho para empresas de todo o Ceará.",
    stats: [
      { value: "2016", label: "Anos de Mercado" },
      { value: "+5.000", label: "Certificados Emitidos" },
      { value: "100%", label: "Conformidade NRs" },
    ],
  },
  about: {
    overline: "Sobre Nós",
    title: "Formando profissionais que salvam vidas desde 2016",
    paragraphs: [
      "Fundado em setembro de 2016 em Maranguape, Ceará, o CENADT — Centro Avançado de Treinamentos & Serviços — nasceu com a missão de elevar o padrão da educação profissional e dos serviços técnicos de segurança no Nordeste do Brasil.",
      "Nosso corpo docente é composto por engenheiros de segurança, especialistas certificados e veteranos das forças de salvamento e segurança pública. Aliamos teoria rigorosa a simulações práticas realistas, garantindo que profissionais e empresas estejam preparados para qualquer cenário de emergência."
    ],
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
    ],
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
    ],
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
    ],
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
    ],
  },
  testimonials: {
    overline: "Depoimentos",
    title: "Quem Confia na CENADT",
    subtitle: "Confira as opiniões de profissionais formados e gestores de empresas que elevaram seus padrões de segurança com nossas soluções.",
    featured: {
      text: "Contratamos o treinamento in-company de NR-10 e NR-35 com a CENADT. O conhecimento dos instrutores, todos veteranos de resgate militar, fez total diferença na postura de segurança dos nossos colaboradores. Recomendo fortemente!",
      name: "Davi Silveira",
      role: "Gerente de EHS — Indústria Metalúrgica Ceará",
    },
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
    ],
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
    ],
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

async function main() {
  const client = new Client({
    connectionString: connectionString,
    ssl: { rejectUnauthorized: false }
  });

  try {
    console.log("Connecting to Postgres database...");
    await client.connect();
    console.log("Connected successfully!");

    // 1. Create site_content table
    console.log("Creating 'site_content' table if not exists...");
    await client.query(`
      CREATE TABLE IF NOT EXISTS site_content (
        key text PRIMARY KEY,
        value jsonb NOT NULL,
        updated_at timestamp with time zone DEFAULT timezone('utc'::text, now())
      );
    `);
    console.log("'site_content' table verified.");

    // 2. Insert default sections
    console.log("Seeding default sections into 'site_content'...");
    for (const [key, value] of Object.entries(defaultContent)) {
      await client.query(`
        INSERT INTO site_content (key, value)
        VALUES ($1, $2)
        ON CONFLICT (key) DO NOTHING;
      `, [key, JSON.stringify(value)]);
    }
    console.log("Database seeded successfully.");

    // 3. Setup Storage Bucket
    console.log("Setting up Supabase Storage bucket 'site-media'...");
    await client.query(`
      INSERT INTO storage.buckets (id, name, public)
      VALUES ('site-media', 'site-media', true)
      ON CONFLICT (id) DO NOTHING;
    `);

    // Enable security policies on storage
    console.log("Creating Storage security policies...");
    
    // RLS enabled
    await client.query(`ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;`).catch(() => {});

    // Public Select
    await client.query(`DROP POLICY IF EXISTS "Public Access" ON storage.objects;`).catch(() => {});
    await client.query(`
      CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'site-media');
    `);

    // Admin Insert/Update/Delete (for authenticated users)
    await client.query(`DROP POLICY IF EXISTS "Admin Upload" ON storage.objects;`).catch(() => {});
    await client.query(`
      CREATE POLICY "Admin Upload" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'site-media');
    `);
    
    await client.query(`DROP POLICY IF EXISTS "Admin Update" ON storage.objects;`).catch(() => {});
    await client.query(`
      CREATE POLICY "Admin Update" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'site-media');
    `);

    await client.query(`DROP POLICY IF EXISTS "Admin Delete" ON storage.objects;`).catch(() => {});
    await client.query(`
      CREATE POLICY "Admin Delete" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'site-media');
    `);

    console.log("Storage bucket and policies configured successfully.");

  } catch (err) {
    console.error("Database setup failed:", err);
  } finally {
    await client.end();
  }

  // 4. Create admin user using Supabase JS client
  try {
    console.log("Initializing Supabase Admin JS Client...");
    const supabase = createClient(supabaseUrl, serviceRoleKey);

    const adminEmail = "admin@cenadt.com";
    const adminPassword = "adminCenadt2026!";

    console.log(`Checking/Creating admin user: ${adminEmail}...`);
    const { data: usersData, error: usersError } = await supabase.auth.admin.listUsers();
    
    if (usersError) {
      console.error("Failed to list users via Auth Admin API:", usersError.message);
    } else {
      const existingUser = usersData.users.find(u => u.email === adminEmail);
      if (existingUser) {
        console.log(`User ${adminEmail} already exists. Skipping user creation.`);
      } else {
        const { data, error } = await supabase.auth.admin.createUser({
          email: adminEmail,
          password: adminPassword,
          email_confirm: true
        });

        if (error) {
          console.error("Failed to create admin user:", error.message);
        } else {
          console.log(`Admin user created successfully!`);
          console.log(`Credentials: \n  Email: ${adminEmail} \n  Password: ${adminPassword}`);
        }
      }
    }
  } catch (err) {
    console.error("Failed to create user via Auth Admin API:", err);
  }
}

main();
