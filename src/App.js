import React, { useState } from "react";
import { Switch, Route, Link, HashRouter } from "react-router-dom";
import Main from "./components/Main";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import Grid from "@material-ui/core/Grid";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MediumIcon from "./assets/Medium_icon.svg";
import Athena from "./components/Athena";
import Fixit from "./components/Fixit";
import Braniac from "./components/Braniac";
import About from "./components/About";
import { ReactComponent as Yellow } from "./assets/Underline_yellow.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  appBarColor: {
    backgroundColor: "transparent",
  },
  paperElevation: {
    boxShadow: "none",
  },
  links: {
    textDecoration: "none",
    "&:focus, &:hover, &:visited, &:link, &:active": {
      textDecoration: "none",
    },
    color: "#333333",
    fontSize: "1.6em",
    padding: "15px 15px 0 15px",
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 600,
  },
  toolBar: {
    padding: "40px 30px 20px",
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function App(props) {
  const classes = useStyles();

  const [aboutPage, setAboutPage] = useState();

  const checkPage = (aboutPage) => {
    return setAboutPage(aboutPage);
  };
  console.log(process.env.PUBLIC_URL);

  return (
    <React.Fragment>
      <CssBaseline />
      <HashRouter basename="/">
        <AppBar
          position="absolute"
          classes={{
            colorPrimary: classes.appBarColor,
            root: classes.paperElevation,
          }}
        >
          <Toolbar className={classes.toolBar}>
            <Grid justify="flex-end" container>
              <Grid item>
                <Grid alignItems="center" container>
                  <Grid>
                    <Link className={classes.links} to="/">
                      Work
                    </Link>
                  </Grid>
                  {!aboutPage && (
                    <Yellow
                      style={{
                        position: "absolute",
                        top: 70,
                        width: 60,
                        right: 200,
                      }}
                    />
                  )}
                  <Grid>
                    <Link className={classes.links} to="/about">
                      About
                    </Link>
                  </Grid>
                  {aboutPage && (
                    <Yellow
                      style={{
                        position: "absolute",
                        top: 70,
                        width: 60,
                        right: 110,
                      }}
                    />
                  )}
                  <Grid>
                    <a
                      className={classes.links}
                      href="https://www.linkedin.com/in/katy-romney/"
                      target="blank"
                    >
                      <LinkedInIcon fontSize="large" htmlColor="#0099dc" />
                    </a>
                  </Grid>

                  <Grid>
                    <a
                      className={classes.links}
                      href="https://katyromney.medium.com/"
                      target="blank"
                    >
                      <img height={35} width={35} src={MediumIcon} />
                    </a>
                  </Grid>

                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Toolbar style={{ minHeight: 1 }} id="back-to-top-anchor" />
        <Grid>
          {props.children}

          <Switch>
            <Route path="/about">
              <About checkPage={checkPage} />
            </Route>
            <Route path="/brainiac">
              <Braniac />
            </Route>
            <Route path="/fixit">
              <Fixit />
            </Route>
            <Route path="/athena">
              <Athena />
            </Route>
            <Route path="/">
              <Main checkPage={checkPage} />
            </Route>
          </Switch>
        </Grid>
      </HashRouter>
      <ScrollTop {...props}>
        <Fab
          color="secondary"
          style={
            aboutPage
              ? { backgroundColor: "#f78888" }
              : { backgroundColor: "#90ccf4" }
          }
          size="large"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
