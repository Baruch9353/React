import { useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import { fetchAddTerrorist } from "../../redux/api/fetchTerrorists";

const statuses = ["Active", "Detained", "Deceased", "Unknown"];
const intelConfidences = ["Low", "Medium", "High"];

export default function AddTerroristForm() {
  const { orgId } = useParams();

  const dispatch = useDispatch();
  const { allOrganizationsList } = useSelector((state) => state.organizations);

  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {
      organizationId,
      name,
      threatLevel,
      status,
      activityStart,
      activityEnd,
      intelNote,
      intelConfidence,
      updatedBy,
    } = event.target;

    const org = orgId
      ? allOrganizationsList.find((org) => org.id === orgId)
      : allOrganizationsList.find((org) => org.id === organizationId.value);
    try {
      await dispatch(
        fetchAddTerrorist({
          idOfOrganization: org.id,
          organizationName: org.name,
          name: name.value,
          threatLevel: threatLevel.value,
          status: status.value,
          activityYears:
            activityStart.value +
            (activityEnd.value ? " - " + activityEnd.value : "  -  Present"),
          intelNote: intelNote.value,
          intelConfidence: intelConfidence.value,
          lastUpdated: new Date().toLocaleDateString(),
          updatedBy: updatedBy.value,
        })
      ).unwrap();
      setFeedback("Terrorist added successfully!");
      event.target.reset();
    } catch (err) {
      setFeedback("Failed to add terrorist.");
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
        Add a new terrorist
      </Typography>

      {!orgId && (
        <>
          <Typography fontSize="1rem" color="#316743ff">
            Select organization
          </Typography>
          <Select name="organizationId" defaultValue="" required>
            {allOrganizationsList.map((org) => (
              <MenuItem key={org.id} value={org.id}>
                {org.name}
              </MenuItem>
            ))}
          </Select>
        </>
      )}

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
        label="Threat Level (1 - 5)"
        required
        inputProps={{ min: 1, max: 5 }}
      />

      <Typography fontSize="1rem" color="#316743ff">
        Select status
      </Typography>
      <Select name="status" defaultValue="" required>
        {statuses.map((status) => (
          <MenuItem key={status} value={status}>
            {status}
          </MenuItem>
        ))}
      </Select>

      <Typography fontSize="1rem" color="#316743ff">
        Activity Years
      </Typography>
      <>
        <TextField
          name="activityStart"
          type="month"
          label="_____From"
          required
        />
        <TextField name="activityEnd" type="month" label="_____To (optional)" />
      </>

      <Typography fontSize="1rem" color="#316743ff">
        Intel Note
      </Typography>
      <TextField name="intelNote" label="Intel Note" required />

      <Typography fontSize="1rem" color="#316743ff">
        Intel Confidence
      </Typography>
      <Select name="intelConfidence" defaultValue="" required>
        {intelConfidences.map((confidenceLevel) => (
          <MenuItem key={confidenceLevel} value={confidenceLevel}>
            {confidenceLevel}
          </MenuItem>
        ))}
      </Select>

      <Typography fontSize="1rem" color="#316743ff">
        Updated By
      </Typography>
      <TextField name="updatedBy" label="Updated By" required />

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
