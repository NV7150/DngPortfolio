import {Work} from "../Work";
import {createStyles, makeStyles} from "@material-ui/styles";
import {Grid, Theme} from "@material-ui/core";
import WorksList from "./WorksList";

interface WorksPageTopProps{
    works: Work[]
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(2),
            fontSize: "1.5rem",
        },
        title: {
            fontSize: "3rem",
            color: theme.palette.primary.main,
            borderBottom: "0.5vh solid aliceblue",
        }
    })
)


const WorksPageTop = (props: WorksPageTopProps) => {
    const classes = useStyles();

    return(
        <Grid container className={classes.root}>
            <Grid item xs={12} className={classes.title}>Works</Grid>
            <Grid item xs={12}>
                <WorksList works={props.works} />
            </Grid>
        </Grid>
    );
}

export default WorksPageTop;