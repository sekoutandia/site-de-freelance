
import React from 'react';
import { Presentation, GraduationCap, Lightbulb, BookOpen } from 'lucide-react';

const FormationsCoaching = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Formations & Coaching</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-muted-foreground mb-4">
          Des formations professionnelles et du coaching personnalisé pour développer vos compétences.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <GraduationCap className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">Formations en ligne</h3>
          </div>
          
          <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <Presentation className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">Coaching professionnel</h3>
          </div>
          
          <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <Lightbulb className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">Mentorat</h3>
          </div>
          
          <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <BookOpen className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">Ressources pédagogiques</h3>
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Formations populaires</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video bg-gray-100"></div>
                <div className="p-4">
                  <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded mb-2">Bestseller</span>
                  <h3 className="font-medium mb-2">Formation complète en {['marketing digital', 'développement web', 'design graphique'][item % 3]}</h3>
                  <p className="text-sm text-muted-foreground mb-2">Apprenez les compétences essentielles avec un expert du domaine.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Formateur{item}</span>
                    <span className="font-semibold">{199 + (item * 50)}€</span>
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

export default FormationsCoaching;
