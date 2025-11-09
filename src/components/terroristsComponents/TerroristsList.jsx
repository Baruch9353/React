import { styled, Grid, Card, CardContent, Typography } from "@mui/material";

const StyledCard = styled(Card)({
  cursor: "pointer",
  transition: "0.3s",
  "&:hover": { transform: "scale(1.03)" },
   backgroundColor: "#c0e5f8ff",
  color: "green",
  borderRadius: "0.6rem",
  boxShadow: "0 4px 8px rgba(1, 1, 1, 0.7)",
  justifyItems: "center",
});


export default function TerroristList({ terrorists, onSelect }) {
  return (
    <Grid padding={11} margin={5} container spacing={6}>
      {terrorists.map((ter) => (
        <Grid size={{ xs: 12, md: 6 }} key={ter.id}>
          <StyledCard onClick={() => onSelect(ter)}>
            <CardContent>
              <Typography>
                <strong>{ter.name}</strong>
              </Typography>
              <hr />
              <Typography>
                {ter.organizationName}, Threat Level: {ter.threatLevel}
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
}
