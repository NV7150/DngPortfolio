import React from "react";
import {createStyles, makeStyles} from "@material-ui/styles";
import {Grid, Theme} from "@material-ui/core";

import Property from "../GeneralComponents/Property";

type ProfData = {
    univ: string,
    hs: string,
    lang: Array<string>,
    skills: Array<string>,
    hobby: Array<string>
}

type ProfileInfoProps = {
    info: ProfData;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            fontSize: "1rem",
            padding: theme.spacing(2)
        },
        title: {
            fontSize: "3rem",
            color: theme.palette.primary.main,
            borderBottom: "0.5vh solid aliceblue",
        }
    })
)


const ProfileInfo = (props: ProfileInfoProps) => {
    const classes = useStyles();
    const info: ProfData = props.info;
    const keys: string[] = Object.keys(info);

    let properties = [];
    for(const rawKey in keys){
        const key : (keyof ProfData) = keys[rawKey] as (keyof ProfData);

        let keyword: string[] = [];
        const infoProp: string|string[] = info[key];

        if(typeof infoProp === "string"){
            keyword.push(infoProp);
        }else{
            keyword = infoProp;
        }
        console.log(keyword);

        properties.push((
            <Grid item xs={12} key={rawKey}>
                <Property propName={keys[rawKey]} propKeyword={keyword} />
            </Grid>
        ));
    }

    return (
        <Grid container direction={"row"} className={classes.root}>
            <Grid item xs={12} className={classes.title}>
                Dango.info
            </Grid>
            {properties}
        </Grid>
    );

};

export default ProfileInfo;