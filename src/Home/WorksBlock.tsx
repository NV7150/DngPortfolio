import React, {useState} from "react";
import {Work} from "../Work";
import {Box, Grid, Theme} from "@material-ui/core";
import {createStyles, makeStyles} from "@material-ui/styles";
import PropertyList from "../GeneralComponents/PropertyList";
import LinkButton from "../GeneralComponents/LinkButton";
import WorkDetailModal from "../WorksPage/WorkDetailModal";

interface WorksBlockProps{
    work: Work;
    onClicked: Function;
}

interface WorkDisplay{
    about: string;
    keyword: string[];
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(2),
            fontSize: "1.5rem",
            position: "relative",
            height: "60vh"
        },
        title:{
            color: theme.palette.primary.main,
            fontSize: "2rem",
            overflowWrap: "break-word",
            marginRight: "1rem"
        },
        imgSet: {
            width: "100%",
            height: "100%",
            objectFit: "cover"
        },
        grids: {
            paddingLeft: theme.spacing(2)
        },
        itemTitle: {
            marginBottom: theme.spacing(1)
        },
    })
)

const WorksBlock = (props: WorksBlockProps) => {
    const classes = useStyles();
    const work = props.work;

    const workPart: WorkDisplay = {
        about: work.about,
        keyword: work.keyword
    }

    const onClicked = () => {
        props.onClicked();
    }
    return(
        <Box className={classes.root} alignItems={"center"}>
            <Grid container direction={"row"} alignItems={"stretch"}>
                <Grid item xs={6} className={classes.grids}>
                    <img src={work.imgLink} alt={work.about} className={classes.imgSet} />
                </Grid>
                <Grid item xs={6} container direction={"column"} className={classes.grids}>
                    <Grid item className={classes.itemTitle}>
                        <span className={classes.title}>{work.name}</span>
                    </Grid>
                    <Grid item>
                        {" = {"}<PropertyList<WorkDisplay>
                            info={workPart}
                            padding={0.5}
                            indent={"2rem"}
                            fontSize={"1.25rem"}
                            defaultWrap={true}
                        />{"}"}
                    </Grid>
                    <Grid item>
                        <LinkButton linkName={"moreAboutThis"} clickAction={onClicked} fontSize={"1.5rem"} />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default WorksBlock;