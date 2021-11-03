import React from "react";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material"

const useStyles = makeStyles({
  search: {
    borderRadius: "10px",
    backgroundColor: "white",
    marginLeft: 0,
    display: "flex",
    alignItems: "center",
    width: "100%",
    border: "2px solid #01458E",
  },
  searchIcon: {
    height: "50%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
    paddingLeft: "20%"
  },
  inputInput: {
  },
});

export default function SearchInput({style}) {
  const classes = useStyles();
  return (
    <div className={classes.search} style={style}>
      <div className={classes.searchIcon}>
        <SearchIcon color="primary" />
      </div>
        <InputBase
          placeholder="Search..."
          classes={{ root: classes.inputRoot, input: classes.inputInput }}
        />
    </div>
  );
}
