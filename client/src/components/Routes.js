import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Login from './login';
import Join from './join';
import Main from './main';

import Basic from "./basic_page"
import MyProject from "./myproject"
import MyProfile from "./myprofile"

import SongProjectName from "./song.projectName"
import SongSelect from "./song.select"
import SongScore from "./song.score"

import LyricMaking from "./LyricMaking"
import LyricConfirm from "./LyricConfirm"
import LyricFinal from "./LyricFinal"


class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/join" component={Join} />
          <Route exact path="/login" component={Login} />

          <Route exact path="/basic_page" component={Basic} />
          <Route exact path="/myproject" component={MyProject} />
          <Route exact path="/myprofile" component={MyProfile} />

          <Route exact path="/song.projectName" component={SongProjectName} />
          <Route exact path="/song.select" component={SongSelect} />
          <Route exact path="/song.score" component={SongScore} />
          
          <Route exact path="/LyricMaking" component={LyricMaking} />
          <Route exact path="/LyricConfirm" component={LyricConfirm} />
          <Route exact path="/LyricFinal" component={LyricFinal} />

        </Switch>
      </Router>
    )
  }
}

export default Routes;