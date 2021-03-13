import React from "react";
import {Work} from "../Work"
import Carousel from "react-material-ui-carousel";
import WorksBlock from "./WorksBlock";
import {createStyles, makeStyles} from "@material-ui/styles";
import {Theme} from "@material-ui/core";

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
        <Carousel className={classes.root}>
            {props.works.map((work, i) => (<WorksBlock work={work} key={i} />))}
        </Carousel>
    );
}

export default HomeWorks;