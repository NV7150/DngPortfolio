import React from "react";

import "./ButtonSetting.css"

import {createStyles, makeStyles} from "@material-ui/styles";

import {Box, ButtonBase, Fade, Theme} from "@material-ui/core";

interface LinkButtonProps{
    linkName: string;
    linkTo: string;
    effectHook: boolean| string;

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

    return (
        <Box>
            <Fade
                style={(enableEffect) ? {transition: "none"}: {}}
                in={!enableEffect || (props.effectHook as boolean)}
            >
                <ButtonBase
                    disableRipple={true}
                    href={props.linkTo}
                    className={classes.root + " animatedButton"}
                >
                    {">"}&nbsp;{props.linkName}
                </ButtonBase>
            </Fade>
        </Box>
    );
};

LinkButton.defaultProps = {
    effectHook: "none"
};

export default LinkButton;