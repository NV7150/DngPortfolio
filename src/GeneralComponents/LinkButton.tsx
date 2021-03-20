import React from "react";

import "./ButtonSetting.css"

import {createStyles, makeStyles} from "@material-ui/styles";

import {Box, ButtonBase, Fade, Theme} from "@material-ui/core";

import {NavLink} from "react-router-dom"


interface LinkButtonProps{
    linkName: string;
    linkTo: string;
    clickAction: VoidFunction;
    effectHook: boolean| string;
    isGlobal: boolean

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
    const enableEffect = typeof props.effectHook !== "string";

    const linkTo = props.linkTo;

    let button;
    if(props.isGlobal || props.linkTo === "none"){
        button = (
            <ButtonBase
                disableRipple={true}
                href={(linkTo === "none") ? "" : linkTo}
                onClick={() => {props.clickAction()}}
                className={classes.root + " animatedButton"}
            >
                {">"}&nbsp;{props.linkName}
            </ButtonBase>
        );
    }else{
        button = (
            <NavLink
                to={linkTo}
                style={{textDecoration: "none"}}
            >
                <ButtonBase
                    disableRipple={true}
                    className={classes.root + " animatedButton"}
                >
                    {">"}&nbsp;{props.linkName}
                </ButtonBase>
            </NavLink>
        );
    }

    return (
        <Box>
            <Fade
                style={(enableEffect) ? {transition: "none"}: {}}
                in={!enableEffect || (props.effectHook as boolean)}
            >
                {button}
            </Fade>
        </Box>
    );
};

LinkButton.defaultProps = {
    effectHook: "none",
    linkTo: "none",
    isGlobal: false,
    clickAction: () => {}
};

export default LinkButton;