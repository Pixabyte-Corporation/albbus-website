import "../../app/globals.scss";
import style from "./Banner.module.scss";

export default function Banner() {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <p className={style.title}>
          <span>T</span>U SOCIO EN TECNOLOGÍA
        </p>
        <div className={style.titlePhone}>TU SOCIO <br /> EN TECNOLOGÍA</div>
        <p className={style.description}>
          Maximiza tus resultados con tecnología de punta
        </p>
        <a href="#contactanos" className={style.btnContactUs}>
          Contáctanos
        </a>
      </div>
    </section>
  );
}
