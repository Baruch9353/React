import InitDataApp from "./utils/InitDataApp.jsx";

import Layout from "./components/layout/Layout.jsx";

import AppRoutes from "./AppRoutes.jsx";

export default function App() {
  return (
    <Layout>
      <InitDataApp />
      <AppRoutes />
    </Layout>
  );
}
