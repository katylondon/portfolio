import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Typography } from "@material-ui/core";
import KatyClips from "../assets/Katy_profile_clips.png";
import { useWindowWidth } from "@react-hook/window-size";
import KatyRotated from "../assets/Katy_profile_ROTATED.png";
import Circle from "../assets/about_page_circle.png";

const useStyles = makeStyles((theme) => ({
  text: {
    color: "#333333",
    fontFamily: "'Nunito', sans-serif",
    fontSize: "2.3em",
  },
  textPlayfair: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 800,
    fontSize: 45,
    color: "#333333",
    letterSpacing: 0.3,
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
    color: "#696969",
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 600,
    fontSize: 21,
    letterSpacing: 0.2,
    paddingBottom: 20,
  },
  textConatiner: {
    padding: "5px 110px 0 20px",
    [theme.breakpoints.up("sm")]: {
      paddingTop: "16%",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "16%",
      paddingRight: 20,
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
  },
  katyRotated: {
    WebkitTransform: "rotate(270deg)",
    MozTransformStyle: "rotate(270deg)",
    transform: "rotate(90deg)",
  },
  aboutContain: {
    [theme.breakpoints.down("xs")]: {
      paddingTop: 100,
    },
  },
  circle: {
    width: 200,
  },
}));

const About = ({ checkPage }) => {
  const classes = useStyles();

  const windowWidth = useWindowWidth();

  const windowXS = windowWidth < 600;

  checkPage(true);

  return (
    <React.Fragment>
      <Grid className={classes.aboutContain} container>
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
          <Grid style={{ paddingBottom: 30, lineHeight: 1.2 }} container>
            <Grid className={classes.textPlayfair}>Hello there,&nbsp;</Grid>
            <Grid className={`${classes.textPlayfair} ${classes.katy}`}>
              I'm Katy
            </Grid>
            <Grid className={`${classes.textPlayfair} ${classes.period}`}>
              .
            </Grid>
          </Grid>
          <Typography className={classes.aboutText}>
            I’m a London-based UX designer with a creative eye and a passion for
            understanding what makes people tick.
          </Typography>
          <Typography className={classes.aboutText}>
            From Gestalt principles to what motivates our behaviour, psychology
            is an integral part of UX design. The good news for you is that I
            have a degree in psychology, a masters in social & cognitive
            neuroscience, and a journal publication pending (doing my best to
            impress you here - hope it’s working).
          </Typography>
          <Typography className={classes.aboutText}>
            I can always be relied on to sweat the small stuff (in a good way)
            and I love working as part of a team, solving problems and creating
            intuitive designs.
          </Typography>
          <Typography className={classes.aboutText}>
            Drop me a line at{" "}
            <a target="blank" href="mailto: katyromneyuk@gmail.com">
              katyromneyuk@gmail.com
            </a>
          </Typography>
        </Grid>
        <img alt="decorative circle" src={Circle} className={classes.circle} />
      </Grid>
    </React.Fragment>
  );
};

export default About;
