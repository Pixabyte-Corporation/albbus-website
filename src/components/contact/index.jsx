"use client";
import style from "./Contact.module.scss";
import Formcontact from "@/components/Form";

export default function Contact(){

    return(
        <section className={style.containerform} id="contactanos">
            <div className={style.containertitle}>
            <p className={style.title}>¿Cómo podemos ayudarte?</p>
            </div>
            <Formcontact />
        </section>
    )
}
