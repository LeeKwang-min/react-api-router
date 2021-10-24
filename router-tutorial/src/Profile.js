import React from "react";

const profileData = {
    BookdanE: {
        name: '이광민',
        description: 'Frontend Developer @ Laftel Inc. 게임을 좋아하는 개발자'
    },
    LKM: {
        name: '팡민이',
        description: 'Backend Developer @ Laftel Inc. 백엔드가 재밌는 평행세계의 나'
    }
};

const Profile = ({ match }) => {
    const { username } = match.params;
    const profile = profileData[username];

    if(!profile) {
        return <div>존재하지 않는 유저입니다.</div>;
    }

    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    )
}

export default Profile;