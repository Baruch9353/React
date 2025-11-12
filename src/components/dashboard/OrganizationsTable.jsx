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
        backgroundColor: " #d7f4ff76",
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Organization</strong>
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
