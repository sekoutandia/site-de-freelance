
import React from 'react';
import { Video, Camera, Mic, Film } from 'lucide-react';

const Audiovisuel = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Audiovisuel</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-muted-foreground mb-4">
          Des services audiovisuels professionnels pour vos projets vidéo, photo et audio.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <Video className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">Montage vidéo</h3>
          </div>
          
          <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <Camera className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">Photographie</h3>
          </div>
          
          <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <Mic className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">Production audio</h3>
          </div>
          
          <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <Film className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="font-medium">Animation</h3>
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Projets récents</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((item) => (
              <div key={item} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video bg-gray-100"></div>
                <div className="p-4">
                  <h3 className="font-medium mb-2">Projet audiovisuel professionnel</h3>
                  <p className="text-sm text-muted-foreground mb-2">Réalisation de vidéos promotionnelles et contenu pour les réseaux sociaux.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Studio{item}</span>
                    <span className="font-semibold">{250 + (item * 150)}€</span>
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

export default Audiovisuel;
