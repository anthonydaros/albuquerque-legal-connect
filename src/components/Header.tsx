import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { Scale } from "lucide-react";

export const Header = () => {
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
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-primary hover:text-primary/80")}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/sobre-nos">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-primary hover:text-primary/80")}>
                    Sobre Nós
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="#servicos">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-primary hover:text-primary/80")}>
                    Serviços
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="#faq">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-primary hover:text-primary/80")}>
                    FAQ
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="#contato">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-primary hover:text-primary/80")}>
                    Contato
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};