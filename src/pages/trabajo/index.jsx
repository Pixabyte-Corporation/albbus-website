import Navbar from "@/components/navbar";
import AlbbusDescription from "@/components/AlbbusDescription";
import OurWork from "@/components/ourWork";
import CardsWork from "@/components/cardsWork";
import Footer from "@/components/Footer";

export default function Trabajo() {
    return (
      <>
        <Navbar />
        <main>
          <OurWork/>
          <AlbbusDescription/>
          <CardsWork />
          <Footer />
        </main>
      </>
    );
}
