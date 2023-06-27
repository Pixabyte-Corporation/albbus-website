import Navbar from "@/components/navbar";
import Banner from "@/components/banner";
import Description from "@/components/Description";
import IconsBar from "@/components/IconsBar";
import Carateristicas from "@/components/caracteristicas";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <IconsBar />
        <Description />
        <Carateristicas />
      </main>
    </>
  );
}
