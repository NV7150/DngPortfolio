import React from "react";
import {Box, Fade, Grid, GridSize, Theme} from "@material-ui/core";
import {createStyles, makeStyles} from "@material-ui/styles";
import PropertyPropDefault from "./PropertyPropDefault";

export type ColSize = {
    xs: GridSize | boolean;
    sm: GridSize | boolean;
    md: GridSize | boolean;
    lg: GridSize | boolean;
    xl: GridSize | boolean;
};

export interface PropertyProps{
    propName: string;
    propKeyword: Array<string>;
    effectHook: boolean | string;
    wrapOnXs: boolean;
    defaultWrap: boolean;

    fontSize: string;
    padding: number;
    xs: GridSize | boolean;
    sm: GridSize | boolean;
    md: GridSize | boolean;
    lg: GridSize | boolean;
    xl: GridSize | boolean;
}

const GRID_MAX: number = 12;
const girdParse = (gird: GridSize | boolean): GridSize | boolean => {
    if(typeof gird === "boolean")
        return gird;
    if(gird === "auto")
        return "auto";

    const girdNum: number = gird as number;
    if(girdNum <= 0 || GRID_MAX <= girdNum)
        throw new Error("invalid grid num");

    return (GRID_MAX - (girdNum)) as GridSize;
};

const Property: React.FC<PropertyProps> = (props: PropertyProps) => {

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                fontSize: props.fontSize,
                padding: theme.spacing(props.padding),
            },
            title: {
            },
            titleColor: {
                color: theme.palette.secondary.main
            },
            colon: {
                textAlign: "center"
            },
        })
    )

    const classes = useStyles();

    let keywords = props.propKeyword.map((keyword, i) => {
        return (
            <Box marginLeft={1} key={i}>
                {keyword + ((i !== props.propKeyword.length - 1) ? ",": "")}
            </Box>
        );
    });



    const titleCol : ColSize = {
        xs: props.xs,
        sm: props.sm,
        md: props.md,
        lg: props.lg,
        xl: props.xl
    };
    const exTitleCol: ColSize = {
        xs: girdParse(titleCol.xs),
        sm: girdParse(titleCol.sm),
        md: girdParse(titleCol.md),
        lg: girdParse(titleCol.lg),
        xl: girdParse(titleCol.xl)
    };

    const disableEffect: boolean = typeof props.effectHook !== "string";

    if(props.wrapOnXs){
        titleCol.xs = 11;
        exTitleCol.xs = 12;
    }

    if(props.defaultWrap){
        for(const rKey in Object.keys(titleCol)){
            const key: keyof ColSize = Object.keys(titleCol)[rKey] as (keyof ColSize);

            exTitleCol[key] = 12;
        }
    }

    return (
        <Grid container alignItems={"flex-start"} className={classes.root}>
            <Fade
                style={(disableEffect) ? {transition: "none"}: {}}
                in={!disableEffect || (props.effectHook as boolean)}
            >
                <Grid
                    item
                    xs={titleCol.xs}
                    sm={titleCol.sm}
                    md={titleCol.md}
                    lg={titleCol.lg}
                    xl={titleCol.xl}
                    className={classes.title}
                >
                    <span className={classes.titleColor}>{props.propName}</span>{" :"}
                </Grid>
            </Fade>

            <Fade
                style={(disableEffect) ? {transition: "none"}: {}}
                in={!disableEffect || (props.effectHook as boolean)}
            >
                <Grid
                    item
                    xs={exTitleCol.xs}
                    sm={exTitleCol.sm}
                    md={exTitleCol.md}
                    lg={exTitleCol.lg}
                    xl={exTitleCol.xl}
                    container
                    alignItems={"flex-start"}
                >
                    <Box display="flex" flexWrap="wrap" alignItems={"flex-start"}>
                        {keywords}
                    </Box>
                </Grid>
            </Fade>
        </Grid>
    );
};

Property.defaultProps = PropertyPropDefault;

export default Property;
