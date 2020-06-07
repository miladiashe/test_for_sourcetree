import React, { useState } from "react";
import { Route, Link } from 'react-router-dom'

const Login = () => {
    const [id, setID] = useState('');

    const onChangeID = e =>{
        setID(e.target.value)
    }

    return (
        <div>
            <form>
                <h2>로그인</h2>
                <p>아이디</p><input type="text" name="id"  onChange={onChangeID} />
                <p>비밀번호</p><input type="password" name="pw" />
                <button><Link to={`/LoginDone/${id}`}>로그인</Link></button>
            </form>
        </div>
    )
}

export default Login