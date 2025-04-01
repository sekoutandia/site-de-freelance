
import React from 'react';

const PourVous = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Pour vous</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-muted-foreground mb-4">
          Découvrez des services personnalisés en fonction de vos préférences et de votre historique.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Placeholder content */}
          <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="font-medium mb-2">Suggestions basées sur votre profil</h3>
            <p className="text-sm text-muted-foreground">Services recommandés selon vos intérêts</p>
          </div>
          
          <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="font-medium mb-2">Tendances du moment</h3>
            <p className="text-sm text-muted-foreground">Les services les plus populaires actuellement</p>
          </div>
          
          <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="font-medium mb-2">Continuez votre exploration</h3>
            <p className="text-sm text-muted-foreground">Services similaires à vos recherches récentes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PourVous;
