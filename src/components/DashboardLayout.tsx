
import { Outlet, Link } from "react-router-dom";
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

// Component for the category navigation, now with links
const CategoryCard = ({ icon, title, link }: { icon: React.ReactNode, title: string, link: string }) => {
  return (
    <Link to={link} className="flex flex-col items-center space-y-2 hover:text-primary transition-colors px-2">
      <div className="w-12 h-12 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <span className="text-xs text-center font-medium whitespace-nowrap">{title}</span>
    </Link>
  );
};

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Category Navigation similar to comeup.fr */}
      <div className="border-b border-border/40 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between py-4 gap-4">
            <CategoryCard icon={<User className="h-6 w-6" />} title="Pour vous" link="/dashboard/pour-vous" />
            <CategoryCard icon={<Star className="h-6 w-6" />} title="Meilleurs services" link="/dashboard/meilleurs-services" />
            <CategoryCard icon={<LayoutPanelLeft className="h-6 w-6" />} title="Design & Graphisme" link="/dashboard/design-graphisme" />
            <CategoryCard icon={<Globe className="h-6 w-6" />} title="SEO & Communication" link="/dashboard/seo-communication" />
            <CategoryCard icon={<Film className="h-6 w-6" />} title="Audiovisuel" link="/dashboard/audiovisuel" />
            <CategoryCard icon={<Code className="h-6 w-6" />} title="Site & Développement" link="/dashboard/site-developpement" />
            <CategoryCard icon={<PenLine className="h-6 w-6" />} title="Rédaction" link="/dashboard/redaction" />
            <CategoryCard icon={<Megaphone className="h-6 w-6" />} title="Réseaux sociaux" link="/dashboard/reseaux-sociaux" />
            <CategoryCard icon={<BookOpen className="h-6 w-6" />} title="Business" link="/dashboard/business" />
            <CategoryCard icon={<GraduationCap className="h-6 w-6" />} title="Formations & Coaching" link="/dashboard/formations-coaching" />
          </div>
        </div>
      </div>

      {/* Dashboard Content - Outlet renders child routes */}
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
