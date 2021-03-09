import React from "react";
import {Grid, Theme, Box} from "@material-ui/core";
import {createStyles, makeStyles} from "@material-ui/styles";
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

            <PropertyList<HomeTopInfos>
                info={props.info}
                fontSize={propertyStyles.fontSize}
                indent={propertyStyles.indent}
            />

            <Grid item xs={12}>
                <Box className={classes.bracket}>{"}"}</Box>
            </Grid>

            <LinkButton linkName={"more"} linkTo={"/profile"} fontSize={"2rem"} />
        </Grid>

    )
};

export default HomeTop;