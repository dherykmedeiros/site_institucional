import React from "react";
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

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh" }}>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Process />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
