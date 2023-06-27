"use client";

import Description from "@/components/Description";
import IconsBar from "@/components/IconsBar";
import { useState } from "react";

import style from "./Home.module.scss"


export default function Home(){
    return(
      <>
        <section className={style.container}>
            <p className={style.title}><span>T</span>U SOCIO EN TECNOLOGÍA</p>
            <p className={style.description}>Maximiza tus resultados con tecnología de punta</p>
            <button type="submit" className={style.btnContactUs}>Contáctanos</button>
        </section>
<IconsBar/>
            <Description/>
              </>
    )
}