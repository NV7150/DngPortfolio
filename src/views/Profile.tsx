import React from "react";
import {Grid} from "@material-ui/core";

import ProfileInfo from "../Profile/ProfileInfo";
import ProfileDesc from "../Profile/ProfileDesc";

import ProfileData from "../assets/datas/ProfileData.json"

type ProfileProps = {

};

const profilePage = (props: ProfileProps) => {
    return (
        <Grid container>
            <ProfileInfo info={ProfileData.info} />
            <ProfileDesc desc={ProfileData.profile} />
        </Grid>
    );
};

export default profilePage;