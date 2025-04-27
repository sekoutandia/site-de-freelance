
import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const MeilleursServices = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Meilleurs services</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-muted-foreground mb-4">
          Les services les mieux notés et les plus appréciés par notre communauté.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[
            {
              id: 1,
              title: "Développement web fullstack",
              image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
              description: "Création d'applications web complètes avec les dernières technologies.",
              dev: "FullStackDev",
              price: 85
            },
            {
              id: 2,
              title: "Architecture logicielle",
              image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
              description: "Conception et optimisation d'architectures scalables.",
              dev: "SoftwareArchitect",
              price: 95
            },
            {
              id: 3,
              title: "Développement IoT",
              image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
              description: "Solutions IoT innovantes et connectées.",
              dev: "IoTExpert",
              price: 75
            },
            {
              id: 4,
              title: "UI/UX Design",
              image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
              description: "Design d'interfaces modernes et intuitives.",
              dev: "DesignerPro",
              price: 65
            },
            {
              id: 5,
              title: "Intelligence Artificielle",
              image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
              description: "Intégration de solutions IA pour votre entreprise.",
              dev: "AIEngineer",
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
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium">{service.title}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium">{(4.7 + (service.id * 0.05)).toFixed(1)}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Par {service.dev}</span>
                  <span className="font-semibold">{service.price}€/h</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeilleursServices;
