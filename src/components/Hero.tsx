import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1433832597046-4f10e10ac764"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-in">
            Consultoria Jurídica Previdenciária Especializada
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 fade-in">
            Orientações personalizadas e estratégias precisas para garantir seus direitos previdenciários.
          </p>
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 fade-in"
          >
            Marque sua consulta agora! <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};