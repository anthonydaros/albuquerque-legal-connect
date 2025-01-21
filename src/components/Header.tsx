import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { Scale, Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const MenuItems = ({ isMobile = false }) => (
    <NavigationMenu>
      <NavigationMenuList className={cn(isMobile && "flex-col space-y-2")}>
        <NavigationMenuItem>
          <Link to="/">
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-primary hover:text-white hover:bg-primary transition-colors w-full justify-start")}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/sobre-nos">
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-primary hover:text-white hover:bg-primary transition-colors w-full justify-start")}>
              Sobre Nós
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <button onClick={() => scrollToSection('servicos')} className="w-full">
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-primary hover:text-white hover:bg-primary transition-colors w-full justify-start")}>
              Serviços
            </NavigationMenuLink>
          </button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <button onClick={() => scrollToSection('faq')} className="w-full">
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-primary hover:text-white hover:bg-primary transition-colors w-full justify-start")}>
              FAQ
            </NavigationMenuLink>
          </button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <button onClick={() => scrollToSection('contato')} className="w-full">
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-primary hover:text-white hover:bg-primary transition-colors w-full justify-start")}>
              Contato
            </NavigationMenuLink>
          </button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-primary">
            <Scale className="w-8 h-8" />
            <span>Albuquerque</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <MenuItems />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="p-2">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] pt-10">
                <nav className="flex flex-col gap-4">
                  <MenuItems isMobile={true} />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};