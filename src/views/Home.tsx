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
        top: {
            paddingTop: "10vh",
            marginBottom : "25vh"
        },
        worksPreview: {
            paddingBottom: "15vh"
        }
    })

)

const Home = (props: HomeProps) => {
    const classes = useStyles();
    return (
        <div>
            <Box className={classes.top}>
                <HomeTop info={MyData}  />
            </Box>
            <Box className={classes.worksPreview} >
                <HomeWorks works={WorkData.works}/>
            </Box>
        </div>
    );
};

export default Home;