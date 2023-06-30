
import Navbar from "@/components/navbar";
import OurWork from "@/components/ourWork";
import CardsWork from "@/components/cardsWork";
import Testimonials from "@/components/testimonials";

export default function Trabajo() {
    return (
      <>
        <Navbar />
        <main>
          <OurWork/>
          <CardsWork />
          <Testimonials />
        </main>
      </>
    );
}