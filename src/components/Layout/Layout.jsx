import React from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";
import {Box, IconButton, Link} from '@material-ui/core'
import Icon from '@mdi/react'

//icons
import {
  mdiFacebook as FacebookIcon,
  mdiTwitter as TwitterIcon,
  mdiGithub as GithubIcon,
} from '@mdi/js'

// styles
import useStyles from "./styles";

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

import Subscriptions from '../Pages/Subscriptions/Subscriptions';
import Errors from '../Pages/Errors/Errors';

import { useLayoutState } from "../../context/LayoutContext/LayoutContext";


function Layout(props) {
  var classes = useStyles();

  var layoutState = useLayoutState();
  return (
    <div className={classes.root}>
        <>
          <Header history={props.history} />
          <Sidebar />
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          >
            <div className={classes.fakeToolbar} />
            <Switch>
              <Route path="/app/subscriptions" component={Subscriptions} />
              <Route path="/app/errors" component={Errors} />
            </Switch>
          </div>
        </>
    </div>
  );
}

export default withRouter(Layout);