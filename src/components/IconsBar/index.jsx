import style from "./IconsBar.module.scss";
import Image from "next/legacy/image";
import sintax from "@/assets/img/sintax.png";
import ai27 from "@/assets/img/GroupAI27.png";
import ais from "@/assets/img/GroupAiS.png";

export default function IconsBar(){
    return(
        <section className={style.iconCont}>
            <p>DOCK</p>
            <Image src={sintax} alt="sintaX"/>
            <Image src={ai27} alt="ai27"/>
            <Image src={ais} alt="ais"/>
        </section>
    )
}