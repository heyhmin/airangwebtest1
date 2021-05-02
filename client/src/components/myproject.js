import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router";

import Api_test from '../Api_test'

/*Api_test 경로로 유입된 호출은 Api_test.js로 이동시킴*/

//css
import '../css/basic_style1.css';

//img
import magglass from '../css/magglass.svg'
import play from '../css/play.svg'
import push from '../css/push.svg'
import newproject from '../css/newproject.svg'
import score from '../css/score.svg'

//music
import music1 from '../css/music.mp3';

import AudioPlayer from 'react-h5-audio-player';
// import 'react-h5-audio-player/lib/styles.css';
import '../css/audio_style.scss';

const Player = ({file}) => (
    <AudioPlayer
      src = {file}
      onPlay={e => console.log("onPlay")}
    />
  );

class MyProject extends Component {
    render() {
        return (
            <div className="myproject">
                <div className="body_content">
                    <div className="search-box">
                        <input className="search-text" type="text" placeholder="search for ?" />
                        <img className="magglass" src={magglass}></img>
                    </div>

                    <div className="list_block_1">
                    <img className="newproject" src={newproject}></img>새 프로젝트 생성하기
                    </div>

                    <div className="list_block">
                        <div className="title">
                            <div className="song_title">
                                노래1 을 김선우 님이 추가하셨습니다
                            </div>
                            <div className="list_time">
                                2020-10-18 01:41 AM
                            </div>
                        </div>
                        <div className="row">
                            <div className="radio">
                            </div>
                            <div className="column">
                                <Player file = {music1} />
                            </div>
                        </div>
                        <span className="icon_block">
                            <img className="play_icon" src={play} align="middle"/>재생하기&nbsp;&nbsp;&nbsp;&nbsp;
                            <img className="push_icon" src={push} align="middle"/>플레이리스트에담기&nbsp;&nbsp;
                            <img className="score_icon" src={score} align="middle"/>악보보기  
                        </span>
                    </div>
                    <div className="list_block">
                    <div className="title">
                            <div className="song_title">
                                노래2 을 김선우 님이 추가하셨습니다
                            </div>
                            <div className="list_time">
                                2020-10-18 01:41 AM
                            </div>
                        </div>
                        <div className="row">
                            <div className="radio">
                            </div>
                            <div className="column">
                                <Player file = {music1} />
                            </div>
                        </div>
                        <span className="icon_block">
                            <img className="play_icon" src={play} align="middle"/>재생하기&nbsp;&nbsp;&nbsp;&nbsp;
                            <img className="push_icon" src={push} align="middle"/>플레이리스트에담기&nbsp;&nbsp;
                            <img className="score_icon" src={score} align="middle"/>악보보기  
                        </span>
                    </div>
                    <div className="list_block">
                    <div className="title">
                            <div className="song_title">
                                노래3 을 김선우 님이 추가하셨습니다
                            </div>
                            <div className="list_time">
                                2020-10-18 01:41 AM
                            </div>
                        </div>
                        <div className="row">
                            <div className="radio">
                            </div>
                            <div className="column">
                                <Player file = {music1} />
                            </div>
                        </div>
                        <span className="icon_block">
                            <img className="play_icon" src={play} align="middle"/>재생하기&nbsp;&nbsp;&nbsp;&nbsp;
                            <img className="push_icon" src={push} align="middle"/>플레이리스트에담기&nbsp;&nbsp;
                            <img className="score_icon" src={score} align="middle"/>악보보기  
                        </span>
                    </div>
                    <div className="list_block">
                    <div className="title">
                            <div className="song_title">
                                노래4 을 김선우 님이 추가하셨습니다
                            </div>
                            <div className="list_time">
                                2020-10-18 01:41 AM
                            </div>
                        </div>
                        <div className="row">
                            <div className="radio">
                            </div>
                            <div className="column">
                                <Player file = {music1} />
                            </div>
                        </div>
                        <span className="icon_block">
                            <img className="play_icon" src={play} align="middle"/>재생하기&nbsp;&nbsp;&nbsp;&nbsp;
                            <img className="push_icon" src={push} align="middle"/>플레이리스트에담기&nbsp;&nbsp;
                            <img className="score_icon" src={score} align="middle"/>악보보기  
                        </span>
                    </div>
                    <div className="list_block">
                    <div className="title">
                            <div className="song_title">
                                노래5 을 김선우 님이 추가하셨습니다
                            </div>
                            <div className="list_time">
                                2020-10-18 01:41 AM
                            </div>
                        </div>
                        <div className="row">
                            <div className="radio">
                            </div>
                            <div className="column">
                                <Player file = {music1} />
                            </div>
                        </div>
                        <span className="icon_block">
                            <img className="play_icon" src={play} align="middle"/>재생하기&nbsp;&nbsp;&nbsp;&nbsp;
                            <img className="push_icon" src={push} align="middle"/>플레이리스트에담기&nbsp;&nbsp;
                            <img className="score_icon" src={score} align="middle"/>악보보기  
                        </span>
                    </div>
                    <div className="list_block">
                    <div className="title">
                            <div className="song_title">
                                노래6 을 김선우 님이 추가하셨습니다
                            </div>
                            <div className="list_time">
                                2020-10-18 01:41 AM
                            </div>
                        </div>
                        <div className="row">
                            <div className="radio">
                            </div>
                            <div className="column">
                                <Player file = {music1} />
                            </div>
                        </div>
                        <span className="icon_block">
                            <img className="play_icon" src={play} align="middle"/>재생하기&nbsp;&nbsp;&nbsp;&nbsp;
                            <img className="push_icon" src={push} align="middle"/>플레이리스트에담기&nbsp;&nbsp;
                            <img className="score_icon" src={score} align="middle"/>악보보기  
                        </span>
                    </div>
                    <div className="list_block">
                    <div className="title">
                            <div className="song_title">
                                노래7 을 김선우 님이 추가하셨습니다
                            </div>
                            <div className="list_time">
                                2020-10-18 01:41 AM
                            </div>
                        </div>
                        <div className="row">
                            <div className="radio">
                            </div>
                            <div className="column">
                                <Player file = {music1} />
                            </div>
                        </div>
                        <span className="icon_block">
                            <img className="play_icon" src={play} align="middle"/>재생하기&nbsp;&nbsp;&nbsp;&nbsp;
                            <img className="push_icon" src={push} align="middle"/>플레이리스트에담기&nbsp;&nbsp;
                            <img className="score_icon" src={score} align="middle"/>악보보기  
                        </span>
                    </div>
                    <div className="list_block">
                    <div className="title">
                            <div className="song_title">
                                노래8 을 김선우 님이 추가하셨습니다
                            </div>
                            <div className="list_time">
                                2020-10-18 01:41 AM
                            </div>
                        </div>
                        <div className="row">
                            <div className="radio">
                            </div>
                            <div className="column">
                                <Player file = {music1} />
                            </div>
                        </div>
                        <span className="icon_block">
                            <img className="play_icon" src={play} align="middle"/>재생하기&nbsp;&nbsp;&nbsp;&nbsp;
                            <img className="push_icon" src={push} align="middle"/>플레이리스트에담기&nbsp;&nbsp;
                            <img className="score_icon" src={score} align="middle"/>악보보기  
                        </span>
                    </div>
                    <div className="list_block">
                    <div className="title">
                            <div className="song_title">
                                노래9 을 김선우 님이 추가하셨습니다
                            </div>
                            <div className="list_time">
                                2020-10-18 01:41 AM
                            </div>
                        </div>
                        <div className="row">
                            <div className="radio">
                            </div>
                            <div className="column">
                                <Player file = {music1} />
                            </div>
                        </div>
                        <span className="icon_block">
                            <img className="play_icon" src={play} align="middle"/>재생하기&nbsp;&nbsp;&nbsp;&nbsp;
                            <img className="push_icon" src={push} align="middle"/>플레이리스트에담기&nbsp;&nbsp;
                            <img className="score_icon" src={score} align="middle"/>악보보기  
                        </span>
                    </div>
                    <div className="list_block">
                    <div className="title">
                            <div className="song_title">
                                노래10 을 김선우 님이 추가하셨습니다
                            </div>
                            <div className="list_time">
                                2020-10-18 01:41 AM
                            </div>
                        </div>
                        <div className="row">
                            <div className="radio">
                            </div>
                            <div className="column">
                                <Player file = {music1} />
                            </div>
                        </div>
                        <span className="icon_block">
                            <img className="play_icon" src={play} align="middle"/>재생하기&nbsp;&nbsp;&nbsp;&nbsp;
                            <img className="push_icon" src={push} align="middle"/>플레이리스트에담기&nbsp;&nbsp;
                            <img className="score_icon" src={score} align="middle"/>악보보기  
                        </span>
                    </div>
                </div>

            </div>
            
        )
    }
}

export default MyProject;