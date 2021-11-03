import React from "react";
import { makeStyles } from "@mui/styles";
import ContentBox from "./ContentBox";

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

export default function ClassListItem({ name, description, tutors, maxStudent }) {
  const [status, setStatus] = React.useState("");
  React.useEffect(() => {
    const randomFactor = Math.floor(Math.random() * 10) % 3;
    console.log(randomFactor);
    if (randomFactor === 0) {
      setStatus("Available");
    } else if (randomFactor === 1) {
      setStatus("Full");
    } else if (randomFactor === 2) {
      setStatus("Closed");
    }
  }, []);

  const classes = useStyles();
  return (
    <ContentBox className={classes.container}>
      <h3 className={classes.title}>{name}</h3>
      <p className={classes.subtitle}>
        Tutors: <span className={classes.normalText}>{tutors}</span>
      </p>
      <p className={classes.subtitle}>
        Description: {" "}
        <span className={classes.normalText}>
          {description}
        </span>
      </p>
      <p className={classes.subtitle}>
        Maximum students: {" "}
        <span className={classes.normalText}>
          {maxStudent}
        </span>
      </p>
      <p className={classes.subtitle}>
        Status: {" "}
        <span className={classes.normalText}>
          {status}
        </span>
      </p>
    </ContentBox>
  );
}
