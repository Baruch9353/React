import { Avatar, Card, CardContent, Typography, styled } from "@mui/material";

const StyledCard = styled(Card)({
  cursor: "pointer",
  transition: "0.3s",
  "&:hover": { transform: "scale(1.03)" },
  backgroundColor: "#c0e5f8ff",
  color: "green",
  borderRadius: "1rem",
  boxShadow: "0 4px 8px rgba(1, 1, 1, 0.7)",
});
const StyledAvatar = styled(Avatar)({
  justifySelf: "center",
  width: "5rem",
  height: "3rem",
  margin: "1rem 0",
});

export default function OrganizationCard({ org }) {
  return (
    <StyledCard>
      <CardContent>
        <Typography fontSize="1.8rem" gutterBottom borderBottom={"1px solid "}>
          {org.name}
        </Typography>
        <StyledAvatar alt={org.name} src={org.infoUrl} variant="rounded" />
        <Typography fontSize="1.3rem">{org.activityYears}</Typography>
        <Typography fontSize="1.3rem">
          Threat Level: {org.threatLevel}
        </Typography>
        <Typography fontSize="1.3rem">
          {org.terroristsCount} Terrorists
        </Typography>
      </CardContent>
    </StyledCard>
  );
}
