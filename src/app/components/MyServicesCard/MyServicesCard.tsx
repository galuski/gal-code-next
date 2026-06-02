import styles from "./MyServicesCard.module.css";

interface CardProps {
  number: number;
  iconSrc: string;
  title: string;
  description: string;
}

export default function MyServicesCard({
  number,
  iconSrc,
  title,
  description,
}: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <div
          className={styles.iconMask}
          style={{
            WebkitMaskImage: `url(${iconSrc})`,
            maskImage: `url(${iconSrc})`,
          }}
        />
      </div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
