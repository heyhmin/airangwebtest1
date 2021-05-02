import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router";

import Api_test from '../Api_test'

/*Api_test 경로로 유입된 호출은 Api_test.js로 이동시킴*/

//css
import '../css/basic_style1.css';

//img
import odi_profile from '../css/odi.jpg'

class MyProfile extends Component {
    render () {
        return (
            <div className="myprofile">
                <div className="profile-card">
                    <div className="card-header">
                        <img className="odi_profile" src={odi_profile}></img>
                    </div>
                    <div className="setbasic">
                        <button id="btn" type="submit">프로필 이미지 기본으로 설정</button>
                    </div>
                </div>

                <div className="profile-footer">
                    <div className="name">
                        <h1>사용자명 (user name)</h1>
                        <h2>김선우</h2>
                    </div>
                    <div className="email">
                        <h1>이메일 (e-mail)</h1>
                        <h2>0725sunwoo @ ewhain.net</h2>
                    </div>
                    <div className="delete-btn">
                        <button id="btn" type="submit">계정 삭제하기</button>
                    </div>
                    <div className="gray-btn">
                        <button id="btn" type="submit">취소</button>
                        <button id="btn" type="submit">적용</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyProfile;