
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Orders = () => {
  const orders = [
    {
      id: 1001,
      customer: "Jean Dupont",
      service: "Design de logo professionnel",
      date: "2023-07-15",
      price: "€120",
      status: "active",
      progress: 50
    },
    {
      id: 1002,
      customer: "Marie Lambert",
      service: "Développement de site web responsive",
      date: "2023-07-12",
      price: "€450",
      status: "revision",
      progress: 75
    },
    {
      id: 1003,
      customer: "Pierre Martin",
      service: "Amélioration SEO pour site existant",
      date: "2023-07-10",
      price: "€200",
      status: "completed",
      progress: 100
    },
    {
      id: 1004,
      customer: "Sophie Bernard",
      service: "Design de bannières publicitaires",
      date: "2023-07-05",
      price: "€80",
      status: "pending",
      progress: 0
    },
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">En cours</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">En attente</Badge>;
      case 'revision':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Révision</Badge>;
      case 'completed':
        return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">Terminée</Badge>;
      default:
        return <Badge>Inconnue</Badge>;
    }
  };

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Commandes</h2>
      </div>
      
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Toutes</TabsTrigger>
          <TabsTrigger value="active">En cours</TabsTrigger>
          <TabsTrigger value="pending">En attente</TabsTrigger>
          <TabsTrigger value="completed">Terminées</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Toutes les commandes</CardTitle>
              <CardDescription>
                Voir et gérer toutes vos commandes sur la plateforme
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {orders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between border-b pb-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium">Commande #{order.id}</h3>
                        {getStatusBadge(order.status)}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        <p>{order.service}</p>
                        <p>Client: {order.customer}</p>
                        <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <div className="text-right">
                        <span className="font-bold">{order.price}</span>
                      </div>
                      <Button variant="outline" size="sm">
                        Détails
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Commandes en cours</CardTitle>
              <CardDescription>
                Commandes qui sont actuellement en production
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {orders.filter(order => order.status === 'active').map((order) => (
                  <div key={order.id} className="flex items-center justify-between border-b pb-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium">Commande #{order.id}</h3>
                        {getStatusBadge(order.status)}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        <p>{order.service}</p>
                        <p>Client: {order.customer}</p>
                        <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <div className="text-right">
                        <span className="font-bold">{order.price}</span>
                      </div>
                      <Button variant="outline" size="sm">
                        Détails
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Les autres TabsContent (pending, completed) seraient similaires */}
      </Tabs>
    </div>
  );
};

export default Orders;
