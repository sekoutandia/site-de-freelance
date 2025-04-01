
import React from 'react';
import { FileText, FileCheck, Languages, Book } from 'lucide-react';

const Redaction = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Rédaction</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-muted-foreground mb-4">
          Services de rédaction, traduction et création de contenu pour tous vos besoins éditoriaux.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <FileText className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">Rédaction web</h3>
          </div>
          
          <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <FileCheck className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">Copywriting</h3>
          </div>
          
          <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <Languages className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">Traduction</h3>
          </div>
          
          <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <Book className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">Relecture</h3>
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Rédacteurs recommandés</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                  <div>
                    <h3 className="font-medium">Rédacteur {item}</h3>
                    <p className="text-xs text-muted-foreground">Expert en contenu web</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Rédaction d'articles, descriptions de produits et contenu optimisé SEO.</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Français/Anglais</span>
                  <span className="font-semibold">{0.08 + (item * 0.02)}€/mot</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Redaction;
