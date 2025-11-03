import { Avatar, Card, CardContent, Typography, styled } from "@mui/material";

const StyledCard = styled(Card)({
  backgroundColor: "#d7f2ffff",
  color: "green",
  borderRadius: "1rem",
  boxShadow: "0 4px 8px rgba(1, 1, 1, 0.7)",
  alignItems: 'center',
  textAlign: 'center',
});

export default function OrganizationCard({org}) {
  return (
    <StyledCard >
      <CardContent>
        <Avatar alt={org.name} src={org.infoUrl} />
        <Typography fontSize="1.8rem" gutterBottom>
            {org.name}
        </Typography>
        <Typography fontSize="1.3rem">
            {org.activityYears}
        </Typography>
        <Typography fontSize="1.3rem">
            Threat Level: {org.threatLevel}
        </Typography>
        <Typography fontSize="1.3rem">
            ** Terrorists
        </Typography>
      </CardContent>
    </StyledCard>
  );
}
