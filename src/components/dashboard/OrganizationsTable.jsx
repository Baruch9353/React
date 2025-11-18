import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function OrganizationsTable({ organizations }) {
  const columns = [
    { id: "name", label: "Organization" },
    { id: "activityYears", label: "Activity years" },
    { id: "threatLevel", label: "Threat level" },
    { id: "terroristCount", label: "Total terrorists" },
  ];

  return (
    <TableContainer
      sx={{
        backgroundColor: " #d7f4ff8b",
        margin: "1rem",
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell key={col.id}>
                <strong>{col.label}</strong>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {organizations.map((org) => (
            <TableRow key={org.id}>
              <TableCell>{org.name}</TableCell>
              <TableCell>{org.activityYears}</TableCell>
              <TableCell>{org.threatLevel}</TableCell>
              <TableCell>{org.terroristCount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
