import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router";

import Api_test from '../Api_test'
/*Api_test 경로로 유입된 호출은 Api_test.js로 이동시킴*/

//css
import '../css/style_alpha.css';

//img
import playBtn from '../css/playBtn.svg';


class SongProjectName extends Component {
  render () {
    return (
      <div className="tempContainer vertical">
          <div className="upper_bar">
            <input type="button" className="img-button" />
          </div>

          <div className="info">
            <h1>동요 생성</h1>
            <h3>프로젝트 이름</h3>
          </div>

          <section className="center smallWidth">
            <h1>프로젝트 이름을 설정해주세요.</h1>
            <form action="">
              <div className="int-area">
                <input type="text" name-="songTitle" id="songTitle" autocomplete="off" required/>
                <label for="id">프로젝트 이름</label>
              </div>
            </form>
          </section>
          <div className="confirm-button">
              <button id="btn" type="submit"><img class="nextBtn" src={playBtn}/>다음</button>
          </div>
        </div>
    );
  }
}

export default SongProjectName;
