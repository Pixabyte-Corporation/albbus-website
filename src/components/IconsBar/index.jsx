import style from "./IconsBar.module.scss";
import Image from "next/legacy/image";
import sintax from "@/assets/images/sintax.png";
import ai27 from "@/assets/images/GroupAI27.png";
import ais from "@/assets/images/GroupAiS.png";

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