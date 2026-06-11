"use client";

import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
        <div className={`container ${styles.container}`}>
          {/* Typographic Logo with SVG */}
          <a href="#home" className={styles.logo} onClick={closeMenu}>
            <svg
              className={styles.logoIcon}
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span className={styles.logoText}>
              CENA<span className={styles.logoSub}>DT</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className={styles.nav}>
            <a href="#home" className={styles.navLink}>Início</a>
            <a href="#sobre" className={styles.navLink}>Sobre Nós</a>
            <a href="#servicos" className={styles.navLink}>Cursos & Serviços</a>
            <a href="#diferenciais" className={styles.navLink}>Diferenciais</a>
            <a href="#processo" className={styles.navLink}>Como Funciona</a>
            <a href="#depoimentos" className={styles.navLink}>Depoimentos</a>
            <a href="#faq" className={styles.navLink}>FAQ</a>
          </nav>

          {/* Action Buttons */}
          <div className={styles.actions}>
            <a
              href="https://api.whatsapp.com/send?phone=5585999000534&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20cursos%20e%20serviços%20da%20CENADT."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-blue"
              style={{ padding: '0.55rem 1.15rem', fontSize: '0.85rem' }}
            >
              Portal do Aluno
            </a>
            <a
              href="#cta"
              className="btn btn-primary"
              style={{ padding: '0.55rem 1.15rem', fontSize: '0.85rem' }}
            >
              Falar com Consultor
            </a>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <button
            className={`${styles.burger} ${isMenuOpen ? styles.burgerActive : ""}`}
            onClick={toggleMenu}
            aria-label="Abrir Menu de Navegação"
            aria-expanded={isMenuOpen}
          >
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
          </button>
        </div>
      </header>

      {/* Backdrop for mobile drawer */}
      <div
        className={`${styles.backdrop} ${isMenuOpen ? styles.backdropActive : ""}`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Drawer */}
      <nav className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuActive : ""}`}>
        <a href="#home" className={styles.mobileNavLink} onClick={closeMenu}>
          Início
        </a>
        <a href="#sobre" className={styles.mobileNavLink} onClick={closeMenu}>
          Sobre Nós
        </a>
        <a href="#servicos" className={styles.mobileNavLink} onClick={closeMenu}>
          Cursos & Serviços
        </a>
        <a href="#diferenciais" className={styles.mobileNavLink} onClick={closeMenu}>
          Diferenciais
        </a>
        <a href="#processo" className={styles.mobileNavLink} onClick={closeMenu}>
          Como Funciona
        </a>
        <a href="#depoimentos" className={styles.mobileNavLink} onClick={closeMenu}>
          Depoimentos
        </a>
        <a href="#faq" className={styles.mobileNavLink} onClick={closeMenu}>
          FAQ
        </a>
        <div className={styles.mobileActions}>
          <a
            href="https://api.whatsapp.com/send?phone=5585999000534&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20cursos%20e%20serviços%20da%20CENADT."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            onClick={closeMenu}
          >
            Portal do Aluno
          </a>
          <a
            href="#cta"
            className="btn btn-primary"
            onClick={closeMenu}
          >
            Falar com Consultor
          </a>
        </div>
      </nav>
    </>
  );
}
