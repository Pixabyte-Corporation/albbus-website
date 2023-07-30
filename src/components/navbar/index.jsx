"use client";
import "../../app/globals.scss";
import style from "./Navbar.module.scss";

import Link from "next/link";
import Image from "next/image";
import { Squash as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";

import logotype from "@/assets/img/logotype.svg";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [menu, setMenu] = useState(style.noNav);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setOpen(false);
      setMenu(style.noNav);
    });
  }, []);

  function statusMenu() {
    setMenu(style.noNav);
    setOpen(false);
  }

  return (
    <header className={style.header}>
      <Link href="/home" className={style.container} onClick={statusMenu}>
        <Image className={style.logo} src={logotype} alt="Albbus" />
      </Link >
      <div id="hamburguer" className={style.position}>
        <Hamburger
          color="#4FD1C5"
          distance="lg"
          size={30}
          toggled={isOpen}
          toggle={setOpen}
          onToggle={(toggled) => {
            if (toggled) {
              setMenu(style.nav);
            } else {
              setMenu(style.noNav);
            }
          }}
        />
      </div>
      <nav className={menu}>
        <ul className={style.elements}>
          {/* <li className={style.element}>
            <Link href="" className={style.aLink}>
              Acerca de
            </Link >
          </li> */}
          <li className={style.element} onClick={statusMenu}>
            <Link href="/trabajo" className={style.aLink}>
              Nuestro trabajo
            </Link >
          </li>
          {/* <li className={style.element}>
            <Link href="" className={style.aLink}>
              Nuestro Talento
            </Link >
          </li> */}
          <li className={style.element} onClick={statusMenu}>
            {/* <button type="submit" className={style.btnQuote}> "uncomment" */}
            <Link href="home#contactanos" className={style.aLink}>
              Contáctanos
            </Link >
            {/* Cotizar  <- this is the original tag, delete "Contáctanos"
               and chage "href" by new url*/}
            {/* </button>  "uncomment" */}
          </li>
        </ul>
      </nav>
      <nav className={style.menuDesktop}>
        <ul className={style.elements}>
          {/* <li className={style.element}>
            <Link href="" className={style.aLink}>
              Acerca de
            </Link >
          </li> */}
          <li className={style.element}>
            <Link href="/trabajo" className={style.aLink}>
              Nuestro trabajo
            </Link >
          </li>
          {/* <li className={style.element}>
            <Link href="" className={style.aLink}>
              Nuestro Talento
            </Link >
          </li> */}
          <li className={style.element}>
            {/* <button type="submit" className={style.btnQuote}> "uncomment" */}
            <Link href="home#contactanos" className={style.aLink}>
              Contáctanos
            </Link >
            {/* Cotizar  <- this is the original tag, delete "Contáctanos"
               and chage "href" by new url*/}
            {/* </button>  "uncomment" */}
          </li>
        </ul>
      </nav>
    </header>
  );
}
