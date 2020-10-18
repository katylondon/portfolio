import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import pink from "../assets/Underline_pink.svg";
import blue from "../assets/Underline_blue.svg";
import yellow from "../assets/Underline_yellow.svg";
import braniac from "../assets/Brainiac_mockup_scaled.png";
import fixit from "../assets/Fixit_mockup_scaled.png";
import athena from "../assets/Athena_mockup_scaled.png";

const useStyles = makeStyles((theme) => ({
  panelGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  panel: {
    minHeight: 400,
  },
  textPlayfair: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 800,
    spacing: "2%",
    fontSize: 50,
    color: "#333333",
    letterSpacing: 0.3,
  },
  designerText: {
    fontFamily: "'Nunito', sans-serif",
    color: "#333333",
    fontSize: 30,
    fontWeight: 600,
    letterSpacing: 0.5,
    paddingTop: 10,
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
    fontFamily: "'Nunito', sans-serif",
    color: "#333333",
    fontSize: 30,
    fontWeight: 600,
    letterSpacing: 0.5,
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
                ? { paddingTop: topPad, opacity: 1 }
                : {
                    paddingTop: topPad,
                    filter: "grayscale(100%)",
                    opacity: 0.5,
                  }
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
      <main style={{ paddingTop: 150 }}>
        <Container style={{ paddingTop: 0 }} className={classes.panelGrid}>
          <Grid style={{ paddingBottom: 70, lineHeight: 1 }} container>
            <Grid className={classes.textPlayfair}>Hello there,&nbsp;</Grid>
            <Grid className={`${classes.textPlayfair} ${classes.katy}`}>
              I'm Katy
            </Grid>
            <Grid className={`${classes.textPlayfair} ${classes.period}`}>
              .
            </Grid>
            <Grid
              container
              className={`${classes.designerText} ${classes.textSemiBold}`}
            >
              UX designer / psychologist / storyteller
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Panel
              backGroundColor={"#f78888"}
              link="brainiac"
              title="Brainiac"
              underline={pink}
              image={braniac}
              imgWidth={95}
              topPad={10}
            />
            <Panel
              backGroundColor={"#f3d250"}
              link="fixit"
              title="Fixit"
              underline={yellow}
              image={fixit}
              imgWidth={65}
              topPad={10}
            />
            <Panel
              backGroundColor={"#90ccf4"}
              link="athena"
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
