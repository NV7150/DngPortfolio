import React from "react";
import HomeTop from "../Home/HomeTop";
import MyData from "../assets/datas/MyData.json"

type HomeProps = {

}

const Home = (props: HomeProps) => {
    return (
        <div>
            <HomeTop info={MyData} />
        </div>
    );
};

export default Home;