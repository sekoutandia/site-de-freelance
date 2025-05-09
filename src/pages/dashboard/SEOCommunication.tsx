
import React from 'react';
import { Search, BarChart, Mail, Share2 } from 'lucide-react';

const SEOCommunication = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">SEO & Communication</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-muted-foreground mb-4">
          Améliorez votre visibilité en ligne avec nos services de SEO et stratégies de communication.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <Search className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">Référencement SEO</h3>
          </div>
          
          <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <BarChart className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">Analytics & Rapports</h3>
          </div>
          
          <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <Mail className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">Email Marketing</h3>
          </div>
          
          <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <Share2 className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">Stratégie digitale</h3>
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Experts recommandés</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                  <div>
                    <h3 className="font-medium">Expert SEO {item}</h3>
                    <p className="text-xs text-muted-foreground">Consultant en référencement</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Spécialiste en optimisation pour les moteurs de recherche et stratégies de visibilité.</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Top Rated</span>
                  <span className="font-semibold">{80 + (item * 20)}€/h</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOCommunication;
