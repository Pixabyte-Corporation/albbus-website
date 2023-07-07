import "../../app/globals.scss";
import style from "./Navbar.module.scss";

import Image from "next/image";

import logotype from "@/assets/img/logotype.svg";

export default function Navbar() {
  return (
    <header className={style.header}>
      <Image className={style.logo} src={logotype} alt="Albbus" />
      <nav>
        <ul className={style.elements}>
          <li className={style.element}>
            <a href="" className={style.aLink}>
              Acerca de
            </a>
          </li>
          <li className={style.element}>
            <a href="" className={style.aLink}>
              Nuestro trabajo
            </a>
          </li>
          <li className={style.element}>
            <a href="" className={style.aLink}>
              Nuestro Talento
            </a>
          </li>
          <li className={style.element}>
            <button type="submit" className={style.btnQuote}>
              Cotizar
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
