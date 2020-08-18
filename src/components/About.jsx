import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Typography } from "@material-ui/core";
import KatyClips from "../assets/Katy_profile_clips.png";
import { useWindowWidth } from "@react-hook/window-size";
import KatyRotated from "../assets/Katy_profile_ROTATED.png";

const useStyles = makeStyles((theme) => ({
  text: {
    color: "#333333",
    fontFamily: "'Nunito', sans-serif",
    fontSize: "2.3em",
  },
  katy: {
    color: "#90ccf4",
    fontWeight: 800,
  },
  period: {
    color: "#f78888",
    fontWeight: 600,
  },
  textExtraBold: {
    fontWeight: 800,
  },
  textSemiBold: {
    fontWeight: 600,
  },
  aboutText: {
    letterSpacing: "1px",
    paddingBottom: 20,
  },
  textConatiner: {
    padding: "5px 80px 60px 20px",
    [theme.breakpoints.up("sm")]: {
      paddingTop: "15%",
    },
  },
  imageContainer: {
    textAlign: "center",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      marginLeft: -35,
    },
  },
  katyImage: {
    position: "absolute",
    left: 70,
    top: -110,
  },
  katyRotated: {
    WebkitTransform: "rotate(270deg)",
    MozTransformStyle: "rotate(270deg)",
    transform: "rotate(90deg)",
  },
}));

const About = ({ checkPage }) => {
  const classes = useStyles();

  const windowWidth = useWindowWidth();

  const windowXS = windowWidth < 600;

  checkPage(true);

  return (
    <React.Fragment>
      <Grid container>
        <Grid className={classes.imageContainer} xs={12} sm={5} item>
          {windowXS ? (
            <img
              alt="Katy On Clip"
              className={classes.katyRotated}
              width="80%"
              src={KatyRotated}
            />
          ) : (
            <img
              alt="Katy On Clip Horizontal"
              className={classes.katyImage}
              width="80%"
              src={KatyClips}
            />
          )}
        </Grid>
        <Grid className={classes.textConatiner} xs={12} sm={7} item>
          <Grid container>
            <Grid
              style={{ paddingBottom: 25 }}
              className={`${classes.text} ${classes.textExtraBold}`}
            >
              Hello there,&nbsp;
            </Grid>
            <Grid className={`${classes.text} ${classes.katy}`}>I'm Katy</Grid>
            <Grid className={`${classes.text} ${classes.period}`}>.</Grid>
          </Grid>
          <Typography className={classes.aboutText} variant="h5">
            I’m a London-based UX designer with a creative eye and a passion for
            understanding what makes people tick.
          </Typography>
          <Typography className={classes.aboutText} variant="h5">
            From Gestalt principles to what motivates our behaviour, psychology
            is an integral part of UX design. The good news for you is that I
            have a degree in psychology, a masters in social & cognitive
            neuroscience, and a journal publication pending (doing my best to
            impress you here - hope it’s working).
          </Typography>
          <Typography className={classes.aboutText} variant="h5">
            I can always be relied on to sweat the small stuff (in a good way)
            and I love working as part of a team, solving problems and creating
            intuitive designs.
          </Typography>
          <Typography variant="h5">
            Drop me a line at{" "}
            <a target="blank" href="mailto: katyromneyuk@gmail.com">
              katyromneyuk@gmail.com
            </a>
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default About;
