import style from "./AlbbusDescription.module.scss";
import Image from "next/legacy/image";
import a from "@/assets/images/VectorA.png"
import l from "@/assets/images/VectorL.png"
import b from "@/assets/images/VectorB.png"
import b2 from "@/assets/images/VectorB2.png"
import u from "@/assets/images/VectorU.png"
import s from "@/assets/images/VectorS.png"
import aVector from "@/assets/images/VectorAImage.png"
import ceo from "@/assets/images/CEO.png"

export default function AlbbusDescription(){
    return(
        <article>
            <section className={style.module1}>
                <div className={style.aVector}>
                    <Image src={aVector} layout="responsive" alt="Icon"/>
                </div>
                <div className={style.textCont}>
                    <span className={style.enText}>En
                        <div  className={style.albbusCont}>
                            <span className={style.letterCont}><Image src={a} alt="A"/></span>
                            <span className={style.letterCont}><Image src={l} alt="A"/></span>
                            <span className={style.letterCont}><Image src={b} alt="A"/></span>
                            <span className={style.letterCont}><Image src={b2} alt="A"/></span>
                            <span className={style.letterCont}><Image src={u} alt="A"/></span>
                            <span><Image src={s} alt="S"/></span>
                        </div>
                    </span>
                    <p>contamos con los recursos y el compromiso para <span className={style.blueSpan}>resolver</span> todas tus <span className={style.blueSpan}>necesidades.</span></p>
                    <button className={style.contactBtn}>Contáctanos</button>
                </div>
                <div className={style.ceoCont}>
                    <Image src={ceo} layout="intrinsic" alt="CEO"/>
                </div>
            </section>
            <section className={style.module2}>
                <div className={style.module2textCont}>
                    <p>Desde 2021 trabajamos con varios tipos de industrias y clientes en la creación de soluciones personalizadas para satisfacer sus necesidades específicas. Desde el principio, nuestra prioridad ha sido entender a nuestros clientes y lo que necesitan para tener éxito en su negocio.</p>
                    <p className={style.module2text2}>Para lograr esto, creamos un equipo de desarrollo y diseño de producto altamente capacitado, compuesto por expertos en tecnología y diseño, que trabajan en estrecha colaboración con los clientes para comprender sus requisitos y expectativas
                    </p>
                </div>
            </section>
        </article>
    )
}