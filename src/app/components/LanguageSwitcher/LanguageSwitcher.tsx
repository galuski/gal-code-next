"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./LanguageSwitcher.module.css"; 

const languages = [
  { code: "en", label: "English", icon: "/flags/en.png" }, 
  { code: "es", label: "Español", icon: "/flags/es.png" },
  { code: "he", label: "עברית", icon: "/flags/he.png" },
];

export default function SwitchLang() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // במקרה שאין נתיב, נחזיר לברירת המחדל (עברית)
  const currentLocale = pathname ? pathname.split("/")[1] : "he";
  // fallback חכם כדי למנוע קריסה אם משום מה השפה לא תמצא
  const currentLanguageData = languages.find(lang => lang.code === currentLocale) || languages[0];

  const redirectedPathName = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale; 
    return segments.join("/");
  };

  return (
    <div className={styles.languageSwitcher}>
      <button 
        className={styles.button} 
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Change language"
      >
        <Image 
          src={currentLanguageData.icon} 
          alt={currentLanguageData.label} 
          className={styles.flagIcon} 
              width={28} 
              height={24} 
        />
        
        <span>{currentLanguageData.label}</span>
        
        <span style={{ fontSize: "10px", marginLeft: "2px" }}>▼</span>
      </button>

      <div className={`${styles.dropdown} ${isOpen ? styles.open : ""}`}>
        {languages.map((lang) => (
          <Link
            key={lang.code}
            href={redirectedPathName(lang.code)}
            className={styles.langOption}
            onClick={() => setIsOpen(false)}
            lang={lang.code}
            hrefLang={lang.code} // מצוין ל-SEO עבור קישורי שפות
          >
            <Image 
              src={lang.icon} 
              alt={lang.label} 
              className={styles.flagIcon} 
              width={28} 
              height={24} 
            />
            <span>{lang.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}