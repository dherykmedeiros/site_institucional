# CENADT - Site Institucional Premium

Este projeto é um site institucional premium, moderno e responsivo desenvolvido para o **CENADT (Centro Avançado de Treinamentos & Serviços)**. 

Desenvolvido utilizando **Next.js** (App Router), **TypeScript** e **CSS Modules** (CSS Puro), garantindo máxima performance, modularização, carregamento instantâneo e total fidelidade de design sem a necessidade de frameworks CSS pesados.

---

## 🚀 Tecnologias Utilizadas

- **Next.js 15.1.0** (App Router)
- **React 19**
- **TypeScript**
- **Vanilla CSS (CSS Modules)** para estilos modulares exclusivos e livre de padrões genéricos de IA
- **SEO integrado** com metadados nativos e tags semânticas HTML5

---

## 📂 Estrutura do Projeto

```text
├── public/                 # Imagens, ícones e mídias estáticas
└── src/
    ├── app/                # Estrutura do App Router do Next.js
    │   ├── layout.tsx      # Configuração global de fontes, metadados de SEO e viewport
    │   ├── page.tsx        # Página principal agregadora das seções
    │   └── globals.css     # Estilos globais e tokens de design (cores, variáveis, resets)
    └── components/         # Componentes organizados e modulares
        ├── Header/         # Menu de navegação superior com efeito blur (glassmorphism)
        ├── Hero/           # Banner inicial de impacto com slogan e conversão rápida
        ├── About/          # Apresentação institucional e estatísticas chaves
        ├── Services/       # Portfólio interativo de Cursos e Assessoria
        ├── Differentials/  # Diferenciais competitivos da empresa
        ├── Process/        # Timeline da jornada do aluno ou da assessoria técnica
        ├── Testimonials/   # Depoimentos reais/adaptados de clientes e alunos
        ├── Faq/            # Acordeon interativo com dúvidas frequentes
        ├── Cta/            # Chamada final persuasiva de conversão para o WhatsApp
        └── Footer/         # Rodapé completo com dados legais (CNPJ, Endereço)
```

---

## 💻 Como Executar Localmente

Quando tiver o **Node.js** instalado na sua máquina, siga os passos abaixo:

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acesse o site:**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

4. **Gerar build de produção:**
   ```bash
   npm run build
   ```

---

## ⚡ Como Implantar na Vercel

Como o projeto está estruturado no padrão moderno do Next.js, a implantação na Vercel é automática e extremamente simples:

1. Suba este repositório para o seu **GitHub**, **GitLab** ou **Bitbucket**.
2. Acesse a [Vercel](https://vercel.com/) e faça login com sua conta do provedor git.
3. Clique em **"Add New"** > **"Project"**.
4. Importe o repositório deste projeto.
5. A Vercel detectará automaticamente as configurações de build do Next.js. Basta clicar em **"Deploy"**.
6. Em menos de 1 minuto, o site estará no ar com HTTPS gratuito e performance global via Edge Network.
