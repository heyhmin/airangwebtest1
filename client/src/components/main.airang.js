import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router";

import Api_test from '../Api_test'

/*Api_test 경로로 유입된 호출은 Api_test.js로 이동시킴*/

//css
import '../css/login_join_style.css';
//img


class MainAIrang extends Component {
  render () {
    return (
        <section className="login-form">
        <h1>AIrang</h1>
        <div className="btn-area">
            <button id="btnSignIn" type="submit">SIGN IN</button>
        </div>
        <div className="btn-area">
            <button id="btnSignUp" type="submit">SIGN UP</button>
        </div>
      </section>
    );
  }
}

export default MainAIrang;
