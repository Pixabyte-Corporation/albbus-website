"use client";
import { useState } from "react";
import style from "./cardtest.module.scss";
import rgline from "@/assets/icons/right-line.svg";

export default function Cardtestimonial() 
{
  return (
    <section className={style.containercardtest}>
      <div className={style.cardtest}>
        <p className={style.textsintax}>
          "Fue una de las mejores decisiones que tomé <br></br>
          para mi negocio. El software que implementaron <br></br>
          ha impulsado nuestro crecimiento y nos ha <br></br>
          dado una ventaja competitiva en el mercado."
        </p>
        <h2 className={style.subsintax}>Sintax</h2>
        <span>
      <button className={style.rightline}></button>
      </span>
      </div>
    </section>
  );
}
