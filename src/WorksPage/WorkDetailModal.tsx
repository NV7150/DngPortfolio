import {Box, Fade, Modal, Theme} from "@material-ui/core";
import React from "react";
import {Work} from "../Work";
import {createStyles, makeStyles} from "@material-ui/styles";


interface WorkDetailModalProps{
    work: Work,
    clicked: boolean,
    outClick: Function;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
        },
        detailWindow: {
            height: "90vh",
            width: "90vw",

            position: "absolute",
            top: "5vh",
            left: "5vw",

            backgroundColor: "black",
            borderRadius: "10px",

            overflowY: "auto",

            outline: "none"
        }
    })
)



const WorkDetailModal = (props: WorkDetailModalProps) => {
    const clicked = props.clicked;
    const work = props.work;
    const classes = useStyles();

    const outClick = () => {
        props.outClick();
    }

    const detail: React.FC = work.detailComponent;

    return (
        <Box className={classes.root}>
            <Modal
                open={clicked}
                onClose={outClick}
                closeAfterTransition={true}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Fade in={clicked} >
                    <Box className={classes.detailWindow}>
                        {React.createElement(detail)}
                    </Box>
                </Fade>
            </Modal>
        </Box>
    );
}

export default WorkDetailModal;