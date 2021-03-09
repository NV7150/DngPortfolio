import React from "react";
import {Box, Grid, GridSize, Theme} from "@material-ui/core";
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

    fontSize: string;
    xs: GridSize | boolean;
    sm: GridSize | boolean;
    md: GridSize | boolean;
    lg: GridSize | boolean;
    xl: GridSize | boolean;
}

const GRID_MAX: number = 11;
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
                padding: theme.spacing(2)
            },
            title: {
                color: theme.palette.secondary.main
            }
        })
    )

    const classes = useStyles();

    let keywords = props.propKeyword.map((keyword, i) => {
        return (
            <Box p={1} key={i}>{keyword + ((i !== props.propKeyword.length - 1) ? ",": "")}</Box>
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


    return (
        <Grid container alignItems={"flex-start"} className={classes.root}>
            <Grid
                item
                xs={titleCol.xs}
                sm={titleCol.sm}
                md={titleCol.md}
                lg={titleCol.lg}
                xl={titleCol.xl}
                className={classes.title}
            >
                {props.propName}
            </Grid>
            <Grid item xs={1}>
                :
            </Grid>
            <Grid
                item
                xs={exTitleCol.xs}
                sm={exTitleCol.sm}
                md={exTitleCol.md}
                lg={exTitleCol.lg}
                xl={exTitleCol.xl}
            >
                <Box display="flex" flexWrap="wrap">
                    {keywords}
                </Box>
            </Grid>
        </Grid>
    );
};

Property.defaultProps = PropertyPropDefault;

export default Property;
