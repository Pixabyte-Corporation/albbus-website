"use client";
import { useState } from "react";
import style from "./Contact.module.scss"
import Formcontact from "@/components/Form";


export default function Contact(){

    return(
<section className={style.containerform}>
<p className={style.title}>¿Cómo podemos ayudarte?</p>
<Formcontact />
</section>
    )
}

