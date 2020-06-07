import React from "react";
import qs from 'qs';

const About = ({location}) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });
    const showDetail = query.detail === 'true';
    return (
        <div>
            <h1>소개</h1>
            <p>라우터 실습 테스트</p>
            {showDetail && <p>디테일 값이 트루이다ㅜ</p>}
        </div>
    );
};

export default About;