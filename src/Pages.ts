import React from "react";
import Home from "./views/Home";
import Profile from "./views/Profile";
import WorksPage from "./views/WorksPage";

export interface Page{
    name: string;
    link: string;
    component: React.FC
}

const Pages: Page[] = [
    {
        name: "Home",
        link: "/",
        component: Home
    },
    {
        name: "Profile",
        link: "/profile",
        component: Profile
    },
    {
        name:"Works",
        link: "/works",
        component: WorksPage
    }
];

export default Pages;