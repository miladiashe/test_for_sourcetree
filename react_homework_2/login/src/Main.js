import React from "react";
import { Route, Link } from 'react-router-dom'

const Main = () => {
    return (
        <div>
            <button><Link to="/Login">로그인</Link></button>
            <button><Link to="/Signin">회원가입</Link></button>
        </div>
    )
}

export default Main