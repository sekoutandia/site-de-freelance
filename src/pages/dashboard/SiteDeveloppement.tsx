import React from 'react';
import { Code, Globe, Smartphone, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const SiteDeveloppement = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Site & Développement</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-muted-foreground mb-4">
          Des services de développement web et mobile pour créer et optimiser vos plateformes numériques.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <Globe className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">Sites web</h3>
          </div>
          
          <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <Smartphone className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">Applications mobiles</h3>
          </div>
          
          <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <Code className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">Développement sur mesure</h3>
          </div>
          
          <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <Database className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">Bases de données</h3>
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Technologies populaires</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Vue.js</span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Angular</span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Node.js</span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">PHP</span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">WordPress</span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Laravel</span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Flutter</span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React Native</span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              {
                id: 1,
                title: "Site Web Full Stack",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
                description: "Développement complet d'applications web modernes",
                dev: "FullStackPro",
                price: 80
              },
              {
                id: 2,
                title: "Applications Mobiles",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
                description: "Développement d'apps iOS et Android",
                dev: "MobileExpert",
                price: 90
              },
              {
                id: 3,
                title: "Architecture Cloud",
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
                description: "Solutions cloud scalables et sécurisées",
                dev: "CloudArchitect",
                price: 95
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
                    <span className="text-sm text-muted-foreground">{service.dev}</span>
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

export default SiteDeveloppement;
