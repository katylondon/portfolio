import { makeStyles, Grid, Typography, Button } from "@material-ui/core";
import React, { useState } from "react";
import Fixit1 from "../assets/Fixit_1.png";
import Fixit2 from "../assets/Fixit_2.png";
import Fixit3 from "../assets/Fixit_3.png";
import Fixit4 from "../assets/Fixit_4.png";
import Iframe from "react-iframe";
import OnImagesLoaded from "react-on-images-loaded";
import Loading from "./Loading";
import { ReactComponent as Blue } from "../assets/Underline_blue.svg";

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
  iframe: {
    marginBottom: 40,
  },
}));

export default function Fixit() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);

  const scrollToResearch = () => {
    document.getElementById("Research").scrollIntoView(true);
  };
  const scrollToDiscovery = () => {
    document.getElementById("Discovery").scrollIntoView(true);
  };
  const scrollToSolutions = () => {
    document.getElementById("Solutions").scrollIntoView(true);
  };
  const scrollToPrototype = () => {
    document.getElementById("Prototype").scrollIntoView(true);
  };

  return (
    <React.Fragment>
      <main>
        <Loading loading={loading}>
          <OnImagesLoaded
            onLoaded={() => setTimeout(() => setLoading(false), 1000)}
          >
            <div
              className={classes.mobileImage}
              style={{ textAlign: "center", backgroundColor: "#ffffff" }}
            >
              <img alt="" width="100%" src={Fixit1} />

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
                        interested in a particular part of the process, feel
                        free to jump right in!
                      </Typography>
                      <Grid
                        style={{ paddingBottom: 20 }}
                        justify="center"
                        container
                      >
                        <Grid xs={12} md={3} item>
                          <Button
                            className={classes.buttonStyle}
                            variant="contained"
                            color="primary"
                            onClick={scrollToResearch}
                          >
                            Research
                          </Button>
                        </Grid>
                        <Grid xs={12} md={3} item>
                          <Button
                            className={classes.buttonStyle}
                            variant="contained"
                            color="primary"
                            onClick={scrollToDiscovery}
                          >
                            Discoveries
                          </Button>
                        </Grid>
                        <Grid xs={12} md={3} item>
                          <Button
                            className={classes.buttonStyle}
                            variant="contained"
                            color="primary"
                            onClick={scrollToSolutions}
                          >
                            Solutions
                          </Button>
                        </Grid>
                        <Grid xs={12} md={3} item>
                          <Button
                            className={classes.buttonStyle}
                            variant="contained"
                            color="primary"
                            onClick={scrollToPrototype}
                          >
                            Prototype
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <img id="Research" alt="" width="100%" src={Fixit2} />
              <img id="Discovery" alt="" width="100%" src={Fixit3} />
              <img id="Solutions" alt="" width="100%" src={Fixit4} />
              <div id="Prototype">
                <Iframe
                  url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FudeLTbcMmRdsZi39m4tQdW%2FFixit-WIREFRAME-prototype%3Fnode-id%3D775%253A295%26viewport%3D972%252C500%252C0.14981308579444885%26scaling%3Dscale-down"
                  width="375px"
                  height="812px"
                  id="myId"
                  className={classes.iframe}
                  display="initial"
                  position="relative"
                />
              </div>
            </div>
          </OnImagesLoaded>
        </Loading>
      </main>
    </React.Fragment>
  );
}
