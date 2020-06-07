import React from "react";
import { Route, Link } from 'react-router-dom'

const  SigninDone = ({match}) => {
    const {ID} = match.params;
    return (
        <div>
            <form>
                <h2>회원가입이 완료되었습니다.</h2>
                <p>반갑습니다 {ID}님!</p>
                <button><Link to="/">메인으로 돌아가기</Link></button>
            </form>
        </div>
    )
}

export default SigninDone