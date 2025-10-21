import { Routes, Route } from "react-router"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Layout</div>} />
      <Route path="/dashboard" element={<div>Dashboard</div>} />
      <Route path="/organizations" element={<div>Organizations</div>} />
      <Route path="/terrorists" element={<div>Terrorists</div>} />
    </Routes>
  )
}
