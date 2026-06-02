import styles from "./Title.module.css";

interface TitleProps {
  title: string;
  color?: string; // מקבלים רק את הצבע כמחרוזת
}

export default function Title({ title, color }: TitleProps) {
  return (
    <div className={styles.titleContainer}>
      <span className={styles.line} />
      <h3 className={styles.text} style={color ? { color: color } : undefined}>
        {title}
      </h3>
    </div>
  );
}