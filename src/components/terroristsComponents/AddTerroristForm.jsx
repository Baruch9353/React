import { useState } from "react";
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
  const dispatch = useDispatch();
  const { allOrganizationsList } = useSelector((state) => state.organizations);

  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {
      organizationName,
      name,
      threatLevel,
      status,
      activityYears,
      intelNote,
      intelConfidence,
      lastUpdated,
      updatedBy,
    } = event.target;

    const org = allOrganizationsList.find(
      (org) => org.id === organizationName.value
    );
    try {
      await dispatch(
        fetchAddTerrorist({
          idOfOrganization: org.id,
          organizationName: org.name,
          name: name.value,
          threatLevel: threatLevel.value,
          status: status.value,
          activityYears: activityYears.value,
          intelNote: intelNote.value,
          intelConfidence: intelConfidence.value,
          lastUpdated: lastUpdated.value,
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
        justifySelf: "center",
        gap: 2,
        width: 600,
      }}
    >
      <Typography fontSize="2rem" color="#316743ff">
        Add a new terrorist
      </Typography>

      <Typography fontSize="1rem" color="#316743ff">
        Select organization
      </Typography>
      <Select name="organizationName" defaultValue="" required>
        {allOrganizationsList.map((org) => (
          <MenuItem key={org.id} value={org.id}>
            {org.name}
          </MenuItem>
        ))}
      </Select>

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
      <TextField name="activityYears" label="Activity Years" required />

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
        Last Updated
      </Typography>
      <TextField name="lastUpdated" label="Last Updated" required />

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
