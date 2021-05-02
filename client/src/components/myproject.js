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
import score from '../css/score.svg'

class MyProject extends Component {
    render() {
        return (
            <div className="myproject">
                <div className="body_content">
                    <div className="search-box">
                        <input className="search-text" type="text" placeholder="search for ?" />
                        <img className="magglass" src={magglass}></img>
                    </div>
                    <div className="list_block">
                        <div className="song_title">
                            별과 고양이를 민은영님이 추가하셨습니다
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