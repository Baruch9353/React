import { Routes, Route } from "react-router";
import InitDataApp from "./utils/InitDataApp.jsx";
import Layout from "./components/layout/Layout.jsx";
import Dashboard from "./pages/DashboardPage.jsx";
import OrganizationsPage from "./pages/OrganizationsPage.jsx";
import TerroristsPage from "./pages/TerroristsPage.jsx";
export default function App() {
  return (
    <Layout>
      <InitDataApp />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/organizations" element={<OrganizationsPage />} />
        <Route path="/organization/:orgId" element={<TerroristsPage />} />
        <Route path="/terrorists" element={<TerroristsPage />} />
      </Routes>
    </Layout>
  );
}
