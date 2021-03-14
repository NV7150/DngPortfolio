import React from "react";
import {Work} from "../Work"
import {Box, Fade, Grid, Paper, Theme, Typography} from "@material-ui/core";
import {createStyles, makeStyles} from "@material-ui/styles";

interface WorkNodeProps{
    work: Work
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "95%",
            height: "95%",
            position: "relative"
        },
        imgSet: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position:"absolute",
            top: "0",
            left: "0"
        },
        bar: {
            height: "25%",
            width: "100%",
            backgroundColor: "rgba(10, 10, 10, 0.8)",
            position:"absolute",
            bottom: "0",
            left: "0",
        },
        barGrid: {
            padding: theme.spacing(2),
        },
        title: {
            color: theme.palette.primary.main,
            overflowWrap: "break-word",
            fontSize: "1rem",
            fontFamily: "JetBrains Mono"
        },
        aboutText: {
            color: theme.palette.secondary.main,
            overflowWrap: "break-word",
        },
        about: {
            fontSize: "1rem",
            fontFamily: "JetBrains Mono"
        },
        titleGrid: {
            marginBottom: "1rem"
        },

        moreFade: {
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
        },
        morePaper: {
            backgroundColor: "rgba(0,0,0,0.8)",
            textAlign: "center",
            fontSize: "5rem",
            width: "100%",
            height: "100%",
            alignItems: "center"
        }
    })
)

const WorkNode = (props: WorkNodeProps) => {
    const classes = useStyles();
    const [hovered, setHovered] = React.useState(false);

    const work: Work = props.work;


    const onHover = () => {
        setHovered(true);
    }
    const outHover = () => {
        setHovered(false);
    }

    return (
        <Box className={classes.root} onMouseOver={onHover} onMouseLeave={outHover}>
            <img src={work.imgLink}  alt={work.name} className={classes.imgSet} />
            <Box className={classes.bar}>
                <Grid container direction={"column"} className={classes.barGrid}>
                    <Grid item xs={12} className={classes.titleGrid}>
                        <Typography className={classes.title}>
                            {work.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} container className={classes.about}>
                        <Grid>=&nbsp;</Grid>
                        <Grid className={classes.aboutText} xs={11}>{work.about}</Grid>
                    </Grid>
                </Grid>
            </Box>


            <Box  className={classes.moreFade}>
                <Fade in={hovered}>
                    <Box
                        className={classes.morePaper}
                        display="flex"
                        alignContent={"center"}
                        justifyContent={"center"}
                    >
                        <Box>
                            {">"}&nbsp;more
                        </Box>
                    </Box>
                </Fade>
            </Box>
        </Box>
    );
}

export default WorkNode;