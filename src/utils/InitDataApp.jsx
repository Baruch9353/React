import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchOrganizations } from "../redux/api/fetchOrganizations";
import { fetchTerrorists } from "../redux/api/fetchTerrorists";

export default function InitDataApp() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrganizations());
    dispatch(fetchTerrorists());
  }, []);
}
