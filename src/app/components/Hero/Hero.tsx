import Link from "next/link";
import styles from "./Hero.module.css";
import Infinite from "../infinite/infinite";

interface HeroProps {
  dict: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
}

export default function Hero({ dict }: HeroProps) {
  // הגנת קריסה קטנה ליתר ביטחון
  if (!dict) return null;

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>{dict.title}</h1>
        <h2 className={styles.subtitle}>
          <span className={styles.underline}>{dict.subtitle}</span>
        </h2>
        <p className={styles.description}>{dict.description}</p>

        <Link href="#contact" className={styles.ctaButton}>
          {dict.cta}
        </Link>
      </div>
      <Infinite/>
    </section>
  );
}
