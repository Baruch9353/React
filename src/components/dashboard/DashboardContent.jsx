import { Box, Typography, Paper } from "@mui/material";
import OrganizationsTable from "./OrganizationsTable";

export default function DashboardContent({ organizations, terrorists }) {
  return (
    <Box
      sx={{
        color: "#316743",
        display: "flex",
        flexDirection: "column",
        padding: "2rem 2rem 2rem 2rem",
        margin: "2rem 2rem 2rem 2rem"
      }}
    >
      <Typography fontSize="2rem" align="center">
        Dashboard Overview
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Typography fontSize="1.5rem">
          Total Organizations: {organizations.length || 0}
        </Typography>
        <Typography fontSize="1.5rem">
          Total Terrorists: {terrorists.length || 0}
        </Typography>
      </Box>

        <OrganizationsTable
          organizations={organizations}
          terrorists={terrorists}
        />
    </Box>
  );
}
