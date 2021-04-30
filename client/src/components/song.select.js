import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router";

import Api_test from '../Api_test'

/*Api_test 경로로 유입된 호출은 Api_test.js로 이동시킴*/

//css
import '../css/style_alpha.css';

//img
import playBtn from '../css/playBtn.svg';

//music
import music1 from '../css/music.mp3';
import music2 from '../css/music.mp3';
import music3 from '../css/music.mp3';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = ({file}) => (
  <AudioPlayer
    src = {file}
    onPlay={e => console.log("onPlay")}
  />
);

class SongSelect extends Component {
  render () {
    return (
      <div className="tempContainer vertical">
          <div className="upper_bar">
            <input type="button" className="img-button" />
          </div>

          <div className="info">
            <h1>동요 생성</h1>
            <h3>노래 선택</h3>
          </div>

          <section className="center">
            <h3>노래를 1개 선택해주세요.</h3>
            <div className="row">
              <div className="radio">
                <input type="radio" id="song1" name="song" value="song1"></input>
              </div>
              <div className="column">
                  <Player file = {music1} />
              </div>
            </div>
            <div className="row">
              <div className="radio">
                <input type="radio" id="song2" name="song" value="song2"></input>
              </div>
              <div className="column">
                  <Player file = {music2} />
              </div>
            </div>
            <div className="row">
              <div className="radio">
                <input type="radio" id="song3" name="song" value="song3"></input>
              </div>
              <div className="column">
                  <Player file = {music3} />
              </div>
            </div>
          </section>
        <div className="confirm-button">
          <button id="btn" type="submit"><img class="nextBtn" src={playBtn}/>다음</button>
        </div>
      </div>
    );
  }
}

export default SongSelect;
