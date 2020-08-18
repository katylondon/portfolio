import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import pink from "../assets/Underline_pink.svg";
import blue from "../assets/Underline_blue.svg";
import yellow from "../assets/Underline_yellow.svg";
import braniac from "../assets/Brainiac_mockup_original.png";
import fixit from "../assets/Fixit_mockup_original.png";
import athena from "../assets/Athena_mockup_original.png";

const useStyles = makeStyles((theme) => ({
  panelGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  panel: {
    height: 400,
  },
  text: {
    color: "#333333",
    fontFamily: "'Nunito Sans', sans-serif",
    fontSize: "3em",
    fontWeight: 800,
  },
  designerText: {
    color: "#333333",
    fontFamily: "'Nunito Sans', sans-serif",
    fontSize: "2.3em",
  },
  katy: {
    color: "#90ccf4",
  },
  period: {
    color: "#f78888",
  },
  panelContainer: {
    paddingTop: 5,
    [theme.breakpoints.up("sm")]: {
      padding: 15,
    },
  },
  linkText: {
    color: "#333333",
    fontFamily: "'Nunito Sans', sans-serif",
    paddingTop: 20,
    paddingLeft: 10,
  },
  links: {
    textDecoration: "none",
  },
  textSemiBold: {
    fontWeight: 600,
  },
  transition: {
    transition: "width .3s",
  },
}));

const Panel = ({
  backGroundColor,
  link,
  title,
  underline,
  image,
  imgWidth,
  topPad,
}) => {
  const classes = useStyles();

  const [hovered, setHovered] = useState(false);

  const mouseEnter = () => {
    setHovered(true);
  };

  const mouseLeave = () => {
    setHovered(false);
  };

  return (
    <Grid
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className={classes.panelContainer}
      xs={12}
      md={4}
      item
    >
      <Link className={classes.links} to={`/${link}`}>
        <Grid
          style={{
            paddingTop: 20,
            textAlign: "center",
            backgroundColor: backGroundColor,
            background: `linear-gradient(0deg, ${backGroundColor} 55%, rgba(255,255,255,1) 170%)`,
          }}
          className={classes.panel}
        >
          <img
            alt=""
            width={hovered ? `${imgWidth + 5}%` : `${imgWidth}%`}
            className={classes.transition}
            style={
              hovered
                ? { paddingTop: topPad }
                : { paddingTop: topPad, filter: "grayscale(100%)" }
            }
            src={image}
          />
        </Grid>
        <Typography variant="h4" className={classes.linkText}>
          {title}
        </Typography>
        <img style={{ paddingLeft: 10 }} alt="" width="20%" src={underline} />
      </Link>
    </Grid>
  );
};

const Main = ({ checkPage }) => {
  const classes = useStyles();
  checkPage(false);
  return (
    <React.Fragment>
      <main>
        <Container style={{ paddingTop: 0 }} className={classes.panelGrid}>
          <Grid style={{ paddingBottom: 70 }} container>
            <Grid className={`${classes.text} ${classes.hello}`}>
              Hello there,&nbsp;
            </Grid>
            <Grid className={`${classes.text} ${classes.katy}`}>I'm Katy</Grid>
            <Grid className={`${classes.text} ${classes.period}`}>.</Grid>
            <Grid
              container
              className={`${classes.designerText} ${classes.textSemiBold} ${classes.hello}`}
            >
              UX designer / psychologist / storyteller
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Panel
              backGroundColor={"#f78888"}
              link="athena"
              title="Braniac"
              underline={pink}
              image={braniac}
              imgWidth={95}
              topPad={10}
            />
            <Panel
              backGroundColor={"#f3d250"}
              link="other1"
              title="Fixit"
              underline={yellow}
              image={fixit}
              imgWidth={65}
              topPad={10}
            />
            <Panel
              backGroundColor={"#90ccf4"}
              link="other2"
              title="Athena"
              underline={blue}
              image={athena}
              imgWidth={63}
            />
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
};
export default Main;
