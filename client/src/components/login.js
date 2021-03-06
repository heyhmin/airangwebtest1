import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router";

import Api_test from '../Api_test'

/*Api_test 경로로 유입된 호출은 Api_test.js로 이동시킴*/

//css
import '../css/login_join_style.css';
//img


class Login extends Component {
  render () {
    return (
        <section className="login-form">
        <h1>AIrang</h1>
        <h2>Sign in to AIrang</h2>
        <form action>
          <div className="int-area">
            <input type="text" name-="id" id="id" autoComplete="off" required />
            <label htmlFor="id">Email address</label>
          </div>
          <div className="int-area">
            <input type="password" name-="pw" id="pw" autoComplete="off" required />
            <label htmlFor="pw">Password</label>
          </div>
          <div className="btn-area">
            <button id="btn" type="submit">LOGIN</button>
          </div>
        </form>
        <div className="caption">
          <a href>Forgot Password?</a>
        </div>
        <div className="caption1">
          <a href>Create an account</a>
        </div>
      </section>
    );
  }
}

export default Login;
