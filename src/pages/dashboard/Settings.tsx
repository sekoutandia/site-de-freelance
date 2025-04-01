
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const Settings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    marketing: false,
    orders: true,
    messages: true
  });

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Paramètres</h2>
      </div>
      
      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profil</TabsTrigger>
          <TabsTrigger value="account">Compte</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="billing">Facturation</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Informations du profil</CardTitle>
              <CardDescription>
                Mettez à jour vos informations personnelles visibles sur votre profil public.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nom complet</Label>
                <Input id="name" defaultValue="Jean Freelance" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="title">Titre professionnel</Label>
                <Input id="title" defaultValue="Designer & Développeur Web" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Biographie</Label>
                <textarea 
                  id="bio" 
                  rows={4} 
                  className="w-full min-h-[80px] resize-y rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  defaultValue="Designer web avec plus de 5 ans d'expérience, spécialisé dans la création d'interfaces utilisateur modernes et intuitives."
                />
              </div>
              <div className="pt-2">
                <Button>Enregistrer les modifications</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Préférences de notifications</CardTitle>
              <CardDescription>
                Paramétrez les notifications que vous souhaitez recevoir.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between space-y-0">
                <div className="space-y-0.5">
                  <Label htmlFor="email-notifications">Notifications par email</Label>
                  <p className="text-sm text-muted-foreground">
                    Recevoir des mises à jour par email concernant vos commandes et services.
                  </p>
                </div>
                <Switch 
                  id="email-notifications" 
                  checked={notifications.email}
                  onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
                />
              </div>
              <div className="flex items-center justify-between space-y-0">
                <div className="space-y-0.5">
                  <Label htmlFor="marketing-notifications">Emails marketing</Label>
                  <p className="text-sm text-muted-foreground">
                    Recevoir des emails concernant les nouveautés et promotions.
                  </p>
                </div>
                <Switch 
                  id="marketing-notifications" 
                  checked={notifications.marketing}
                  onCheckedChange={(checked) => setNotifications({...notifications, marketing: checked})}
                />
              </div>
              <div className="flex items-center justify-between space-y-0">
                <div className="space-y-0.5">
                  <Label htmlFor="order-notifications">Mises à jour des commandes</Label>
                  <p className="text-sm text-muted-foreground">
                    Recevoir des notifications lorsque le statut d'une commande change.
                  </p>
                </div>
                <Switch 
                  id="order-notifications" 
                  checked={notifications.orders}
                  onCheckedChange={(checked) => setNotifications({...notifications, orders: checked})}
                />
              </div>
              <div className="pt-2">
                <Button>Enregistrer les préférences</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Les autres TabsContent (account, billing) seraient similaires */}
      </Tabs>
    </div>
  );
};

export default Settings;
