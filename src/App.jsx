import { Routes, Route } from "react-router";

import InitDataApp from "./utils/InitDataApp.jsx";

import Dashboard from "./pages/DashboardPage.jsx";
import OrganizationsPage from "./pages/OrganizationsPage.jsx";
import TerroristsPage from "./pages/TerroristsPage.jsx";

import Layout from "./components/layout/Layout.jsx";
import AddOrganiztionForm from "./components/organizationsComponents/AddOrganizationForm.jsx";
import AddTerroristForm from "./components/terroristsComponents/AddTerroristForm.jsx";
import UpdateTerroristForm from "./components/terroristsComponents/UpdateTerroristForm.jsx";

export default function App() {
  return (
    <Layout>
      <InitDataApp />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/organizations" element={<OrganizationsPage />} />
        <Route path="/organization/:orgId" element={<TerroristsPage />} />
        <Route path="/addOrganization" element={<AddOrganiztionForm />} />

        <Route path="/terrorists" element={<TerroristsPage />} />
        <Route path="/addTerrorist" element={<AddTerroristForm />} />
        <Route path="/addTerrorist/:orgId" element={<AddTerroristForm />} />
        <Route path="/updateTerrorist/:orgId/:id" element={<UpdateTerroristForm />} />
      </Routes>
    </Layout>
  );
}
