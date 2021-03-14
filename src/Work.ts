import React from "react";

export interface Work{
    name: string;
    about: string;
    keyword: string[];
    imgLink: string;
    detailPageLink: string | React.FC;
}