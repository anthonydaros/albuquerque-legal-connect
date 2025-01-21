import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { Team } from "@/components/Team";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Team />
      <FAQ />
      <Testimonials />
      <div id="contato">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Index;