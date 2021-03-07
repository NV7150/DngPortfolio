import React from "react";
import TopProperty from "./HomeTop/TopProperty";
import MyData from "./MyData.json";
import {Box, Grid} from "@material-ui/core";

type HomeTopProps = {

}

const HomeTop = (props: HomeTopProps) => {

    return(
        <Grid container direction={"row"}>
            Dango = {"{"}
            <TopProperty propName={"jobs"} propKeyword={MyData.jobs} />
            <TopProperty propName={"keywords"} propKeyword={MyData.keywords} />
            {"}"}
        </Grid>

    )
};

export default HomeTop;