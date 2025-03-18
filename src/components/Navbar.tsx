
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu, User } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <header className="border-b border-border/40 bg-background sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">SkillUp</span>
          </Link>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Catégories</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-2">
                    <Link to="/category/design" className="group flex h-full w-full select-none flex-col rounded-md p-3 hover:bg-muted">
                      <div className="text-sm font-medium leading-none">Design Graphique</div>
                      <div className="line-clamp-2 text-sm text-muted-foreground">
                        Logo, bannières, illustrations
                      </div>
                    </Link>
                    <Link to="/category/development" className="group flex h-full w-full select-none flex-col rounded-md p-3 hover:bg-muted">
                      <div className="text-sm font-medium leading-none">Développement Web</div>
                      <div className="line-clamp-2 text-sm text-muted-foreground">
                        Sites, applications, e-commerce
                      </div>
                    </Link>
                    <Link to="/category/marketing" className="group flex h-full w-full select-none flex-col rounded-md p-3 hover:bg-muted">
                      <div className="text-sm font-medium leading-none">Marketing Digital</div>
                      <div className="line-clamp-2 text-sm text-muted-foreground">
                        SEO, réseaux sociaux, publicité
                      </div>
                    </Link>
                    <Link to="/category/writing" className="group flex h-full w-full select-none flex-col rounded-md p-3 hover:bg-muted">
                      <div className="text-sm font-medium leading-none">Rédaction & Traduction</div>
                      <div className="line-clamp-2 text-sm text-muted-foreground">
                        Articles, traductions, copywriting
                      </div>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/explore" className="flex items-center gap-1 px-4 py-2 text-sm font-medium">
                  Explorer
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="relative w-full max-w-md hidden md:flex mx-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input 
            type="text" 
            placeholder="Rechercher un service..." 
            className="h-10 w-full rounded-full border border-input bg-background pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm font-medium hidden md:block">
            Connexion
          </Link>
          <Button asChild variant="default" size="sm" className="hidden md:inline-flex">
            <Link to="/register">Inscription</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
