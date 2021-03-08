import React from "react";
import {createStyles, makeStyles} from "@material-ui/styles";
import { Box,Grid, Theme} from "@material-ui/core";

import Property, {PropertyStyles} from "./Property";

export interface PropertyListStyles extends PropertyStyles {
    fontSize: string
    indent: string
}

function PropertyList<T> (props: {info: T, styles: PropertyListStyles}): JSX.Element{
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                marginLeft: props.styles.indent
            }
        })
    )
    const info = props.info;
    const keys = Object.keys(info);
    const classes = useStyles();


    let properties = [];
    for(const rawKey in keys){
        const key: keyof T = keys[rawKey] as keyof T;

        let keyword: string[] = [];
        const infoProp = info[key];

        if(typeof infoProp === "string"){
            keyword.push(infoProp);
        }else if(
            //check infoProp is Array<string>
            // (infoProp is array && infoProp has at least 1 elements && infoProp[0] is string)
            Array.isArray(infoProp)
            && (infoProp as Array<any>).length > 0
            && typeof infoProp[0] === "string"){
            keyword = infoProp;
        }else{
            throw new Error("props can only be string or Array<string>");
        }

        properties.push((
            <Grid item xs={12} key={rawKey}>
                <Property propName={keys[rawKey]} propKeyword={keyword} styles={props.styles} />
            </Grid>
        ));
    }

    return (
        <Box className={classes.root}>{properties}</Box>
    );

}

export default PropertyList;