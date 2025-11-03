import { useSelector } from "react-redux";
import OrganizationsList from "../components/organizationsComponents/OrganizationList.jsx";
import StatusData from "../utils/StatusData.jsx";

export default function OrganizationsPage() {
  const { organizations, loading, error } = useSelector(
    (state) => state.organization
  );
    
  return StatusData(
    loading,
    error,
    <OrganizationsList organizations={organizations} />
  );
}
