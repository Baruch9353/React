import { useSelector } from "react-redux";
import StatusData from "../utils/StatusData.jsx";
import DashboardContent from "../components/dashboard/DashboardContent.jsx";

export default function DashboardPage() {
  const organizations = useSelector(
    (state) => state.organizations.allOrganizationsList
  );
  const terrorists = useSelector((state) => state.terrorists.allTerroristsList);
  const loading = useSelector(
    (state) => state.organizations.loading || state.terrorists.loading
  );
  const error = useSelector(
    (state) => state.organizations.error || state.terrorists.error
  );

  return (
    <StatusData
      loading={loading}
      error={error}
      content={
        <DashboardContent
          organizations={organizations}
          terrorists={terrorists}
        />
      }
    />
  );
}
