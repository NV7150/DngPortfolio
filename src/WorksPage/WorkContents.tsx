import React, {useState} from "react";
import {Work} from "../Work";
import WorkNode from "./WorkNode";
import WorkDetailModal from "./WorkDetailModal";
import {Box, createStyles, makeStyles, Theme} from "@material-ui/core";

interface WorkContentsProps{
    work: Work;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            height: "100%",
        },
    })
)

const WorkContents = (props: WorkContentsProps) => {
    const classes = useStyles();

    const work = props.work;
    const [isClicked, setIsClicked] = useState(false);

    const enClick = () => {
        setIsClicked(true);
    }
    const deClick = () => {
        setIsClicked(false);
    }

    return (
        <Box className={classes.root}>
            <WorkNode
                work={work}
                onClicked={enClick}
            />
            <WorkDetailModal
                work={work}
                clicked={isClicked}
                outClick={deClick}
            />
        </Box>
    )
}

export default WorkContents;