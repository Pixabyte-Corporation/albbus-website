import "../../app/globals.scss";
import style from "./Cards.module.scss";

import Image from "next/image";
import CardList from "./CardList";

export default function Cards() {
  return (
    <div className={style.cardsContainer}>
      {CardList.map((element, index) => (
        <article key={index} className={style.container}>
          <Image src={element.src} alt={element.alt} className={style.img}/>
          <p className={style.title}>{element.title}</p>
          <p className={style.description}>{element.description}</p>
        </article>
      ))}
    </div>
  );
}
