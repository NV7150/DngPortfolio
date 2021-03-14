import {Work} from "../../Work"
import test from "../imgs/test.jpg"
import Test from "../../WorkEach/Test";

type workData = {
    works: Array<Work>
}

const WorkData: workData = {
    works: [
        {
            name: "テスト",
            about: "これはテスト",
            imgLink: test,
            keyword: ["test", "test"],
            detailComponent: Test
        },
        {
            name: "Proposal of Dataset-type-extension using multiple machine learning models",
            about: "これはテスト",
            imgLink: test,
            keyword: ["test", "test"],
            detailComponent: Test
        },
        {
            name: "テスト",
            about: "これはテスト",
            imgLink: test,
            keyword: ["test", "test"],
            detailComponent: Test
        },
    ]
}

export default WorkData;