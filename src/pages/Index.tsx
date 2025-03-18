
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sword, Shield, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Pokémon Battle Arena
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Constituez votre équipe, affrontez d'autres dresseurs et devenez le meilleur !
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white animate-float"
          >
            Commencer un Combat
          </Button>
        </section>

        {/* Features Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <FeatureCard
            icon={<Sword size={24} />}
            title="Combats En Direct"
            description="Affrontez des dresseurs du monde entier en temps réel"
          />
          <FeatureCard
            icon={<Shield size={24} />}
            title="Stratégie d'Équipe"
            description="Créez l'équipe parfaite avec vos Pokémon préférés"
          />
          <FeatureCard
            icon={<Trophy size={24} />}
            title="Classement"
            description="Grimpez les échelons et devenez une légende"
          />
          <FeatureCard
            icon={<Users size={24} />}
            title="Communauté"
            description="Rejoignez une communauté passionnée de dresseurs"
          />
        </section>
      </main>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in">
    <div className="mb-4 text-primary">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </Card>
);

export default Index;
