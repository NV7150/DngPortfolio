import React from "react";
import {Work} from "../Work";
import {Box, Grid, Theme} from "@material-ui/core";
import {createStyles, makeStyles} from "@material-ui/styles";
import PropertyList from "../GeneralComponents/PropertyList";

interface WorksBlockProps{
    work: Work;
}

interface WorkDisplay{
    about: string;
    keyword: string[];
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(2),
            fontSize: "1.5rem"
        },
        title:{
            color: theme.palette.primary.main,
            fontSize: "2rem",
            overflowWrap: "break-word",
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
        }
    })
)

const WorksBlock = (props: WorksBlockProps) => {
    const classes = useStyles();
    const work = props.work;

    const workPart: WorkDisplay = {
        about: work.about,
        keyword: work.keyword
    }

    return(
        <Box className={classes.root}>
            <Grid container direction={"row"} alignItems={"center"}>
                <Grid item xs={5} className={classes.grids}>
                    <img src={work.imgLink} alt={work.about} className={classes.imgSet} />
                </Grid>
                <Grid item xs={7} container direction={"column"} className={classes.grids}>
                    <Grid item className={classes.itemTitle}>
                        <span className={classes.title}>{work.name}</span>
                    </Grid>
                    <Grid item>
                        {" = {"}<PropertyList<WorkDisplay>
                            info={workPart}
                            padding={0.5}
                            indent={"2rem"}
                            fontSize={"1.5rem"}
                            xs={2}
                        />{"}"}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default WorksBlock;