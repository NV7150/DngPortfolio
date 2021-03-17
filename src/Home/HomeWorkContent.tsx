import {Box, Hidden, Theme} from "@material-ui/core";
import WorksBlock from "./WorksBlock";
import WorkNode from "../WorksPage/WorkNode";
import WorkDetailModal from "../WorksPage/WorkDetailModal";
import React, {useState} from "react";
import {Work} from "../Work";
import {createStyles, makeStyles} from "@material-ui/styles";


interface HomeWorkContentProps{
    work: Work;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            height: "100%",
        },
        nodeRoot: {
            height: "50vh",
            width: "100%",
            paddingLeft: "2.5%",
            paddingTop: "2.5%"
        }
    })
)


export default function HomeWorkContent(props: HomeWorkContentProps){
    const work = props.work;
    const classes = useStyles();

    const [isClicked, setIsClicked] = useState(false);

    const enClick = () => {
        setIsClicked(true);
    }
    const disClick = () => {
        setIsClicked(false);
    }

    return (
        <Box className={classes.root} justifyContent={"center"}>
            <Hidden smDown>
                <WorksBlock work={work} onClicked={enClick}  />
            </Hidden>
            <Hidden mdUp>
                <Box className={classes.nodeRoot} justifyContent={"center"}>
                    <WorkNode work={work} onClicked={enClick} />
                </Box>
            </Hidden>
            <WorkDetailModal work={work} clicked={isClicked} outClick={disClick} />
        </Box>
    )
}