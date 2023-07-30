// index.jsx
import React from "react";
import Link from "next/link";
import "../../app/globals.scss";
import style from "./Footer.module.scss";
import Image from "next/image";
import logotype from "@/assets/img/logotype.svg";
import iconlinkedin from "@/assets/icons/icon-linkedin.png";
import icontwitter from "@/assets/icons/icon-twitter.png";
import iconfacebook from "@/assets/icons/icon-facebook.png";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.leftsection}>
        <Image src={logotype} alt="Albbus" className={style.logo} />
        <p className={style.rights}>Todos los derechos reservados Albbus 2023</p>
      </div>
      <div className={style.rightsection}>
        <p className={style.follow}>Síguenos</p>
        <div className={style.socialicons}>
          <Link href="https://www.linkedin.com/company/pixabytemx">
            <Image src={iconlinkedin} alt="LinkedIn" className={style.icon} />
          </Link >
          <Link href="https://twitter.com/Pixabyte_?t=nSxTqJ-yPUzfIWH0mItaOw&s=08">
            <Image src={icontwitter} alt="Twitter" className={style.icon} />
          </Link >
          <Link href="https://www.facebook.com/PixabyteL?mibextid=ZbWKw">
            <Image src={iconfacebook} alt="Facebook" className={style.icon} />
          </Link >
        </div>
        <div className={style.linkssection}>
          <p>
            <Link href="/aviso-privacidad" className={style.linksfooter}>
              Politica de privacidad
            </Link >
          </p>
          <p>
            <Link href="/terminos-condiciones" className={style.linksfooter}>
              Términos y condiciones
            </Link >
          </p>
          <p>
            <Link href="#" className={style.linksfooter}>
              Políticas de cookies
            </Link >
          </p>
        </div>
      </div>
    </footer>
  );
};
