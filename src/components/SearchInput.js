import React from "react";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material"

const useStyles = makeStyles({
  search: {
    width: "20%",
    borderRadius: "10px",
    backgroundColor: "white",
    marginLeft: 0,
    display: "flex",
    alignItems: "center",
  },
  searchIcon: {
    height: "50%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
  },
  inputInput: {
  },
});

export default function SearchInput() {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon color="primary" />
      </div>
      <InputBase
        placeholder="Tìm kiếm..."
        classes={{ root: classes.inputRoot, input: classes.inputInput }}
      />
    </div>
  );
}
