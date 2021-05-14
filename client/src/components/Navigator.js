import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from 'react-router-dom';
//css
import '../css/basic_style1.css';

//img
import setting_icon from '../css/setting_icon.svg';
import project_icon from '../css/project_icon.svg';
import profile_icon from '../css/profile_icon.svg';
import profile_img from '../css/odi.jpg';


class Navigator extends Component {
  constructor (props) {
    super(props);

    this.state = {
    }
}
  Logout = () => {
    this.props.history.push('/');  
  }

  render () {

    const userName = 'USER';

    return (
      <div>
          {/*네비게이션 바*/}
          <div className="navigator">
            <div className="LOGO">
              AIrang
            </div>
            <div className="welcome">
              {userName} 님, 환영합니다!
            </div>
            <div className="profile_playing">
              <img className="profile_img" src={profile_img} />
            </div>
            {/* 구현 못하지 않을까요ㅠㅠ
            <div className="now_playing">
              NOW PLAYING - " 별과 고양이 "
            </div>
            */}
            <div className="nav-icon">
              <img src={profile_icon} align="absmiddle" /> &nbsp;&nbsp;&nbsp;&nbsp;<Link to = "./myprofile">내 프로필</Link>
            </div>
            <div className="nav-icon">
              <img src={project_icon} align="absmiddle" />&nbsp;&nbsp;&nbsp;&nbsp; <Link to = "./myproject">내 프로젝트</Link>
            </div>
            <div className="nav-icon">
              <img src={setting_icon} align="absmiddle" />&nbsp;&nbsp;&nbsp;&nbsp; 도움말
            </div>
            <div className="nav-footer">
              <button className="footer-button" type="button" onClick={this.Logout}>로그아웃</button>
            </div>
          </div>
      </div>
    );
  }
}

export default withRouter(Navigator);
