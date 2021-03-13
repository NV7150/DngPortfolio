import {Work} from "../../Work"
import test from "../imgs/test.jpg"

type workData = {
    works: Array<Work>
}

export const NO_DETAIL_PAGE: string = "none";

const WorkData: workData = {
    works: [
        {
            name: "テスト",
            about: "これはテスト",
            imgLink: test,
            keyword: ["test", "test"],
            detailPageLink: NO_DETAIL_PAGE
        },
        {
            name: "Proposal of Dataset-type-extension using multiple machine learning models",
            about: "これはテスト",
            imgLink: test,
            keyword: ["test", "test"],
            detailPageLink: NO_DETAIL_PAGE
        },
        {
            name: "テスト",
            about: "これはテスト",
            imgLink: test,
            keyword: ["test", "test"],
            detailPageLink: NO_DETAIL_PAGE
        },
    ]
}

export default WorkData;