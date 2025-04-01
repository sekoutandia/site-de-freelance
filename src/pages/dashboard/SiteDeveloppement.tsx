
import React from 'react';
import { Code, Globe, Smartphone, Database } from 'lucide-react';

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
            {[1, 2, 3].map((item) => (
              <div key={item} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-medium mb-2">Développeur full-stack</h3>
                <p className="text-sm text-muted-foreground mb-3">Développement de sites web, applications et solutions techniques personnalisées.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">DevPro{item}</span>
                  <span className="font-semibold">{60 + (item * 20)}€/h</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteDeveloppement;
