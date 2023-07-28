import style from "./Description.module.scss";
import Image from "next/legacy/image";
import a from "@/assets/img/VectorA.png";
import l from "@/assets/img/VectorL.png";
import b from "@/assets/img/VectorB.png";
import b2 from "@/assets/img/VectorB2.png";
import u from "@/assets/img/VectorU.png";
import s from "@/assets/img/VectorS.png";
import albbus from "@/assets/img/Albbus.png";

export default function Description() {
  return (
    <section className={style.descriptionCont}>
      <div className={style.create}>
        <p>&quot;Convierte tus ideas en realidad con</p>
        <div className={style.albbusCont}>
          <span className={style.letterCont}>
            <Image src={a} alt="A" />
          </span>
          <span className={style.letterCont}>
            <Image src={l} alt="L" />
          </span>
          <span className={style.letterCont}>
            <Image src={b} alt="B" />
          </span>
          <span className={style.letterCont}>
            <Image src={b2} alt="B" />
          </span>
          <span className={style.letterCont}>
            <Image src={u} alt="U" />
          </span>
          <span className={style.letterCont}>
            <Image src={s} alt="S" />
          </span>
          &quot;
        </div>
      </div>
      <div className={style.image}>
        <Image src={albbus} alt="technologies" />
      </div>
      <div className={style.solutions}>
        <p>
          Todas nuestras soluciones tecnológicas son escalables y adaptables a
          medida que tu empresa
        </p>
        <span>crece y evoluciona.</span>
      </div>
    </section>
  );
}
