import Image from "next/image";
import styles from "./infinite.module.css";

interface Brand {
  name: string;
  src: string;
}

const BRANDS: Brand[] = [
  { name: "HTML", src: "/code-brands/html.svg" },
  { name: "CSS", src: "/code-brands/css.svg" },
  { name: "JavaScript", src: "/code-brands/js.svg" },
  { name: "React js", src: "/code-brands/react.svg" },
  { name: "Next.js", src: "/code-brands/next.svg" },
  { name: "Tailwind", src: "/code-brands/tailwind.svg" },
  { name: "Node.js", src: "/code-brands/node.svg" },
  { name: "MongoDB", src: "/code-brands/mongo.svg" },
  { name: "npm", src: "/code-brands/npm.svg" },
  { name: "GitHub", src: "/code-brands/github.svg" }
];

export default function Infinite() {
  // הכפלה מרובעת מונעת לחלוטין את באג "השובל הריק" במסכים רחבים
  const scrollBrands = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section className={styles.brands} aria-label="Our Tech Stack" dir="ltr">
      <div className={styles.track}>
        {scrollBrands.map((brand, index) => (
          <div key={`${brand.name}-${index}`} className={styles.logoWrapper}>
            <Image
              src={brand.src}
              alt={`${brand.name} logo`}
              width={50} 
              height={50}
              style={{ width: "auto", height: "100%" }}
            />
            {/* הטקסט שיופיע במעבר עכבר */}
            <span className={styles.brandName}>{brand.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}