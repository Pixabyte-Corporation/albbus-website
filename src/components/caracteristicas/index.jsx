import React from "react";
import style from "./Caracteristicas.module.scss";

import caracteristicasStock from "@/assets/img/caracteristicasStock.png";
import CaracteristicasOpciones from "./CaracteristicasOpciones";

import Image from "next/image";
import rocketIcon from "@/assets/icons/rocket.svg";
import gearIcon from "@/assets/icons/gear.svg";
import shieldIcon from "@/assets/icons/shield.svg";
import starIcon from "@/assets/icons/star.svg";

const Carateristicas = () => {
  return (
    <div className={style.contenedorPrincipal}>
      <div className={style.contenedorSecundario}>
        <div className={style.contenedor}>
          <div className={style.caracteristicasStock}>
            <h3 className={style.copymobile}>
              ¿Te esfuerzas en mantener tu negocio al día en un mundo que cambia
              rápidamente?
            </h3>
            <h3 className={style.copymobilebold}>
              Nosotros nos encargamos de esa parte.
            </h3>
            <Image
              src={caracteristicasStock}
              alt="Stock1"
              title="Stock1"
              className={style.caracteristicasStock}
            />
          </div>
          <h3 className={style.copy}>
            ¿Te esfuerzas en mantener tu negocio al día en un mundo que cambia
            rápidamente? Nosotros nos encargamos de esa parte.
          </h3>
        </div>
        <span className={style.opciones}>
          <CaracteristicasOpciones
            className={style.opcion}
            icon={rocketIcon}
            name={"Innovación"}
          />
          <CaracteristicasOpciones icon={gearIcon} name={"Personalización"} />
          <CaracteristicasOpciones
            icon={shieldIcon}
            name={"Seguridad y Vanguardia"}
          />
          <CaracteristicasOpciones icon={starIcon} name={"Experiencia"} />
        </span>
      </div>
      <button className={style.boton}>Conoce nuestros servicios</button>
      <p className={style.texto}>
        Sea que estés buscando mejorar tu eficiencia, expandir tu alcance,
        innovar en tu industria o simplemente mejorar tus operaciones actuales,
        tenemos las habilidades y la experiencia para hacerlo posible.
      </p>
    </div>
  );
};

export default Carateristicas;
