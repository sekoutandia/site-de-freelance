
import React from 'react';
import { Palette, Image, FileType, Figma } from 'lucide-react';
import { Link } from 'react-router-dom';

const DesignGraphisme = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Design & Graphisme</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-muted-foreground mb-4">
          Trouvez des professionnels pour vos projets de design graphique, logos, illustrations et bien plus.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <Palette className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">Logo & Identité</h3>
          </div>
          
          <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <Image className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">Illustrations</h3>
          </div>
          
          <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <FileType className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">Print & Édition</h3>
          </div>
          
          <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <Figma className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">UI/UX Design</h3>
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Services recommandés</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                title: "Logo & Identité de marque",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
                description: "Création de logo professionnel et charte graphique",
                designer: "LogoPro",
                price: 75
              },
              {
                id: 2,
                title: "Design UI/UX",
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
                description: "Interfaces modernes et expérience utilisateur optimale",
                designer: "UXDesigner",
                price: 85
              },
              {
                id: 3,
                title: "Illustrations personnalisées",
                image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
                description: "Illustrations uniques pour votre marque",
                designer: "IllustratorArt",
                price: 65
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
                  <p className="text-sm text-muted-foreground mb-2">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{service.designer}</span>
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

export default DesignGraphisme;
