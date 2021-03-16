import React, {useEffect, useRef, useState} from "react";
import {Grid, Theme, Box, Fade} from "@material-ui/core";
import {createStyles, makeStyles} from "@material-ui/styles";
import {init} from "ityped";
import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock";

import PropertyList from "../GeneralComponents/PropertyList";
import LinkButton from "../GeneralComponents/LinkButton";

type HomeTopInfos = {
    jobs: string[];
    keywords: string[];
}

type HomeTopProps = {
    info: HomeTopInfos
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(3),
            fontSize: "1.5rem"
        },
        heading: {
            color: theme.palette.primary.main,
            fontSize: "5rem"
        },
        bracket: {
            fontSize: "2.5rem",
        },
    })
)

const propertyStyles = {
    fontSize: "2.5rem",
    indent: "10vw"
}


const HomeTop = (props: HomeTopProps) => {
    const classes = useStyles();
    const homeRef: any = useRef(null);
    const [doFade, setDoFade] = useState(false);


    useEffect( () => {
        disableBodyScroll(homeRef.current);
        init(homeRef.current, {
            showCursor: false,
            strings: ["Dango"],
            loop: false,
            disableBackTyping: true,
            onFinished: () => {
                setTimeout(() => {
                    setDoFade(true);
                    enableBodyScroll(homeRef.current);
                }, 500);
            }
        })
    }, [homeRef]);

    return(
        <Grid container direction={"row"} className={classes.root} alignItems={"center"}>
            <Grid item xs={12} container alignItems={"center"}>
                <Grid item className={classes.heading} id={"#Home1"} ref={homeRef}>
                </Grid>
                <Fade in={doFade}>
                    <Grid item className={classes.bracket}>
                        &nbsp;= {"{"}
                    </Grid>
                </Fade>
            </Grid>


            <PropertyList<HomeTopInfos>
                info={props.info}
                fontSize={propertyStyles.fontSize}
                indent={propertyStyles.indent}
                effectHook={doFade}
            />

            <Fade in={doFade}>
                <Grid item xs={12}>
                    <Box className={classes.bracket}>{"}"}</Box>
                </Grid>
            </Fade>

            <LinkButton linkName={"more"} linkTo={"/profile"} fontSize={"2rem"} effectHook={doFade}/>
        </Grid>

    )
};

export default HomeTop;