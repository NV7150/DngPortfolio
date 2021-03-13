import React from "react";
import HomeTop from "../Home/HomeTop";
import MyData from "../assets/datas/MyData.json"
import HomeWorks from "../Home/HomeWorks";
import WorkData from "../assets/datas/WorkData";

type HomeProps = {

}

const Home = (props: HomeProps) => {
    return (
        <div>
            <HomeTop info={MyData} />
            <HomeWorks works={WorkData.works} />
        </div>
    );
};

export default Home;