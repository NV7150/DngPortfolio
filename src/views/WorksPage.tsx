import React from "react";
import {Box} from "@material-ui/core";

import WorksPageTop from "../WorksPage/WorksPageTop";

import WorkData from "../assets/datas/WorkData"
import {Work} from "../Work";

interface WorksPageProps{
}


const WorksPage = (props: WorksPageProps) => {
    const works: Work[] = WorkData.works;
    return (
        <Box>
            <WorksPageTop works={works} isMaking={WorkData.isMaking} />
        </Box>
    );
}

export default WorksPage;