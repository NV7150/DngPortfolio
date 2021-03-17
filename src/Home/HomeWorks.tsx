import React from "react";
import {Work} from "../Work"
import Carousel from "react-material-ui-carousel";
import {createStyles, makeStyles} from "@material-ui/styles";
import {Box, Grid, Theme} from "@material-ui/core";
import LinkButton from "../GeneralComponents/LinkButton";
import HomeWorkContent from "./HomeWorkContent";

interface HomeWorksProps{
    works: Work[]
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(2),
            fontSize: "1.5rem",
        },
    })
)


const HomeWorks = (props: HomeWorksProps) => {
    const classes = useStyles();

    const carouselContent = props.works.map((work, i) =>
        <Box>
            <HomeWorkContent work={work} key={i} />
        </Box>
    );

    return (
        <Grid container className={classes.root} direction={"column"}>
            <Grid item xs={12}>
                <Carousel>
                    {carouselContent}
                </Carousel>
            </Grid>
            <Grid item xs={12}>
                <LinkButton linkName={"more"} linkTo={"/works"} fontSize={"2rem"} />
            </Grid>
        </Grid>
    );
}

export default HomeWorks;