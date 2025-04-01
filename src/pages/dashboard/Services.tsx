
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Design de logo professionnel",
      category: "Design Graphique",
      price: "€120",
      orders: 12,
      image: "https://placehold.co/100x100",
      status: "active"
    },
    {
      id: 2,
      title: "Développement de site web responsive",
      category: "Développement Web",
      price: "€450",
      orders: 8,
      image: "https://placehold.co/100x100",
      status: "active"
    },
    {
      id: 3,
      title: "Amélioration SEO pour site existant",
      category: "Marketing Digital",
      price: "€200",
      orders: 4,
      image: "https://placehold.co/100x100",
      status: "active"
    }
  ];

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Mes Services</h2>
        <Button className="flex items-center gap-2">
          <PlusCircle className="h-4 w-4" />
          <span>Nouveau service</span>
        </Button>
      </div>
      
      <div className="grid gap-4 md:grid-cols-1">
        <Card>
          <CardHeader>
            <CardTitle>Services actifs</CardTitle>
            <CardDescription>
              Gérez tous vos services proposés sur la plateforme
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {services.map((service) => (
                <div key={service.id} className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-16 w-16 overflow-hidden rounded-md bg-gray-100">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{service.title}</h3>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <span>{service.category}</span>
                        <span>•</span>
                        <span>{service.price}</span>
                        <span>•</span>
                        <span>{service.orders} commandes</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/dashboard/services/${service.id}`}>Modifier</Link>
                    </Button>
                    <Button variant="outline" size="sm">
                      Statistiques
                    </Button>
                    <Button variant="outline" size="sm">
                      Pause
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Services;
