
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Send } from "lucide-react";

const Messages = () => {
  const conversations = [
    {
      id: 1,
      name: "Jean Dupont",
      lastMessage: "Bonjour, je suis intéressé par votre service de design de logo.",
      time: "10:30",
      unread: true,
      avatar: "https://placehold.co/40x40"
    },
    {
      id: 2,
      name: "Marie Lambert",
      lastMessage: "Merci pour votre proposition, j'aimerais discuter des délais.",
      time: "Hier",
      unread: false,
      avatar: "https://placehold.co/40x40"
    },
    {
      id: 3,
      name: "Pierre Martin",
      lastMessage: "Le design final est parfait, merci beaucoup !",
      time: "Lun",
      unread: false,
      avatar: "https://placehold.co/40x40"
    },
  ];

  return (
    <div className="flex-1 p-0">
      <div className="grid grid-cols-1 md:grid-cols-3 h-[calc(100vh-160px)]">
        {/* Sidebar des conversations */}
        <div className="border-r md:col-span-1 bg-muted/30">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                type="text" 
                placeholder="Rechercher une conversation..." 
                className="pl-10 pr-4 bg-background"
              />
            </div>
          </div>
          <div className="overflow-y-auto h-[calc(100%-60px)]">
            {conversations.map((conversation) => (
              <div 
                key={conversation.id} 
                className={`p-4 border-b hover:bg-muted/50 cursor-pointer ${conversation.unread ? 'bg-muted/30' : ''}`}
              >
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img 
                      src={conversation.avatar} 
                      alt={conversation.name} 
                      className="h-10 w-10 rounded-full"
                    />
                    {conversation.unread && (
                      <span className="absolute top-0 right-0 h-3 w-3 bg-primary rounded-full"></span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-sm truncate">{conversation.name}</h3>
                      <span className="text-xs text-muted-foreground">{conversation.time}</span>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">
                      {conversation.lastMessage}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Zone de conversation */}
        <div className="md:col-span-2 flex flex-col h-full">
          {/* Entête du chat */}
          <div className="p-4 border-b flex items-center space-x-3">
            <img 
              src="https://placehold.co/40x40" 
              alt="Jean Dupont" 
              className="h-10 w-10 rounded-full"
            />
            <div>
              <h3 className="font-medium">Jean Dupont</h3>
              <p className="text-xs text-muted-foreground">En ligne</p>
            </div>
          </div>
          
          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              <div className="flex items-end">
                <img 
                  src="https://placehold.co/40x40" 
                  alt="Jean Dupont" 
                  className="h-8 w-8 rounded-full mr-2"
                />
                <div className="bg-muted p-3 rounded-lg rounded-bl-none max-w-[70%]">
                  <p className="text-sm">Bonjour, je suis intéressé par votre service de design de logo.</p>
                  <span className="text-xs text-muted-foreground mt-1">10:30</span>
                </div>
              </div>
              
              <div className="flex items-end justify-end">
                <div className="bg-primary text-primary-foreground p-3 rounded-lg rounded-br-none max-w-[70%]">
                  <p className="text-sm">Bonjour Jean ! Je suis ravi de l'intérêt que vous portez à mes services. Pourriez-vous me donner plus de détails sur votre projet ?</p>
                  <span className="text-xs text-primary-foreground/80 mt-1">10:32</span>
                </div>
              </div>
              
              <div className="flex items-end">
                <img 
                  src="https://placehold.co/40x40" 
                  alt="Jean Dupont" 
                  className="h-8 w-8 rounded-full mr-2"
                />
                <div className="bg-muted p-3 rounded-lg rounded-bl-none max-w-[70%]">
                  <p className="text-sm">Bien sûr. Je suis en train de lancer une startup dans le domaine de la technologie et j'ai besoin d'un logo moderne et épuré qui représente l'innovation.</p>
                  <span className="text-xs text-muted-foreground mt-1">10:35</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Zone de saisie */}
          <div className="border-t p-4">
            <div className="flex items-center space-x-2">
              <Input
                type="text"
                placeholder="Écrivez votre message..."
                className="flex-1"
              />
              <Button size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
