import { getSiteContent } from "@/lib/db";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import Differentials from "@/components/Differentials/Differentials";
import Process from "@/components/Process/Process";
import Testimonials from "@/components/Testimonials/Testimonials";
import Faq from "@/components/Faq/Faq";
import Cta from "@/components/Cta/Cta";
import Footer from "@/components/Footer/Footer";

export default async function Home() {
  const content = await getSiteContent();

  return (
    <>
      <Header general={content.general} header={content.header} />
      <main style={{ minHeight: "100vh" }}>
        <Hero general={content.general} hero={content.hero} />
        <About about={content.about} />
        <Services services={content.services} />
        <Differentials differentials={content.differentials} />
        <Process process={content.process} />
        <Testimonials testimonials={content.testimonials} />
        <Faq faq={content.faq} />
        <Cta cta={content.cta} />
      </main>
      <Footer footer={content.footer} general={content.general} />
    </>
  );
}
