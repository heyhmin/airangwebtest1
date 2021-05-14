import React, { Component } from 'react';
import { Link, Route, BrowserRouter, Switch as Router } from "react-router-dom"

import Api_test from '../Api_test'

/*Api_test 경로로 유입된 호출은 Api_test.js로 이동시킴*/

import Join from "./join"
import Login from "./login"

//css
import '../css/login_join_style.css';
//img
//나중에 Link 사이에 버튼으로 민들어서 Login / Join 처리

class Main extends Component {
  render () {
    return (
      <div className="logincomponent">
        <section className="main-form">
        <h1>AIrang</h1>
        <h2>Make your own children's song!</h2>
        <div className="main-caption">
          
          <Link to = "./login">Login</Link>
        </div>
        <div className="main-caption">
          <Link to = "./join">Join</Link>
        </div>
      </section>
      </div>
    );
  }
}

export default Main;