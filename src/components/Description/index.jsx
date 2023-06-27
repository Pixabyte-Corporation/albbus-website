import style from "./Description.module.scss";
import Image from "next/legacy/image";
import a from "@/assets/Images/VectorA.png"
import l from "@/assets/Images/VectorL.png"
import b from "@/assets/Images/VectorB.png"
import b2 from "@/assets/Images/VectorB2.png"
import u from "@/assets/Images/VectorU.png"
import s from "@/assets/Images/VectorS.png"
import albbus from "@/assets/Images/Albbus.png"

export default function Description(){
    return(
        <section className={style.descriptionCont}>
            <div className={style.create}>
                <p>"Convierte tus ideas en realidad con</p>
                <div  className={style.albbusCont}>
                    <span className={style.letterCont}><Image src={a} alt="A"/></span>
                    <span className={style.letterCont}><Image src={l} alt="A"/></span>
                    <span className={style.letterCont}><Image src={b} alt="A"/></span>
                    <span className={style.letterCont}><Image src={b2} alt="A"/></span>
                    <span className={style.letterCont}><Image src={u} alt="A"/></span>
                    <span><Image src={s} alt="S"/></span>
                    "
                </div>
            </div>
            <Image src={albbus} alt="Mujer mirando la mano de un hombre que señala una computadora"/>
            <div className={style.solutions}>
            <p>Todas nuestras soluciones tecnológicas son escalables y adaptables a medida que tu empresa</p>
            <span>crece y evoluciona.</span>
            </div>
        </section>
    )
}