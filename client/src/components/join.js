import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router";

import Api_test from '../Api_test'

/*Api_test 경로로 유입된 호출은 Api_test.js로 이동시킴*/

//css
import '../css/login_join_style.css';
//img


class Join extends Component {
  render () {
    return (
        <section className="join-form">
        <h1>AIRANG</h1>
        <h2>Create Your Account</h2>
        <form action>
          <div className="int-area">
            <input type="text" name="user_name" id="user_name" autoComplete="off" required />
            <label htmlFor="user_name">User Name</label>
          </div>
          <div className="int-area">
            <input type="text" name="email" id="email" autoComplete="off" required />
            <label htmlFor="email">Email Address</label>
          </div>
          <div className="int-area">
            <input type="password" name="pw" id="pw" autoComplete="off" required />
            <label htmlFor="pw">Password ( 8~15자 이내 )</label>
          </div>
          <div className="btn-area">
            <button id="btn1" type="submit">JOIN</button>
          </div>
        </form>
        <div className="caption">
          <a href>Go to Login</a>
        </div>
      </section>
    );
  }
}

export default Join;
