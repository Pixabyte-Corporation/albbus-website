import style from "./AlbbusCEO.module.scss";
import Image from "next/legacy/image";
import a from "@/assets/img/A-blue.png";
import l from "@/assets/img/L-blue.png";
import b from "@/assets/img/B-blue.png";
import b2 from "@/assets/img/B-blue.png";
import u from "@/assets/img/U-blue.png";
import s from "@/assets/img/S-blue.png";
import ceo from "@/assets/img/CEO.png";
import Avec from "../../assets/img/VectorAImage2.png";
import Link from "next/link";

export default function AlbbusCEO() {
    return (
        <article>

            <section className={style.module1}>
                <div className={style.AvectorContainer}>
                    <Image className={style.Avector} src={Avec} alt="A" width='191.926px' height= '200px'/>
                </div>
                <div className={style.textCont}>
                    <div className={style.textContSecundary}>
                        <span className={style.enText}>En
                            <div className={style.albbusCont}>
                                <span className={style.letterCont}><Image src={a} alt="A" /></span>
                                <span className={style.letterCont}><Image src={l} alt="A" /></span>
                                <span className={style.letterCont}><Image src={b} alt="A" /></span>
                                <span className={style.letterCont}><Image src={b2} alt="A" /></span>
                                <span className={style.letterCont}><Image src={u} alt="A" /></span>
                                <span className={style.letterCont}><Image src={s} alt="S" /></span>
                            </div>
                        </span>
                        <p className={style.copyCont}>contamos con los recursos y el compromiso para <span className={style.blueSpan}>resolver</span> todas tus <span className={style.blueSpan}>necesidades.</span></p>
                    </div>

                    <Link href="/#contactanos" className={style.contactBtn}>Contáctanos</Link>

                </div>
                <div className={style.ceoCont}>
                    <Image src={ceo} layout="intrinsic" alt="CEO" />
                </div>
            </section>
        </article>
    )
}