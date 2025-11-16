import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { Box, Typography, TextField, Button } from "@mui/material";

export default function TopPageFilter({
  description,
  orgId,
  fetchFunc,
  initialData,
  onChange,
  pathClickAdd
}) {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickAdd = () => {
    navigate(pathClickAdd);
  };

  function filterByOrg(data) {
    return orgId ? data.filter((ter) => ter.idOfOrganization === orgId) : data;
  }

  async function fetchSearchAndFilter() {
    const { payload = [] } = await dispatch(fetchFunc({ search }));
    onChange(filterByOrg(payload));
  }

  useEffect(() => {
    if (!search) {
      onChange(filterByOrg(initialData));
    } else {
      fetchSearchAndFilter();
    }
  }, [search, orgId, initialData, onChange]);

  return (
    <Box
      color="#316743ff"
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      padding="0 3rem 0 5rem"
    >
      <Typography fontSize="2.5rem">{description}</Typography>
      <TextField
        sx={{ width: "25rem" }}
        label="Search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <Button onClick={handleClickAdd}>
        ➕
      </Button>
    </Box>
  );
}
