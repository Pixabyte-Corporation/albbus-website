import style from "./IconsBar.module.scss";
import Image from "next/legacy/image";
import sintax from "@/assets/img/sintax.png";
import ai27 from "@/assets/img/GroupAI27.png";
import ais from "@/assets/img/GroupAiS.png";

export default function IconsBar() {
  return (
    <section className={style.container}>
      <div className={style.picture}>
        <p className={style.align}>DOCK</p>
      </div>
      <div className={style.picture}>
        <Image src={sintax} alt="sintaX" />
      </div>
      <div className={style.picture}>
        <Image src={ai27} alt="ai27" />
      </div>
      <div className={style.picture}>
        <Image src={ais} alt="ais" />
      </div>
    </section>
  );
}
