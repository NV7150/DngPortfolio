import React from "react";
import HomeTop from "../Home/HomeTop";
import MyData from "../assets/datas/MyData.json"
import HomeWorks from "../Home/HomeWorks";
import WorkData from "../assets/datas/WorkData";
import {createStyles, makeStyles} from "@material-ui/styles";
import {Box, Theme} from "@material-ui/core";

type HomeProps = {

}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
        },
        columns: {
            paddingTop: "10vh",
            marginBottom : "25vh"
        }
    })

)

const Home = (props: HomeProps) => {
    const classes = useStyles();
    return (
        <div>
            <Box className={classes.columns}>
                <HomeTop info={MyData}  />
            </Box>
            <HomeWorks works={WorkData.works} />
        </div>
    );
};

export default Home;