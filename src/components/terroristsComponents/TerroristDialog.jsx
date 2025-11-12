import {
  styled,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
} from "@mui/material";

const StyledDialog = styled(Dialog)({
  "& .MuiDialogTitle-root": {
    backgroundColor: "#c0e5f8ff",
    color: "green",
  },
  "& .MuiDialogContent-root": {
    backgroundColor: "#d6f0feff",
    color: "green",
  },
});

export default function TerroristDialog({ open, terrorist, onClose }) {
  return (
    <>
      {terrorist && (
        <StyledDialog open={open} onClose={onClose}>
          <DialogTitle>
            <strong>
              {terrorist.name} ➡️ {terrorist.organizationName}
            </strong>
          </DialogTitle>
          <DialogContent dividers>
            <Typography>
              <strong>Threat Level:</strong> {terrorist.threatLevel}
            </Typography>
            <Typography>
              <strong>Activity years:</strong> {terrorist.activityYears}
            </Typography>
            <Typography>
              <strong>Status:</strong> {terrorist.status}
            </Typography>
            <Typography>
              <strong>Intel note:</strong> {terrorist.intelNote}
            </Typography>
            <Typography>
              <strong>Updated by:</strong> {terrorist.updatedBy}
            </Typography>
            <Typography>
              <strong>Last updated:</strong> {terrorist.lastUpdated}
            </Typography>
          </DialogContent>
        </StyledDialog>
      )}
    </>
  );
}
