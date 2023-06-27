"use client";
import style from "./Home.module.scss"
import Carateristicas from "@/components/caracteristicas/Carateristicas";

export default function Home(){
    return(
        <>
        <section className={style.container}>
            <p className={style.title}><span>T</span>U SOCIO EN TECNOLOGÍA</p>
            <p className={style.description}>Maximiza tus resultados con tecnología de punta</p>
            <button type="submit" className={style.btnContactUs}>Contáctanos</button>
        </section>
        </>
    )
}