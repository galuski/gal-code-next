import Link from "next/link";
import Image from "next/image";
import styles from "./Logo.module.css";

// 1. מגדירים את הנתונים שהקומפוננטה מצפה לקבל
interface LogoProps {
  lang: string;
  brandName?: string;
}

export default function Logo({ lang, brandName = "Gal-Code" }: LogoProps) {
  return (
    <Link href={`/${lang}`} style={{ textDecoration: "none", display: "inline-block" }}>
      <div className={styles.logo}>
        <Image 
          src="/logo.svg" 
          alt={`${brandName} Logo`} // עדכנתי גם את טקסט הנגישות שיהיה דינמי
          width={50} 
          height={50} 
          priority 
          style={{ width: "auto", height: "auto" }} 
        />
        {/* 2. מחליפים את הטקסט הקשיח במשתנה הדינמי */}
        <p className={styles.p}>{brandName}</p>
      </div>
    </Link>
  );
}