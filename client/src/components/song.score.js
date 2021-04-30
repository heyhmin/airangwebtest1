import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router";

import Api_test from '../Api_test'

/*Api_test 경로로 유입된 호출은 Api_test.js로 이동시킴*/

//css
import '../css/style_alpha.css';

//img
import playBtn from '../css/playBtn.svg';
import score_img from '../css/score_img.png';


class SongScore extends Component {
  render () {
    return (
      <div className="tempContainer vertical">
          <div className="upper_bar">
            <input type="button" className="img-button" />
          </div>
          <div className="info">
            <h1>동요 생성</h1>
            <h3>노래 악보</h3>
          </div>

          <section className="center">
            <h2>선택한 노래의 악보입니다.</h2>
            <div>
              <img className="score_img" src={score_img}></img>
            </div>
          </section>
          <div className="confirm-button">
            <button id="btn" type="submit"><img class="nextBtn" src={playBtn}/>다음</button>
          </div>
      </div>
    );
  }
}

export default SongScore;
