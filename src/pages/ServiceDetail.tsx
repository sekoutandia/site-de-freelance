
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Clock, Heart, MessageSquare, CheckCircle, User, Calendar } from "lucide-react";
import { toast } from "sonner";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [liked, setLiked] = useState(false);
  
  const handleLike = () => {
    setLiked(!liked);
    if (!liked) {
      toast.success("Service ajouté aux favoris !");
    } else {
      toast.success("Service retiré des favoris");
    }
  };
  
  const handleContact = () => {
    toast.success("Message envoyé au freelance !");
  };
  
  const handleOrder = () => {
    toast.success("Vous allez être redirigé vers le processus de commande");
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="py-8">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-4">
                  Je vais créer un site web professionnel et responsive pour votre entreprise
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">4.9</span>
                    <span className="text-muted-foreground">(128 avis)</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Délai de livraison: 7 jours</span>
                  </div>
                </div>
                
                <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden mb-8">
                  <img 
                    src="/placeholder.svg" 
                    alt="Aperçu du service"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <Tabs defaultValue="description">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="details">Détails</TabsTrigger>
                  <TabsTrigger value="reviews">Avis</TabsTrigger>
                </TabsList>
                
                <TabsContent value="description" className="mt-6">
                  <div className="prose max-w-none">
                    <h3 className="text-xl font-semibold mb-4">À propos de ce service</h3>
                    <p className="mb-4">
                      Je vais créer un site web professionnel et entièrement responsive pour votre entreprise ou projet personnel. Avec plus de 5 ans d'expérience dans le développement web, je vous garantis un site moderne, rapide et optimisé pour les moteurs de recherche.
                    </p>
                    <p className="mb-4">
                      Que vous soyez une petite entreprise, un freelance ou une start-up, je vais concevoir un site web qui représente parfaitement votre marque et qui convertit les visiteurs en clients.
                    </p>
                    <p className="mb-4">
                      Mes sites web sont:
                    </p>
                    <ul className="list-disc pl-5 mb-4 space-y-2">
                      <li>100% responsive (adapté à tous les appareils)</li>
                      <li>Optimisés pour le SEO</li>
                      <li>Rapides et performants</li>
                      <li>Faciles à utiliser et à mettre à jour</li>
                      <li>Sécurisés et fiables</li>
                    </ul>
                  </div>
                </TabsContent>
                
                <TabsContent value="details" className="mt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Ce qui est inclus</h3>
                      <ul className="space-y-3">
                        {['Design personnalisé', 'Jusqu\'à 5 pages', 'Formulaire de contact', 'Intégration des réseaux sociaux', 'Optimisation mobile'].map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Révisions</h3>
                      <p>Jusqu'à 3 révisions incluses dans le prix de base.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Technologies utilisées</h3>
                      <div className="flex flex-wrap gap-2">
                        {['HTML5', 'CSS3', 'JavaScript', 'React', 'WordPress', 'Responsive Design'].map((tech, index) => (
                          <span key={index} className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="reviews" className="mt-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">128 avis</h3>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">4.9</span>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {[1, 2, 3].map((review) => (
                        <div key={review} className="border-b pb-6 last:border-0">
                          <div className="flex justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                                <User className="h-4 w-4" />
                              </div>
                              <div>
                                <p className="font-medium">Client{review}</p>
                                <div className="flex">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="text-sm text-muted-foreground flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>Il y a {review} semaine{review > 1 ? 's' : ''}</span>
                            </div>
                          </div>
                          <p className="text-sm">
                            Travail parfait ! Le freelance a répondu à toutes mes attentes et a livré le projet dans les délais. Je recommande vivement ses services et je n'hésiterai pas à faire appel à lui pour mes futurs projets.
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Commander ce service</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold">250 €</h3>
                    <div className="text-sm text-muted-foreground">Prix fixe</div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Délai de livraison: 7 jours</span>
                  </div>
                  
                  <div className="space-y-4 pt-4">
                    <Button 
                      className="w-full"
                      onClick={handleOrder}
                    >
                      Commander maintenant
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={handleContact}
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Contacter le vendeur
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      className={`w-full ${liked ? 'text-red-500' : ''}`}
                      onClick={handleLike}
                    >
                      <Heart className={`mr-2 h-4 w-4 ${liked ? 'fill-red-500' : ''}`} />
                      {liked ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>À propos du vendeur</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                      <User className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">WebDeveloperPro</h3>
                      <p className="text-sm text-muted-foreground">Développeur Web</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Membre depuis</p>
                      <p className="font-medium">Juin 2021</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Temps de réponse</p>
                      <p className="font-medium">~2 heures</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Projets livrés</p>
                      <p className="font-medium">187</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Note moyenne</p>
                      <p className="font-medium flex items-center">
                        4.9 <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 ml-1" />
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServiceDetail;
