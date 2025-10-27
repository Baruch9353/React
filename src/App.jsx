import { Routes, Route } from "react-router"
import Layout from "./components/layout/Layout.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import OrganizationsPage from "./pages/OrganizationsPage.jsx"
import TerroristsPage from "./pages/TerroristsPage.jsx"


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="organizations" element={<OrganizationsPage />} />
        <Route path="terrorists" element={<TerroristsPage />} />
      </Route>
    </Routes>
  )
}
