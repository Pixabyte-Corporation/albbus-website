import "../../app/globals.scss";
import style from "./CardsWork.module.scss";
import Cards from "./Cards.jsx";

export default function CardsWork() {
  return (
    <section className={style.container}>
      <p className={style.title}>Toma el control total de tus desarrollos</p>
      <Cards />
    </section>
  );
}
