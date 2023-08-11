"use client";
import { useState } from "react";
import axios from "axios"; 
import style from "./Formcontact.module.scss";
import PhoneNumberInput from "./Phonecountry";

export default function Formcontact() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    empresa: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value 
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('URL_DE_TU_API', formData);
      console.log('Respuesta de la solicitud:', response.data);
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };

  return (
    <section className={style.containerprincipal}>
      <div className={style.container}>
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
                name="nombre"
                onChange={handleInputChange}
                placeholder="Ingresa tu nombre"
              />
            </div>
            <div className={style.column}>
              <p>Apellido</p>
              <input
                className={style.input}
                type="text"
                name="apellido"
                onChange={handleInputChange}
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
                name="email"
                onChange={handleInputChange}
                placeholder="Ingresa tu correo"
              />
            </div>
            <div className={style.column}>
              <p>Empresa</p>
              <input
                className={style.input}
                type="text"
                name="empresa"
                onChange={handleInputChange}
                placeholder="Ingresa la empresa"
              />
            </div>
          </div>
          <p className={style.num}>Número Celular</p>
          <div className={style.inputRow}>
            <span className={style.Inputlada}>
            <PhoneNumberInput/>
            </span>
          </div>
        </form>
        <button className={style.enviar} type="button">
          Enviar
        </button>
      </div>
    </section>
  );
}