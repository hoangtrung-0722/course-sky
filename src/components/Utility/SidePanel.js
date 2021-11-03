import React from "react";
import {Box} from "@mui/material";



export default function SidePanel(props) {
    return (
        <Box sx={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", padding: "10px 0", height: "100vh"}}>
            {props.children}
        </Box>
    )
}