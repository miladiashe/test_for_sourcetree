import React, { useState } from "react";
import { Link } from 'react-router-dom'

const Signin = () => {
    const [id, setID] = useState('');

    const onChangeID = e =>{
        setID(e.target.value);
    };

    return (
        <div>
            <form>
                <h2>회원 가입</h2>
                <p>아이디</p><input type="text" name="id" onChange={onChangeID} />
                <p>비밀번호</p><input type="password" name="pw" />
                <p>이메일</p><input type="email" name="em" />
            </form>
            <button><Link to={`/SigninDone/${id}`}>회원가입</Link></button>
        </div>
    )
}

export default Signin