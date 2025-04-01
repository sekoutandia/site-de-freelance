
import { Outlet } from "react-router-dom";
import { 
  User,
  Star,
  PenLine,
  LayoutPanelLeft,
  Globe,
  Film,
  Code,
  Megaphone,
  BookOpen,
  GraduationCap
} from "lucide-react";

// Component for the category navigation, moved from Dashboard.tsx
const CategoryCard = ({ icon, title }: { icon: React.ReactNode, title: string }) => {
  return (
    <div className="flex flex-col items-center space-y-2 cursor-pointer hover:text-primary transition-colors px-2">
      <div className="w-12 h-12 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <span className="text-xs text-center font-medium whitespace-nowrap">{title}</span>
    </div>
  );
};

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Category Navigation similar to comeup.fr */}
      <div className="border-b border-border/40 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between py-4 gap-4">
            <CategoryCard icon={<User className="h-6 w-6" />} title="Pour vous" />
            <CategoryCard icon={<Star className="h-6 w-6" />} title="Meilleurs services" />
            <CategoryCard icon={<LayoutPanelLeft className="h-6 w-6" />} title="Design & Graphisme" />
            <CategoryCard icon={<Globe className="h-6 w-6" />} title="SEO & Communication" />
            <CategoryCard icon={<Film className="h-6 w-6" />} title="Audiovisuel" />
            <CategoryCard icon={<Code className="h-6 w-6" />} title="Site & Développement" />
            <CategoryCard icon={<PenLine className="h-6 w-6" />} title="Rédaction" />
            <CategoryCard icon={<Megaphone className="h-6 w-6" />} title="Réseaux sociaux" />
            <CategoryCard icon={<BookOpen className="h-6 w-6" />} title="Business" />
            <CategoryCard icon={<GraduationCap className="h-6 w-6" />} title="Formations & Coaching" />
          </div>
        </div>
      </div>

      {/* Dashboard Content - Outlet renders child routes */}
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
