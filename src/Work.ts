import React from "react";

export interface Work{
    name: string;
    about: string;
    keyword: string[];
    imgLink: string;
    detailComponent: React.FC;
}