import React from 'react';
import Image from 'next/image';
import logotype from '@/assets/img/logotype.svg';
import iconlinkedin from '@/assets/icons/icon-linkedin.png';
import icontwitter from '@/assets/icons/icon-twitter.png';
import iconfacebook from '@/assets/icons/icon-facebook.png';

import styles from './Footer.module.scss';

export default function Footer({ isWorkPage }) {
  const footerStyle = isWorkPage ? styles.workPageFooter : styles.homePageFooter;

  return (
    <footer className={footerStyle}>
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.secciones}>
            <div className={styles.left}>
              <Image src={logotype} alt="Albbus" className={styles.logo} />
              <br />
              <p className={styles.derechos}>Todos los derechos reservados Albbus 2023</p>
            </div>
            <div className={styles.right}>
              <div className={styles.siguenos}>
                <p>Síguenos</p><br />
              </div>
              <div>
                <Link href="https://www.linkedin.com/company/pixabytem" target='blank'>
                  <Image src={iconlinkedin} alt="Linkedin" className={styles.icon} />
                </Link>
                <Link href="https://twitter.com/Pixabyte_?t=nSxTqJ-yPUzfIWH0mItaOw&s=08" target='blank'>
                  <Image src={icontwitter} alt="Twitter" className={styles.icon} />
                </Link>
                <Link href="https://www.facebook.com/PixabyteL?mibextid=ZbWKw" target='blank'>
                  <Image src={iconfacebook} alt="Facebook" className={styles.icon} />
                </Link>
              </div>
              <div className={styles.document}>
                <Link href="/aviso-privacidad" className={styles.enlaces} target='blank'>
                  Politica de privacidad
                </Link>
                <Link href="/terminos-condiciones" className={styles.enlaces} target='blank'>
                  Términos y condiciones
                </Link>
                <Link href="/politicas-cookies" className={styles.enlaces} target='blank'>
                  Políticas de cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}