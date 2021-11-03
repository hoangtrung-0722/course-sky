import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import SideDrawer from "./SideDrawer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Header({title}) {
  return (
    <Box sx={{position: "fixed"}}>
      <AppBar sx={{ backgroundColor: "#01458E" }}>
        <Toolbar>
          <SideDrawer />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{padding: "5px" }}
          >
            {title}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <AccountCircleIcon fontSize="large" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
