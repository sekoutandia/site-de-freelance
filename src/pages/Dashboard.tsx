
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  // Rediriger vers la vue d'ensemble par défaut
  return <Navigate to="/dashboard/overview" replace />;
};

export default Dashboard;
