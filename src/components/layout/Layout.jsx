import SentinelEye from "../../assets/SentinelEye.png";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router";

const StyledAppBar = styled(AppBar)({
  background: "#a7d8f0",
  color: "#036a12",
});

const StyledToolbar = styled(Toolbar)({
  justifyContent: "space-between",
});

const Title = styled(Typography)({
  fontSize: "3rem",
  cursor: "pointer",
});

const Logo = styled("img")({
  height: 80,
  padding: 10,
  borderRadius: 4,
});

const DrawerBox = styled(Box)({
  width: 220,
});

const DrawerBoxStyled = styled(DrawerBox)({
  textAlign: "center",
  color: "#036a12",
});

export default function Layout() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const items = [
    { text: "Dashboard", path: "/dashboard" },
    { text: "Organizations", path: "/organizations" },
    { text: "Terrorists", path: "/terrorists" },
  ];

  return (
    <>
      <StyledAppBar position="static">
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

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <DrawerBoxStyled
          onClick={() => setOpen(false)}
          onKeyDown={() => setOpen(false)}
        >
          <List subheader={<Logo src={SentinelEye} alt="Sentinel Eye" />}>
            <hr />
            {items.map((item) => (
              <ListItemButton
                key={item.path}
                onClick={() => {
                  setOpen(false);
                  navigate(item.path);
                }}
              >
                <ListItemText primary={item.text} />
              </ListItemButton>
            ))}
          </List>
        </DrawerBoxStyled>
      </Drawer>
    </>
  );
}
