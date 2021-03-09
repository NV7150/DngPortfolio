import React from "react";
import {Grid,Theme} from "@material-ui/core";

import ProfileInfo from "../Profile/ProfileInfo";
import ProfileDesc from "../Profile/ProfileDesc";

import ProfileData from "../assets/datas/ProfileData.json"
import ProfileContact from "../Profile/ProfileContact";
import {createStyles, makeStyles} from "@material-ui/styles";

type ProfileProps = {

};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingBottom: "10vh",
        },
    })
)

const ProfilePage = (props: ProfileProps) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <ProfileInfo info={ProfileData.info} />
            <ProfileDesc desc={ProfileData.profile} />
            <ProfileContact sns={ProfileData.contact} />
        </Grid>
    );
};

export default ProfilePage;