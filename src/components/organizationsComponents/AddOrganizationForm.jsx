import { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, TextField, Button, Typography } from "@mui/material";

import { fetchAddOrganization } from "../../redux/api/fetchOrganizations";

export default function AddOrganizationForm() {
  const dispatch = useDispatch();

  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, threatLevel, activityStart, activityEnd, infoUrl } =
      event.target;
    try {
      await dispatch(
        fetchAddOrganization({
          name: name.value,
          threatLevel: threatLevel.value,
          activityYears:
            activityStart.value +
            (activityEnd.value ? " - " + activityEnd.value : "  -  Present"),
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
        gap: 2,
        width: { xs: "85%", md: "50%" },
        mx: "auto",
      }}
    >
      <Typography fontSize="2rem" color="#316743ff">
        Add a new organization
      </Typography>

      <TextField name="name" label="Name" required />

      <TextField
        name="threatLevel"
        type="number"
        label="Threat Level (1 - 5)"
        required
        inputProps={{ min: 1, max: 5 }}
      />

      <>
        <TextField
          name="activityStart"
          type="month"
          label="_____From"
          helperText="Activity Years"
          variant="filled"
          required
        />
        <TextField
          name="activityEnd"
          type="month"
          label="_____To (optional, leave empty for Present)"
          helperText="Activity Years (leave empty for Present)"
          variant="filled"
        />
      </>

      <TextField name="infoUrl" label="Image URL (optional)" />

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
