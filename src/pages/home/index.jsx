import Navbar from "@/components/navbar";
import Banner from "@/components/banner";
import Description from "@/components/Description";
import IconsBar from "@/components/IconsBar";
import Carateristicas from "@/components/caracteristicas";
import Contact from "@/components/contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <IconsBar />
        <Description />
        <Carateristicas />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
