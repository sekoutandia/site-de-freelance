
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Users, Clock, TrendingUp, Briefcase, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground animate-fade-up">
              Trouvez le freelance idéal pour votre projet
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Des milliers de talents freelance disponibles pour vous aider à concrétiser votre projet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <div className="relative max-w-xl w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <input 
                  type="text" 
                  placeholder="Que recherchez-vous ?" 
                  className="h-12 w-full rounded-lg border border-input bg-background pl-10 pr-4 text-base focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Rechercher
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>Populaire:</span>
              <Link to="/category/logo" className="hover:text-primary hover:underline">Logo Design</Link>
              <Link to="/category/website" className="hover:text-primary hover:underline">Site Web</Link>
              <Link to="/category/app" className="hover:text-primary hover:underline">Application Mobile</Link>
              <Link to="/category/seo" className="hover:text-primary hover:underline">SEO</Link>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-background">
          <div className="container px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Catégories Populaires</h2>
              <Link to="/categories" className="text-primary hover:underline">
                Voir Tout
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
              <CategoryCard 
                icon={<Briefcase className="h-8 w-8" />}
                title="Design"
                count="2,345"
              />
              <CategoryCard 
                icon={<TrendingUp className="h-8 w-8" />}
                title="Marketing"
                count="1,726"
              />
              <CategoryCard 
                icon={<Users className="h-8 w-8" />}
                title="Rédaction"
                count="1,204"
              />
              <CategoryCard 
                icon={<Star className="h-8 w-8" />}
                title="Développement"
                count="3,871"
              />
              <CategoryCard 
                icon={<Clock className="h-8 w-8" />}
                title="Vidéo & Animation"
                count="983"
              />
              <CategoryCard 
                icon={<Users className="h-8 w-8" />}
                title="Musique & Audio"
                count="562"
              />
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Services Populaires</h2>
              <Link to="/services" className="text-primary hover:underline">
                Voir Tout
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <ServiceCard 
                image="/placeholder.svg"
                title="Je vais créer un logo moderne pour votre entreprise"
                rating={4.9}
                reviews={124}
                price={55}
                seller="JeanDesign"
              />
              <ServiceCard 
                image="/placeholder.svg"
                title="Je vais développer votre site web responsive"
                rating={4.8}
                reviews={89}
                price={220}
                seller="WebDeveloperPro"
              />
              <ServiceCard 
                image="/placeholder.svg"
                title="Je vais optimiser votre référencement SEO"
                rating={4.7}
                reviews={56}
                price={110}
                seller="SEOexpert"
              />
              <ServiceCard 
                image="/placeholder.svg"
                title="Je vais créer votre stratégie marketing digital"
                rating={4.9}
                reviews={78}
                price={130}
                seller="MarketingGuru"
              />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-background">
          <div className="container px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-12">Comment ça marche</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Search className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Recherchez</h3>
                <p className="text-muted-foreground">Trouvez le service qui correspond à vos besoins parmi des milliers d'offres.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Briefcase className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. Commandez</h3>
                <p className="text-muted-foreground">Discutez avec le freelance et passez commande en toute sécurité.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Star className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. Recevez</h3>
                <p className="text-muted-foreground">Recevez un travail de qualité et ne payez que si vous êtes satisfait.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Prêt à démarrer votre projet ?</h2>
            <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
              Rejoignez des milliers de clients satisfaits qui ont trouvé le freelance idéal pour leur projet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/register">S'inscrire</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" asChild>
                <Link to="/services">Explorer les Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const CategoryCard = ({ icon, title, count }: { 
  icon: React.ReactNode; 
  title: string; 
  count: string; 
}) => (
  <Card className="overflow-hidden hover:shadow-md transition-shadow border-border/40">
    <CardContent className="p-4 flex flex-col items-center text-center">
      <div className="mb-3 text-primary">{icon}</div>
      <h3 className="font-medium text-base mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{count} services</p>
    </CardContent>
  </Card>
);

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
        <span className="text-sm font-medium">{rating}</span>
        <span className="text-sm text-muted-foreground">({reviews})</span>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">À partir de</p>
        <p className="font-semibold">{price} €</p>
      </div>
    </CardContent>
  </Card>
);

export default Index;
