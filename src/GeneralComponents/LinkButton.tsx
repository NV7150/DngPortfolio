import React from "react";

import "./ButtonSetting.css"

import {createStyles, makeStyles} from "@material-ui/styles";

import {ButtonBase, Theme} from "@material-ui/core";

interface LinkButtonProps{
    icon: string;
    linkName: string;
    linkTo: string;

    fontSize: string;
}


const LinkButton = (props: LinkButtonProps) => {

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                paddingTop: theme.spacing(2),
                paddingRight: theme.spacing(2),
                paddingLeft: theme.spacing(2),
                fontSize: props.fontSize,
                color: "aliceblue"
            },
        })
    )

    const classes = useStyles();
    // const buttonComp = (props.icon !== "none") ? (<Icon style={{color: "aliceblue"}}>{props.icon}</Icon>) : false;

    return (
        <ButtonBase
            disableRipple={true}
            href={props.linkTo}
            className={classes.root + " animatedButton"}
        >
            {props.linkName}&nbsp;{">"}
        </ButtonBase>
    );
};

export default LinkButton;