import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function OrganizationsTable({ organizations, terrorists }) {
  return (
    <TableContainer
      sx={{
        backgroundColor: " #d7f4ff8b",
        margin: "1rem 0 0 1rem"
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Organization</strong>
            </TableCell>
            <TableCell>
              <strong>Activity years</strong>
            </TableCell>
            <TableCell>
              <strong>Threat level</strong>
            </TableCell>
            <TableCell>
              <strong>Total terrorists</strong>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {organizations.map((org) => (
            <TableRow key={org.id}>
              <TableCell>{org.name}</TableCell>
              <TableCell>{org.activityYears}</TableCell>
              <TableCell>{org.threatLevel}</TableCell>
              <TableCell>
                {
                  terrorists.filter(
                    (terrorist) => terrorist.idOfOrganization === org.id
                  ).length
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
