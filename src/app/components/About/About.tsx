import Image from "next/image";
import Title from "../Title/Title";
import styles from "./About.module.css";

interface About {
  dict: {
    title: string;
    greeting: string;
    academy: string;
    whyWeb: string;
    knowledge: string;
    difference: string;
    presence: string;
  };
}

export default function About({ dict }: About) {
  if (!dict) return null;

  return (
      <section id="about" className={styles.about}>
        <Title title={dict.title} />
        <div className={styles.container}>
          <div className={styles.textWrapper}>
            <p>{dict.greeting}</p>
            <p dangerouslySetInnerHTML={{ __html: dict.academy }} />
            <p dangerouslySetInnerHTML={{ __html: dict.whyWeb }} />
            <p>{dict.knowledge}</p>
            <p dangerouslySetInnerHTML={{ __html: dict.difference }} />
            <p dangerouslySetInnerHTML={{ __html: dict.presence }} />
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="/my.jpg"
              alt="Laptop and Mobile Development"
              width={500}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </section>
  );
}
