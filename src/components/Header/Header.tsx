"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./Header.module.css";
import { defaultContent } from "@/lib/defaultContent";

interface HeaderProps {
  general?: typeof defaultContent.general;
  header?: typeof defaultContent.header;
}

export default function Header({ general, header }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const logoText = general?.logoText ?? defaultContent.general.logoText;
  const logoSub = general?.logoSub ?? defaultContent.general.logoSub;
  const logoImage = general?.logoImage ?? defaultContent.general.logoImage;
  const whatsappUrl = general?.whatsappUrl ?? defaultContent.general.whatsappUrl;
  const navItems = header?.navItems ?? defaultContent.header.navItems;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
    >
      <div className={styles.headerInner}>
        {/* Logo */}
        <a href="#inicio" className={styles.logo}>
          {logoImage ? (
            <img src={logoImage} alt="CENADT Logo" style={{ maxHeight: "40px", width: "auto" }} />
          ) : (
            <>
              {logoText}<span className={styles.logoAccent}>{logoSub}</span>
            </>
          )}
        </a>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.cta} ${styles.ctaDesktop}`}
        >
          Fale Conosco
        </a>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`${styles.mobileOverlay} ${mobileOpen ? styles.mobileOverlayOpen : ""}`}
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={styles.mobileNavLink}
            onClick={closeMobile}
          >
            {item.label}
          </a>
        ))}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mobileCta}
          onClick={closeMobile}
        >
          Fale Conosco
        </a>
      </div>
    </header>
  );
}
