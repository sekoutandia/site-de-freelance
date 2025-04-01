
import React from 'react';
import { Palette, Image, FileType, Figma } from 'lucide-react';

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
            {[1, 2, 3].map((item) => (
              <div key={item} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video bg-gray-100"></div>
                <div className="p-4">
                  <h3 className="font-medium mb-2">Service de design professionnel</h3>
                  <p className="text-sm text-muted-foreground mb-2">Création de designs uniques et personnalisés pour votre marque.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">DesignerPro{item}</span>
                    <span className="font-semibold">{50 + (item * 25)}€</span>
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

export default DesignGraphisme;
