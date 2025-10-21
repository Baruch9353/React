import { Routes, Route } from "react-router"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Layout</div>} />
      <Route path="/organizations" element={<div>Organizations</div>} />
      <Route path="/terrorists" element={<div>Terrorists</div>} />
      <Route path="/singleOrganization" element={<div>SingleOrganization</div>} />
      <Route path="/addOrganization" element={<div>AddOrganization</div>} />
      <Route path="/singleTerrorist" element={<div>SingleTerrorist</div>} />
      <Route path="/addTerrorist" element={<div>AddTerrorist</div>} />
    </Routes>
  )
}
