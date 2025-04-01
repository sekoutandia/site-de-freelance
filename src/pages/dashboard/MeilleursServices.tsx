
import React from 'react';
import { Star } from 'lucide-react';

const MeilleursServices = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Meilleurs services</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-muted-foreground mb-4">
          Les services les mieux notés et les plus appréciés par notre communauté.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Placeholder for top rated services */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium">Service premium #{item}</h3>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="text-sm font-medium">{(4.7 + (item * 0.05)).toFixed(1)}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Description du service de haute qualité avec des prestations exceptionnelles.</p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Par FreelancePro{item}</span>
                <span className="font-semibold">{40 + (item * 15)}€</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeilleursServices;
