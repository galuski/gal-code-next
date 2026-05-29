import { getDictionary } from "../../dictionaries/getDictionary";
import Hero from "../components/Hero/Hero";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "he" | "en" | "es" }>;
}) {
  const { lang } = await params;

  // מושכים את המילון של השפה הנוכחית בדף הבית
  const dict = await getDictionary(lang);

  return (
    <main>
      <Hero dict={dict.hero} />
    </main>
  );
}
