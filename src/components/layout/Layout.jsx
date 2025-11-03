import SentinelEye from "../../assets/SentinelEye.png";
import { Logo } from "../layout/AppDrawer.jsx";
import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router";
import AppDrawer from "../layout/AppDrawer.jsx";

const StyledAppBar = styled(AppBar)({
  position: "fixed",
  background: "#c0e5f8ff",
  color: "#316743ff",
  boxShadow: "0 4px 8px rgba(31, 72, 89, 0.8)",
});

const StyledToolbar = styled(Toolbar)({
  justifyContent: "space-between",
});

const Title = styled(Typography)({
  fontSize: "3rem",
  cursor: "pointer",
});

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <StyledAppBar>
        <StyledToolbar>
          <IconButton color="inherit" onClick={() => setOpen(true)}>
            <MenuIcon fontSize="large" />
          </IconButton>
          <Title onClick={() => navigate("/dashboard")}>Sentinel Eye</Title>
          <Logo
            src={SentinelEye}
            alt="Sentinel Eye"
            onClick={() => navigate("/dashboard")}
          />
        </StyledToolbar>
      </StyledAppBar>
      <Box mt={"8rem"}>{children}</Box>
      <AppDrawer open={open} setOpen={setOpen} />
    </>
  );
}
