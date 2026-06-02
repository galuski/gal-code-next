import MyServicesCard from "../MyServicesCard/MyServicesCard";
import Title from "../Title/Title";
import styles from "./MyServices.module.css";

interface ServiceItem {
  title: string;
  description: string;
}

interface MyServices {
  dict: {
    title: string;
    items: {
      websites: ServiceItem;
      seo: ServiceItem;
      design: ServiceItem;
      accessibility: ServiceItem;
      multilingual: ServiceItem;
      copywriting: ServiceItem;
    };
  };
}

export default function MyServices({ dict }: MyServices) {
  if (!dict) return null;

  const servicesData = [
    {
      id: 1,
      iconSrc: "/services-icons/1.svg",
      ...dict.items.websites,
    },
    {
      id: 2,
      iconSrc: "/services-icons/2.svg",
      ...dict.items.design,
    },
        {
      id: 3,
      iconSrc: "/services-icons/3.svg",
      ...dict.items.copywriting,
    },
        {
      id: 4,
      iconSrc: "/services-icons/4.svg",
      ...dict.items.seo,
    },
    {
      id: 5,
      iconSrc: "/services-icons/5.svg",
      ...dict.items.accessibility,
    },
    {
      id: 6,
      iconSrc: "/services-icons/6.svg",
      ...dict.items.multilingual,
    },

  ];

  return (
    <section className={styles.container}>
      <Title title={dict.title} color='white'/>

      <div className={styles.cardsContainer}>
        {servicesData.map((service) => (
          <MyServicesCard
            key={service.id}
            number={service.id}
            iconSrc={service.iconSrc}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}
