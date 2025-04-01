
import React from 'react';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const ReseauxSociaux = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Réseaux sociaux</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-muted-foreground mb-4">
          Gestion, stratégie et création de contenu pour vos réseaux sociaux.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <Instagram className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">Instagram</h3>
          </div>
          
          <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <Facebook className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">Facebook</h3>
          </div>
          
          <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <Twitter className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">Twitter/X</h3>
          </div>
          
          <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <Youtube className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">YouTube</h3>
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Services populaires</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video bg-gray-100"></div>
                <div className="p-4">
                  <h3 className="font-medium mb-2">Gestion des réseaux sociaux</h3>
                  <p className="text-sm text-muted-foreground mb-2">Création et planification de contenu, interaction avec la communauté.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">SocialMedia{item}</span>
                    <span className="font-semibold">{300 + (item * 100)}€/mois</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReseauxSociaux;
