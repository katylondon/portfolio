import { makeStyles } from "@material-ui/core";
import React from "react";
import ReactLoading from "react-loading";

const useStyles = makeStyles(() => ({
  conatiner: {
    backgroundColor: "#ffffff",
    height: "100%",
  },
  animation: {
    margin: "auto",
    marginTop: "10%",
  },
}));

export default function Loading({ loading, children }) {
  const classes = useStyles({});

  return (
    <div
      style={loading ? { position: "fixed" } : {}}
      className={classes.conatiner}
    >
      {loading && (
        <ReactLoading
          className={classes.animation}
          type={"bubbles"}
          color="#90ccf4"
          height={"100%"}
          width={375}
        />
      )}
      {children}
    </div>
  );
}
