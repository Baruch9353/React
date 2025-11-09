import { styled, Dialog, DialogTitle, DialogContent, Typography } from "@mui/material";

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
            {terrorist.name} ➡️ {terrorist.organizationName}
          </DialogTitle>
          <DialogContent dividers>
            <Typography>
              <strong>Threat Level:</strong> {terrorist.threatLevel}
            </Typography>
            <Typography>
              <strong>Activity Years:</strong> {terrorist.activityYears}
            </Typography>
            <Typography>
              <strong>Status:</strong> {terrorist.status}
            </Typography>
            <Typography>
              <strong>Intel Note:</strong> {terrorist.intelNote}
            </Typography>
            <Typography>
              <strong>Updated By:</strong> {terrorist.updatedBy}
            </Typography>
            <Typography>
              <strong>Last Updated:</strong> {terrorist.lastUpdated}
            </Typography>
          </DialogContent>
        </StyledDialog>
      )}
    </>
  );
}
