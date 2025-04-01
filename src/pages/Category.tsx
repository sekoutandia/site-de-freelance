
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Search, Sliders } from "lucide-react";
import { Link } from "react-router-dom";

const Category = () => {
  const { categoryName } = useParams();
  
  // Map category names to French display names and descriptions
  const categoryInfo: Record<string, { title: string, description: string }> = {
    "design": {
      title: "Design Graphique",
      description: "Logos, illustrations, maquettes et plus encore réalisés par des designers professionnels."
    },
    "development": {
      title: "Développement Web",
      description: "Sites web, applications et solutions techniques par des développeurs expérimentés."
    },
    "marketing": {
      title: "Marketing Digital",
      description: "SEO, publicité en ligne, stratégie de contenu et gestion des réseaux sociaux."
    },
    "writing": {
      title: "Rédaction & Traduction",
      description: "Contenu de qualité et traductions précises dans plusieurs langues."
    }
  };
  
  const category = categoryInfo[categoryName || ""] || {
    title: categoryName ? categoryName.charAt(0).toUpperCase() + categoryName.slice(1) : "Catégorie",
    description: "Découvrez tous les services disponibles dans cette catégorie."
  };

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Page Header */}
        <section className="py-8 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{category.title}</h1>
            <p className="text-muted-foreground mb-6">
              {category.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <input 
                  type="text" 
                  placeholder="Rechercher dans cette catégorie..." 
                  className="h-12 w-full rounded-lg border border-input bg-background pl-10 pr-4 text-base focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button variant="outline" size="lg" className="flex gap-2">
                <Sliders className="h-5 w-5" />
                Filtres
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12">
          <div className="container px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, index) => (
                <ServiceCard 
                  key={index}
                  image="/placeholder.svg"
                  title={`Je vais créer un ${['logo', 'site web', 'application mobile', 'stratégie marketing'][index % 4]} professionnel`}
                  rating={4.7 + (index % 3) * 0.1}
                  reviews={50 + index * 4}
                  price={50 + index * 10}
                  seller={`Freelance${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const ServiceCard = ({ image, title, rating, reviews, price, seller }: {
  image: string;
  title: string;
  rating: number;
  reviews: number;
  price: number;
  seller: string;
}) => (
  <Card className="overflow-hidden hover:shadow-md transition-shadow border-border/40">
    <div className="aspect-[4/3] w-full relative bg-muted">
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-full"
      />
    </div>
    <CardContent className="p-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm font-medium">{seller}</span>
      </div>
      <h3 className="font-medium text-base mb-3 line-clamp-2 min-h-[40px]">{title}</h3>
      <div className="flex items-center gap-1 mb-3">
        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <span className="text-sm font-medium">{rating.toFixed(1)}</span>
        <span className="text-sm text-muted-foreground">({reviews})</span>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">À partir de</p>
        <p className="font-semibold">{price} €</p>
      </div>
    </CardContent>
  </Card>
);

export default Category;
