
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[80vh] py-12 text-center">
      <h1 className="text-6xl md:text-8xl font-extrabold text-primary mb-6">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Page non trouvée</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <Button asChild>
        <Link to="/">Retour à l'accueil</Link>
      </Button>
    </div>
  );
}
