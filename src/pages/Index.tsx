import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";
import { Services } from "@/components/Services";
import { ServicesDetail } from "@/components/ServicesDetail";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { Team } from "@/components/Team";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <ServicesDetail />
      <Team />
      <Testimonials />
      <FAQ />
      <ContactForm />
    </div>
  );
};

export default Index;