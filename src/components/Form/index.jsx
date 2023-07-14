"use client";
import { useState } from "react";
import Image from "next/image";
import style from "./Formcontact.module.scss";
import lada from "@/assets/icons/mexico.svg";

export default function Formcontact() {
  return (
    <section className={style.container}>
      <h1 className={style.title}>Contáctanos</h1>
      <hr className={style.line}></hr>
      <p className={style.description}>¿Qué quieres solucionar?</p>
      <form>
      <input
        className={style.input1}
        type="text"
        placeholder=""
      />
      <div className={style.inputform}>
        <div className={style.column}>
          <p>Nombre</p>
          <input
            className={style.input}
            type="text"
            placeholder="Ingresa tu nombre"
          />
        </div>
        <div className={style.column}>
          <p>Apellido</p>
          <input
            className={style.input}
            type="text"
            placeholder="Ingresa tu apellido"
          />
        </div>
      </div>
      <div className={style.inputform}>
        <div className={style.column}>
          <p>E-mail</p>
          <input
            className={style.input}
            type="text"
            placeholder="Ingresa tu nombre"
          />
        </div>
        <div className={style.column}>
          <p>Empresa</p>
          <input
            className={style.input}
            type="text"
            placeholder="Ingresa el nombre"
          />
        </div>
      </div>
      <p className={style.num}>Número Celular</p>
      <div className={style.inputRow}>
        <span className={style.Inputlada}>
        <span className={style.imagespan}></span>
          <input className={style.input3} type="tel" pattern="[0-9]+" placeholder="+52"  />
          <input
            className={style.input2}
            type="text"
            placeholder="Número celular 10 dígitos"
          />
        </span>
      </div>
      </form>
      <button className={style.enviar} type="button">
        Enviar
      </button>
    </section>
  );
}
