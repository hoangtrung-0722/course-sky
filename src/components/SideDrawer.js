import React from "react";
import ClassIcon from "@mui/icons-material/Class";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from "@mui/material"

export default function SideDrawer() {
  const [isOpened, setIsOpened] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpened(open);
  };

  const getIcon = (index) => {
    switch (index) {
      case 0:
        return <ClassIcon sx={{ color: "#1565C0" }} />;
      default:
        return;
    }
  };

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Lớp học"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{getIcon(index)}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{
          borderRadius: "0px 10% 10% 0px",
          backgroundColor: "#01458E"
        }}
      >
        <ListAltIcon fontSize="large" sx={{color: "white"}}/>
      </IconButton>
      <Drawer anchor={"left"} open={isOpened} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </>
  );
}
