import { makeStyles, Grid, Typography, Button } from "@material-ui/core";
import React from "react";
import Athena1 from "../assets/Athena_1.png";
import Athena2 from "../assets/Athena_2.png";
import Athena3 from "../assets/Athena_3.png";
import Athena4 from "../assets/Athena_4.png";
import ScrollableAnchor, { goToAnchor } from "react-scrollable-anchor";

const useStyles = makeStyles((theme) => ({
  text: {
    color: "#333333",
    fontFamily: "'Nunito', sans-serif",
    fontSize: "2rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.4rem",
    },
  },
  textExtraBold: {
    fontWeight: 800,
  },
  textSemiBold: {
    fontWeight: 600,
  },
  panel: {
    position: "relative",
  },
  ulStyle: {
    listStyle: "none",
  },
  buttonStyle: {
    backgroundColor: "#f78888",
    margin: 20,
    padding: 10,
    width: "80%",
    fontFamily: "'Nunito', sans-serif",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#90ccf4",
    },
  },
}));

export default function Athena() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <main>
        <div style={{ textAlign: "center", backgroundColor: "#ffffff" }}>
          <img alt="" width="100%" src={Athena1} />

          {/* Navigating the page */}
          <Grid style={{ paddingRight: 10, paddingLeft: 10 }}>
            <Grid className={classes.panel} container>
              <Grid xs={12} justify="center" container>
                <Grid xs={6}>
                  <Typography
                    variant="h3"
                    style={{ textAlign: "center" }}
                    className={`${classes.text} ${classes.textExtraBold}`}
                  >
                    Finding your way around
                  </Typography>
                  <Typography
                    style={{ padding: "50px 0", fontSize: "1.2rem" }}
                    className={`${classes.text} ${classes.textSemiBold}`}
                    variant="h5"
                  >
                    This case study is divided into 3 sections. If you’re
                    interested in a particular part of the process, feel free to
                    jump right in!
                  </Typography>
                  <Grid justify="center" container>
                    <Grid item>
                      <Button
                        className={classes.buttonStyle}
                        variant="contained"
                        color="primary"
                        onClick={() => goToAnchor("research")}
                      >
                        Research
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        className={classes.buttonStyle}
                        variant="contained"
                        color="primary"
                        onClick={() => goToAnchor("discoveries")}
                      >
                        Discoveries
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        className={classes.buttonStyle}
                        variant="contained"
                        color="primary"
                        onClick={() => goToAnchor("solutions")}
                      >
                        Solutions
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <ScrollableAnchor id={"research"}>
            <img alt="" width="100%" src={Athena2} />
          </ScrollableAnchor>
          <ScrollableAnchor id={"discoveries"}>
            <img alt="" width="100%" src={Athena3} />
          </ScrollableAnchor>
          <ScrollableAnchor id={"solutions"}>
            <img alt="" width="100%" src={Athena4} />
          </ScrollableAnchor>
        </div>
      </main>
    </React.Fragment>
  );
}
