import React from "react";
import style from "./OurWork.module.scss";

const OurWork = () => {
  return (
    <div className={style.mainContainer}>
      <h1 className={style.title}>¿Cómo cambiamos al mundo?</h1>
      <h2 className={style.text}>
        Todas nuestras soluciones tecnológicas son escalables y adaptables a
        medida que tu empresa crece y evoluciona.
      </h2>
      <div className={style.descubreContainer}>
        <h1 className={style.descubre}>d</h1>
        <h1 className={style.descubre}>e</h1>
        <h1 className={style.descubre}>s</h1>
        <h1 className={style.descubre}>c</h1>
        <h1 className={style.descubre}>u</h1>
        <h1 className={style.descubre}>b</h1>
        <h1 className={style.descubre}>r</h1>
        <h1 className={style.descubre}>e</h1>
      </div>
      <h3 className={style.copy}>Lo que podemos hacer por ti.</h3>
    </div>
  );
};

export default OurWork;
