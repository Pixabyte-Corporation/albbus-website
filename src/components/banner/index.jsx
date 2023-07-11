import "../../app/globals.scss";
import style from "./Banner.module.scss";

export default function Banner() {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <p className={style.title}>
          <span>T</span>U SOCIO EN TECNOLOGÍA
        </p>
        <p className={style.description}>
          Maximiza tus resultados con tecnología de punta
        </p>
        <button type="submit" className={style.btnContactUs}>
          Contáctanos
        </button>
      </div>
    </section>
  );
}
