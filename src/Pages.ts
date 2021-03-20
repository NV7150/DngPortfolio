import React from "react";
import Home from "./views/Home";
import Profile from "./views/Profile";
import WorksPage from "./views/WorksPage";

export interface Page{
    id : number;
    name: string;
    link: string;
    component: React.FC,
    exact: boolean
}

const Pages: Page[] = [
    {
        id: 0,
        name: "Home",
        link: "/",
        component: Home,
        exact: true
    },
    {
        id: 1,
        name: "Profile",
        link: "/profile",
        component: Profile,
        exact: false
    },
    {
        id: 2,
        name:"Works",
        link: "/works",
        component: WorksPage,
        exact: false
    },
];

export default Pages;