import type { Metadata } from "next";
import localFont from "next/font/local"; // אנחנו משתמשים רק בזה עכשיו
import { getDictionary } from "../../dictionaries/getDictionary";
import Header from "../components/Header/Header";
import "../globals.css";


export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ lang: 'he' | 'en' | 'es' }> 
}): Promise<Metadata> {
  // 1. שולפים את השפה מהנתיב
  const { lang } = await params;
  
  // 2. מביאים את המילון המתאים לשפה
  const dict = await getDictionary(lang);

  // 3. מחזירים את הכותרת והתיאור הדינמיים ל-SEO
  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

// 1. הגדרת הפונט המקומי לאנגלית וספרדית
const customSpanglishFontH = localFont({
  src: [
    {
      path: "../fonts/FuturaCyrillicDemi.ttf", // שנה לשם הקובץ האמיתי שלך
      style: "normal",
    }
  ],
  variable: "--fontH-en-es", // השם שנשתמש בו ב-CSS
});

const customSpanglishFontp = localFont({
  src: [
    {
      path: "../fonts/FuturaCyrillicLight.ttf", // שנה לשם הקובץ האמיתי שלך
      weight: "400",
      style: "normal",
    }
  ],
  variable: "--fontP-en-es", // השם שנשתמש בו ב-CSS
});

// 2. הגדרת הפונט המקומי לעברית
const customHebrewFontH = localFont({
  src: [
    {
      path: "../fonts/Heebo-SemiBold.ttf", // שנה לשם הקובץ האמיתי שלך
      weight: "400",
      style: "normal",
    },
    // אפשר להוסיף כאן עוד משקלים (Bold, Light) בדיוק כמו למעלה
  ],
  variable: "--fontH-he", 
});

const customHebrewFontP = localFont({
  src: [
    {
      path: "../fonts/Heebo-Light.ttf", // שנה לשם הקובץ האמיתי שלך
      style: "normal",
    },
    // אפשר להוסיף כאן עוד משקלים (Bold, Light) בדיוק כמו למעלה
  ],
  variable: "--fontp-he", 
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: "he" | "en" | "es" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const dir = lang === "he" ? "rtl" : "ltr";

  return (
    /* טוענים את שני משתני הפונט לתוך ה-HTML */
    <html lang={lang} dir={dir} className={`${customSpanglishFontH.variable} ${customSpanglishFontp.variable} ${customHebrewFontH.variable} ${customHebrewFontP.variable}`}>
      <body>
        <Header lang={lang} dict={dict} />
        {children}
      </body>
    </html>
  );
}