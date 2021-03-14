import React from "react";
import {Work} from "../Work"
import Carousel from "react-material-ui-carousel";
import WorksBlock from "./WorksBlock";
import {createStyles, makeStyles} from "@material-ui/styles";
import {Grid, Theme} from "@material-ui/core";
import LinkButton from "../GeneralComponents/LinkButton";

interface HomeWorksProps{
    works: Work[]
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(2),
            fontSize: "1.5rem"
        },
    })
)


const HomeWorks = (props: HomeWorksProps) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} direction={"column"}>
            <Grid item xs={12}>
                <Carousel>
                    {props.works.map((work, i) => (<WorksBlock work={work} key={i} />))}
                </Carousel>
            </Grid>
            <Grid item xs={12}>
                <LinkButton linkName={"more"} linkTo={"/works"} fontSize={"2rem"} />
            </Grid>
        </Grid>
    );
}

export default HomeWorks;