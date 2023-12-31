import "../../app/globals.scss";
import style from "./Banner.module.scss";
import Link from "next/link";

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
        <Link href="#contactanos" className={style.btnContactUs}>
          Contáctanos
        </Link>
      </div>
    </section>
  );
}
