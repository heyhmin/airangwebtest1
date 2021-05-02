import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router";

import Api_test from '../Api_test'

/*Api_test 경로로 유입된 호출은 Api_test.js로 이동시킴*/

//css
import '../css/login_join_style.css';
//img


class Main extends Component {
  render () {
    return (
        <section className="main-form">
        <h1>AIrang</h1>
        <h2>Make your own children's song!</h2>
        <div className="main-caption">
          <a href>Login</a>
        </div>
        <div className="main-caption">
          <a href>Join</a>
        </div>
      </section>
    );
  }
}

export default Main;