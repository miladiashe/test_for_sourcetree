import React from "react";

const data = {
    kala:{
        name:'김아영',
        description:'리액트 배우는 뉴비'
    },
    mina:{
        name:'미나',
        description: '다다음주 목요일 티알정기팀 캐릭터'
    }
};

const Profile = ({ match }) => {
    const { username } = match.params;
    const profile = data[username];
    if(!profile){
        return <div>존재하지 않는 사람입니.다</div>
    }
    return(
        <div>
            <h3>
                { username }({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};

