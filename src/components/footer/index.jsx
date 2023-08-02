import React from "react";
import "../../app/globals.scss";
import style from "./Footer.module.scss";
import Image from "next/image";
import logotype from "@/assets/img/logotype.svg";
import iconlinkedin from "@/assets/icons/icon-linkedin.png";
import icontwitter from "@/assets/icons/icon-twitter.png";
import iconfacebook from "@/assets/icons/icon-facebook.png";

export default function Footer() {
  return (
    <footer>
      <div className={style.footer}>
        <div className={style.container}>
          <div className={style.secciones}>
            <div className={style.left}>
              <Image src={logotype} alt="Albbus" className={style.logo}/>
              <br />
              <p className={style.derechos}>Todos los derechos reservados Albbus 2023</p>
            </div>
            <div className={style.right}>
              <div className={style.siguenos}>
              <p>Síguenos</p><br />
              </div>
              <div>
              <a href="https://www.linkedin.com/company/pixabytem">
                <Image src={iconlinkedin} alt="Linkedin" className={style.icon} />
              </a>
              <a href="https://twitter.com/Pixabyte_?t=nSxTqJ-yPUzfIWH0mItaOw&s=08">
                <Image src={icontwitter} alt="Twitter" className={style.icon} />
              </a>
              <a href="https://www.facebook.com/PixabyteL?mibextid=ZbWKw">
                <Image src={iconfacebook} alt="Facebook" className={style.icon} />
              </a>
              </div>
              <div className={style.document}>
                <a href="/aviso-privacidad" className={style.enlaces}>
                  Politica de privacidad
                </a>
                <a href="/terminos-condiciones" className={style.enlaces}>
                  Términos y condiciones 
                </a>
                <a href="/politicas-cookies" className={style.enlaces}>
                  Políticas de cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
