import React from "react";
import Home from "./views/Home";
import Profile from "./views/Profile";

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
    }
];

export default Pages;