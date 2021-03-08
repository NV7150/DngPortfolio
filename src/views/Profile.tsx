import React from "react";
import ProfileInfo from "../Profile/ProfileInfo";
import ProfileData from "../assets/datas/ProfileData.json"

type ProfileProps = {

};

const profilePage = (props: ProfileProps) => {
    return (
        <ProfileInfo info={ProfileData.info} />
    );
};

export default profilePage;