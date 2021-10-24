import React from "react";
import { NavLink, Route } from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
    return (
        <div>
            <h3>유저 목록:</h3>
            <ul>
                <li>
                    <NavLink 
                        to='/profiles/BookdanE'
                        activeStyle={{ background: 'black', color: 'white' }}    
                    >BookdanE</NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/profiles/LKM'
                        activeStyle={{ background: 'black', color: 'white' }}    
                    >LKM</NavLink>
                </li>
            </ul>

            <Route path='/profiles' exact render={() => <div>유저를 선택해주세요.</div>} />
            <Route path='/profiles/:username' component={Profile} />
            <WithRouterSample />
        </div>
    )
}

export default Profiles;

// NavLink : 현재 경로와 Link에서 사용하는 경로가 일치하는 경우 특정 스타일 혹은 클래스를 적용 할 수 있는 컴포넌트