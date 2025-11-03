import { styled, Container, Grid, Typography } from "@mui/material";
import OrganizationCard from "./OrganizationCard";

const StyledContainer = styled(Container)({
  marginTop: "1rem",
  textAlign: "center",
  padding: "3rem",
  backgroundColor: "#c0e5f8ff",
  borderRadius: "1rem",
});

export default function OrganizationList({ organizations }) {
  return (
    <StyledContainer>
      <Typography color="#316743" gutterBottom fontSize="2.3rem">
        Organizations
      </Typography>
      <Grid container spacing={7} justifyContent="center">
        {organizations.map((org) => (
          <Grid item key={org.id}>
            <OrganizationCard org={org} />
          </Grid>
        ))}
      </Grid>
    </StyledContainer>
  );
}
