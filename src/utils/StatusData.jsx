import { Box, CircularProgress } from "@mui/material";

export default function StatusData(loading, error, content) {
  if (loading) {
    return (
      <Box display="flex" alignItems="center">
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return (
      <Box display="flex" alignItems="center">
        Error loading data: {error}
      </Box>
    );
  }

  return content;
}
