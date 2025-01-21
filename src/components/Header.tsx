import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { Scale } from "lucide-react";

export const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-primary">
            <Scale className="w-8 h-8" />
            <span>Albuquerque</span>
          </Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-primary hover:text-white hover:bg-primary transition-colors")}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/sobre-nos">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-primary hover:text-white hover:bg-primary transition-colors")}>
                    Sobre Nós
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button onClick={() => scrollToSection('servicos')}>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-primary hover:text-white hover:bg-primary transition-colors")}>
                    Serviços
                  </NavigationMenuLink>
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button onClick={() => scrollToSection('faq')}>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-primary hover:text-white hover:bg-primary transition-colors")}>
                    FAQ
                  </NavigationMenuLink>
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button onClick={() => scrollToSection('contato')}>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-primary hover:text-white hover:bg-primary transition-colors")}>
                    Contato
                  </NavigationMenuLink>
                </button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};