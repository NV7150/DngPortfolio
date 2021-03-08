import React from "react";
import TopProperty from "./HomeTop/TopProperty";
import MyData from "../assets/datas/MyData.json"
import {Grid, Theme, Box} from "@material-ui/core";
import {createStyles, makeStyles} from "@material-ui/styles";

type HomeTopProps = {

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
        row: {
            marginLeft: "10vw"
        }
    })
)


const HomeTop = (props: HomeTopProps) => {
    const classes = useStyles();

    return(
        <Grid container direction={"row"} className={classes.root} alignItems={"center"}>
            <Grid item xs={12} container alignItems={"center"}>
                <Grid item className={classes.heading}>
                    Dango
                </Grid>
                <Grid item className={classes.bracket}>
                    &nbsp;= {"{"}
                </Grid>
            </Grid>

            <Grid item xs={12} className={classes.row}>
                <TopProperty propName={"jobs"} propKeyword={MyData.jobs}/>
            </Grid>
            <Grid item xs={12} className={classes.row}>
                <TopProperty propName={"keywords"} propKeyword={MyData.keywords}/>
            </Grid>

            <Grid item xs={12}>
                <Box className={classes.bracket}>{"}"}</Box>
            </Grid>
        </Grid>

    )
};

export default HomeTop;