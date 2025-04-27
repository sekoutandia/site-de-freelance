
import React from 'react';
import { BarChart, TrendingUp, PieChart, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Business = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Business</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-muted-foreground mb-4">
          Services professionnels pour développer et optimiser votre activité commerciale.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <TrendingUp className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">Stratégie d'entreprise</h3>
          </div>
          
          <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <BarChart className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">Analyse financière</h3>
          </div>
          
          <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <PieChart className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">Études de marché</h3>
          </div>
          
          <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <Target className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">Business plan</h3>
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Consultants business</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                title: "Stratégie d'entreprise",
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
                description: "Accompagnement stratégique pour startups et PME",
                consultant: "StrategistPro",
                price: 125
              },
              {
                id: 2,
                title: "Analyse financière",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
                description: "Optimisation financière et business planning",
                consultant: "FinanceExpert",
                price: 150
              },
              {
                id: 3,
                title: "Études de marché",
                image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
                description: "Analyse approfondie des marchés et tendances",
                consultant: "MarketAnalyst",
                price: 135
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
                    <span className="text-sm text-muted-foreground">{service.consultant}</span>
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

export default Business;
