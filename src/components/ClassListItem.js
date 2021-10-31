import React from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import ContentBox from "./Container/ContentBox";

const useStyles = makeStyles({
  container: {
    marginTop: "10px",
    padding: "10px",
    textAlign: "left",
    backgroundColor: "white",
    borderRadius: "20px/15px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
  },
  title: {
    color: "#01458E"
  },
  subtitle: {
    fontWeight: "bolder",
  },
  normalText: {
    fontWeight: "normal",
  },
});

export default function ClassListItem({ name }) {
  const classes = useStyles();
  return (
    <ContentBox className={classes.container}>
      <h3 className={classes.title}>Master web development in 1 day</h3>
      <p className={classes.subtitle}>
        Tutors: <span className={classes.normalText}>The Code Master</span>
      </p>
      <p className={classes.subtitle}>
        Description: {" "}
        <span className={classes.normalText}>
          I, The Code Master, will make use a master of everything that is
          related to web development
        </span>
      </p>
    </ContentBox>
  );
}
