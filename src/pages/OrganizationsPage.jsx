import { useSelector } from "react-redux";
import { selectOrganizationsWithTerrorists } from "../redux/selectors/selectTerroristsInOrg.js";
import OrganizationsList from "../components/organizationsComponents/OrganizationList.jsx";
import StatusData from "../utils/StatusData.jsx";

export default function OrganizationsPage() {
  const organizations = useSelector(selectOrganizationsWithTerrorists);
  const { loading, error } = useSelector((state) => state.organizations);

  return (
    <StatusData
      loading={loading}
      error={error}
      content={<OrganizationsList organizations={organizations} />}
    />
  );
}
