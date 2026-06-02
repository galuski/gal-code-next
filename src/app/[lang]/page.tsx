import { getDictionary } from "../../dictionaries/getDictionary";
import About from "../components/About/About";
import Hero from "../components/Hero/Hero";
import MyServices from "../components/MyServices/MyServices";

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
      <About dict={dict.about}/>
      <MyServices dict={dict.Myservices}/>
    </main>
  );
}
