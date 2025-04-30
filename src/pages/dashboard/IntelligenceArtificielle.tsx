
import React from 'react';
import { BrainCog, Bot, Microchip, BrainCircuit } from 'lucide-react';
import { Link } from 'react-router-dom';

const IntelligenceArtificielle = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Intelligence Artificielle</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-muted-foreground mb-4">
          Services spécialisés dans l'intelligence artificielle, l'apprentissage automatique et les solutions IA pour votre entreprise.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <BrainCog className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">IA Générative</h3>
          </div>
          
          <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <Bot className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">Chatbots</h3>
          </div>
          
          <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <Microchip className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">Machine Learning</h3>
          </div>
          
          <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <BrainCircuit className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">Analyse prédictive</h3>
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Experts IA recommandés</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                title: "Développement de chatbots intelligents",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
                description: "Conception et implémentation de chatbots IA avancés pour service client",
                expert: "AIBuilder",
                price: 110
              },
              {
                id: 2,
                title: "Solutions d'IA générative",
                image: "https://images.unsplash.com/photo-1684163011432-7b74d1030656",
                description: "Création de contenu automatisé et solutions IA génératives sur mesure",
                expert: "GenAIMaster",
                price: 135
              },
              {
                id: 3,
                title: "Intégration d'IA dans les applications",
                image: "https://images.unsplash.com/photo-1675271591915-d4c49fec2692",
                description: "Intégration de solutions d'IA dans vos applications existantes",
                expert: "AIIntegrator",
                price: 120
              }
            ].map((service) => (
              <Link 
                key={service.id}
                to={`/service/${service.id}`}
                className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{service.expert}</span>
                    <span className="font-semibold">{service.price}€/h</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntelligenceArtificielle;
