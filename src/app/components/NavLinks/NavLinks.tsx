"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./NavLinks.module.css";

// הוספנו סימן שאלה (?) שמסמן ל-TypeScript שהמילון עשוי להיות ריק זמנית
interface NavLinksProps {
  dict?: {
    home: string;
    about: string;
    projects: string;
    contact: string;
  };
}

export default function NavLinks({ dict }: NavLinksProps) {
  const [isOpen, setIsOpen] = useState(false);

  // רשת הביטחון שלנו: אם המילון חסר, נשתמש בערכי ברירת מחדל כדי למנוע קריסה
  const safeDict = dict || {
    home: "",
    about: "",
    projects: "",
    contact: ""
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button
        className={`${styles.toggleButton} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle Navigation"
        type="button"
      >
        <span className={styles.hamburger}></span> {/* אפשר להוסיף אייקון כאן */}
      </button>

      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link href="#home" className={styles.menuLink} onClick={closeMenu}>
              {safeDict.home}
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="#about" className={styles.menuLink} onClick={closeMenu}>
              {safeDict.about}
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="#projects" className={styles.menuLink} onClick={closeMenu}>
              {safeDict.projects}
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="#contact" className={styles.menuLink} onClick={closeMenu}>
              {safeDict.contact}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}