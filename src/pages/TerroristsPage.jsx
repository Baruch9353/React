import { useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

import { fetchTerrorists } from "../redux/api/fetchTerrorists.js";

import StatusData from "../utils/StatusData.jsx";

import TopPageFilter from "../components/TopPage/TopPageFilter.jsx";
import TerroristsAccordion from "../components/terroristsComponents/TerroristsList.jsx";

export default function TerroristsPage() {
  const { orgId } = useParams();
  const { loading, error, allTerroristsList } = useSelector(
    (state) => state.terrorists
  );
  const [filtered, setFiltered] = useState(allTerroristsList);

  return (
    <>
      <TopPageFilter
        description="Terrorists"
        orgId={orgId}
        fetchFunc={fetchTerrorists}
        initialData={allTerroristsList}
        onChange={setFiltered}
        pathClickAdd={`/addTerrorist${orgId ? "/" + orgId : ""}`}
      />
      <StatusData
        loading={loading}
        error={error}
        content={<TerroristsAccordion terrorists={filtered} />}
      />
    </>
  );
};
