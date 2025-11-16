import { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, TextField, Button, Typography } from "@mui/material";

import { fetchAddOrganization } from "../../redux/api/fetchOrganizations";

export default function AddOrganizationForm() {
  const dispatch = useDispatch();

  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, threatLevel, activityYears, infoUrl } = event.target;
    try {
      await dispatch(
        fetchAddOrganization({
          name: name.value,
          threatLevel: threatLevel.value,
          activityYears: activityYears.value,
          infoUrl: infoUrl.value,
        })
      ).unwrap();
      setFeedback("Organization added successfully!");
      event.target.reset();
    } catch (err) {
      setFeedback("Failed to add Organization.");
    }
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifySelf: "center",
        gap: 2,
        width: 600,
      }}
    >
      <Typography fontSize="2rem" color="#316743ff">
        Add a new organization
      </Typography>

      <Typography fontSize="1rem" color="#316743ff">
        Name
      </Typography>
      <TextField name="name" label="Name" required />

      <Typography fontSize="1rem" color="#316743ff">
        Threat Level
      </Typography>
      <TextField
        name="threatLevel"
        type="number"
        label="Threat Level"
        required
      />

      <Typography fontSize="1rem" color="#316743ff">
        Activity Years
      </Typography>
      <TextField name="activityYears" label="Activity Years" required />

      <Typography fontSize="1rem" color="#316743ff">
        Image URL
      </Typography>
      <TextField name="infoUrl" label="Image URL" required />

      {feedback && (
        <Typography color={feedback.includes("successfully") ? "green" : "red"}>
          {feedback}
        </Typography>
      )}
      <Button type="submit" variant="outlined">
        Submit
      </Button>
    </Box>
  );
}
