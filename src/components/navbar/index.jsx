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
  const [tipeHeader, setTipeHeader] = useState(style.header);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setOpen(false);
      setMenu(style.noNav);
    });
    window.onscroll = () => {
      let displacement = window.scrollY;
      if (displacement >= 400) {
        setTipeHeader(style.headerTwo);
      } else if (displacement === 0) {
        setTipeHeader(style.header);
      }
      displacement = window.scrollY;
    };
  }, []);

  function statusMenu() {
    setMenu(style.noNav);
    setOpen(false);
  }

  return (
    <>
      <header className={tipeHeader}>
        <Link href="/home" className={style.container} onClick={statusMenu}>
          <Image className={style.logo} src={logotype} alt="Albbus" />
        </Link>
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
        <nav className={style.menuDesktop}>
          <ul className={style.elements}>
            <li className={style.element} onClick={statusMenu}>
              <Link href="" className={style.aLink}>
                Acerca de
              </Link>
            </li>
            <li className={style.element} onClick={statusMenu}>
              <Link href="/trabajo" className={style.aLink}>
                Nuestro trabajo
              </Link>
            </li>
            <li className={style.element} onClick={statusMenu}>
              <Link href="home#contactanos" className={style.aLinkBtn}>
                Cotizar
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <nav className={menu}>
        <ul className={style.elements}>
          <li className={style.element} onClick={statusMenu}>
            <Link href="" className={style.aLink}>
              Acerca de
            </Link>
          </li>
          <li className={style.element} onClick={statusMenu}>
            <Link href="/trabajo" className={style.aLink}>
              Nuestro trabajo
            </Link>
          </li>
          <li className={style.element} onClick={statusMenu}>
            <Link href="home#contactanos" className={style.aLinkBtn}>
              Cotizar
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
