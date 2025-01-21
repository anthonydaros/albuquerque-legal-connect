import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Index;