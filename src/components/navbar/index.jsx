import "../../app/globals.scss";
import style from "./Navbar.module.scss";

import Image from "next/image";
import { Squash as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";

import logotype from "@/assets/img/logotype.svg";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [menu, setMenu] = useState(style.noNav);

  useEffect(() => {
    window.addEventListener("resize", () => {
      statusGral;
      setOpen(false);
      setMenu(style.noNav);
    });
  }, []);

  const statusGral = () => {
    if (window.innerWidth >= 1200) {
      setMenu(style.nav);
      return setOpen(false);
    } else {
      setMenu(style.noNav);
      return setOpen(!isOpen);
    }
  };

  const menuVision = (toggled) => {
    if (toggled) {
      setMenu(style.nav);
    } else {
      setMenu(style.noNav);
    }
  };

  const statusMenu = () => {
    setMenu(style.noNav);
  };

  return (
    <header className={style.header}>
      <a href="/home" className={style.container} onClick={statusMenu}>
        <Image className={style.logo} src={logotype} alt="Albbus" />
      </a>
      <div id="hamburguer" className={style.position}>
        <Hamburger
          color="#4FD1C5"
          distance="lg"
          size={30}
          toggled={isOpen}
          toggle={statusGral}
          onToggle={(toggled) => {
            menuVision(toggled);
          }}
        />
      </div>
      <nav className={menu}>
        <ul className={style.elements}>
          {/* <li className={style.element}>
            <a href="" className={style.aLink}>
              Acerca de
            </a>
          </li> */}
          <li className={style.element} onClick={statusMenu}>
            <a href="/trabajo" className={style.aLink}>
              Nuestro trabajo
            </a>
          </li>
          {/* <li className={style.element}>
            <a href="" className={style.aLink}>
              Nuestro Talento
            </a>
          </li> */}
          <li className={style.element} onClick={statusMenu}>
            {/* <button type="submit" className={style.btnQuote}> "uncomment" */}
            <a href="#contactanos" className={style.aLink}>
              Contáctanos
            </a>
            {/* Cotizar  <- this is the original tag, delete "Contáctanos"
               and chage "href" by new url*/}
            {/* </button>  "uncomment" */}
          </li>
        </ul>
      </nav>
    </header>
  );
}
