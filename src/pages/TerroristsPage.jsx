import TerroristsAccordion from "../components/terroristsComponents/TerroristsContainer.jsx";
import StatusData from "../utils/StatusData.jsx";
import { selectTerroristsWithOrgs } from "../redux/selectors/selectOrganizationsOfTerrorist.js";
import { useSelector } from "react-redux";

export default function TerroristsPage({ organization }) {
  const terroristsList = useSelector(selectTerroristsWithOrgs);
  const { loading, error } = useSelector((state) => state.terrorists);

  const listToShow = organization?.terroristsList || terroristsList || [];

  return (
    <StatusData
      loading={loading}
      error={error}
      content={<TerroristsAccordion terrorists={listToShow} />}
    />
  );
}
