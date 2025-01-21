import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Hero />
      <Services />
      <ContactForm />
      <WhatsAppButton />
    </div>
  );
};

export default Index;