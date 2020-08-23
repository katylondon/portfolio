import { makeStyles, Grid, Typography, Button } from "@material-ui/core";
import React from "react";
import Athena1 from "../assets/Athena_1.png";
import Athena2 from "../assets/Athena_2.png";
import Athena3 from "../assets/Athena_3.png";
import Athena4 from "../assets/Athena_4.png";
import { ReactComponent as Blue } from "../assets/Underline_blue.svg";
import ScrollableAnchor, { goToAnchor } from "react-scrollable-anchor";

const useStyles = makeStyles((theme) => ({
  text: {
    color: "#333333",
    fontFamily: "'Playfair Display', serif",
    fontSize: "2.7rem",
    fontWeight: 800,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.4rem",
    },
  },
  subText: {
    padding: "50px 0",
    fontSize: "1.4rem",
    color: "#333333",
    fontFamily: "'Nunito', sans-serif",
    [theme.breakpoints.down("xs")]: {
      fontSize: ".8rem",
      padding: "20px 0",
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
  mobileImage: {
    [theme.breakpoints.down("xs")]: {
      paddingTop: 120,
    },
  },
  buttonStyle: {
    backgroundColor: "#f78888",
    fontSize: "1.4rem",
    fontWeight: 600,
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
        <div
          className={classes.mobileImage}
          style={{ textAlign: "center", backgroundColor: "#ffffff" }}
        >
          <img alt="" width="100%" src={Athena1} />

          {/* Navigating the page */}
          <Grid style={{ paddingRight: 10, paddingLeft: 10 }}>
            <Grid className={classes.panel} container>
              <Grid xs={12} justify="center" container>
                <Grid xs={6}>
                  <Typography
                    variant="h3"
                    style={{ textAlign: "center", paddingBottom: 10 }}
                    className={`${classes.text} ${classes.textExtraBold}`}
                  >
                    Finding your way around
                  </Typography>
                  <Blue width="25%" />
                  <Typography
                    className={`${classes.subText} ${classes.textSemiBold}`}
                    variant="h5"
                  >
                    This case study is divided into 3 sections. If you’re
                    interested in a particular part of the process, feel free to
                    jump right in!
                  </Typography>
                  <Grid
                    style={{ paddingBottom: 20 }}
                    justify="center"
                    container
                  >
                    <Grid xs={12} md={4} item>
                      <Button
                        className={classes.buttonStyle}
                        variant="contained"
                        color="primary"
                        onClick={() => goToAnchor("research")}
                      >
                        Research
                      </Button>
                    </Grid>
                    <Grid xs={12} md={4} item>
                      <Button
                        className={classes.buttonStyle}
                        variant="contained"
                        color="primary"
                        onClick={() => goToAnchor("discoveries")}
                      >
                        Discoveries
                      </Button>
                    </Grid>
                    <Grid xs={12} md={4} item>
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
