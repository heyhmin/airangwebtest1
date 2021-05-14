import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from 'react-router-dom';

import Api_test from '../Api_test'

/*Api_test 경로로 유입된 호출은 Api_test.js로 이동시킴*/ 

//css
import '../css/style_alpha.css';

//img
import playBtn from '../css/playBtn.svg';
import score_img from '../css/score_img.png';

//Nav
import Navigator from './Navigator';

class LyricMaking extends Component {
  
  componentDidMount() {}
  render () {
    return (
      <div className="tempContainer vertical">
        <Navigator/>
          <div className="upper_bar">
            <input type="button" className="img-button" />
          </div>

          <div className="info">
            <h1>동요 생성</h1>
            <h3>노래 악보</h3>
          </div>
          
          {/* 악보 & 가사 파트*/}
          <section className="center lyricWhite">
            <div className="score">
              <img src={score_img} />
            </div>
            <div className="lyrics">
              <h2>가사</h2>
              <br />
              <p>작사하기 버튼을 눌러주세요</p>
            </div>
          </section>
          <div className="confirm-button">
            <Link to ="./LyricConfirm">
            <button id="btn" type="submit"><img className="nextBtn" src={playBtn} />작사하기</button>
            </Link>
          </div>
        </div>
    );
  }
}

export default withRouter(LyricMaking);
