import React from "react";
import {Work} from "../Work";
import {Grid, Theme} from "@material-ui/core";
import WorkNode from "./WorkNode";
import {createStyles, makeStyles} from "@material-ui/styles";



interface WorksListProps{
    works: Work[];
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(2)
        },
        workGrid: {
            height: "80vh"
        }
    })
)

const WorksList = (props: WorksListProps) => {
    const classes = useStyles();

    const works = props.works;
    const grids = works.map((work, i) => (
        <Grid key={i} xs={6} className={classes.workGrid}>
            <WorkNode work={work} />
        </Grid>
    ));

    return (
        <Grid container direction={"row"} className={classes.root}>
            {grids}
        </Grid>
    );
};

export default WorksList;