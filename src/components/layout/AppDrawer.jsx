import { Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";
import SentinelEye from "../../assets/SentinelEye.png";
import { useNavigate } from "react-router";

export const Logo = styled("img")({
  height: "5rem",
  padding: "0.8rem",
  borderRadius: "1.3rem",
});

export default function AppDrawer({ open, setOpen }) {
  const navigate = useNavigate();
  const items = [
    { text: "Dashboard", path: "/dashboard" },
    { text: "Organizations", path: "/organizations" },
    { text: "Terrorists", path: "/terrorists" },
  ];
  return (
    <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List subheader={<Logo src={SentinelEye} alt="Sentinel Eye" />}>
          <hr />
          {items.map((item) => (
            <ListItemButton
              key={item.path}
              onClick={() => {
                setOpen(false);
                navigate(item.path);
              }}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
    </Drawer>
  );
}
