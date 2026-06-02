import Logo from "../Logo/Logo";
import NavLinks from "../NavLinks/NavLinks";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import styles from "./Header.module.css";

interface HeaderProps {
  lang: string;
  dict: any; // נעביר את המילון השלם וניתן לכל קומפוננטה את מה שהיא צריכה
}

export default function Header({ lang, dict }: HeaderProps) {
  return (
    <header className={styles.header}>
      {/* <Logo lang={lang} brandName={dict?.brand} /> */}
      <LanguageSwitcher />

      <div className={styles.actions}>
        <NavLinks dict={dict?.navigation} />{" "}
      </div>
    </header>
  );
}
