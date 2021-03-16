import {Work} from "../../Work"
import test from "../imgs/test.jpg"
import Test from "../../WorkEach/Test";

import TMRC from "../imgs/TMRC.png"
import Tmrc from "../../WorkEach/Tmrc";

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
            name: "Tofu Micon Real Cart 4D+VR ~Dead or Alive~",
            about: "VRと現実で協力して行う4Dレースゲーム",
            imgLink: TMRC,
            keyword: ["Unity", "C/C++", "Arduino", "VR", "Hardware", "4D"],
            detailComponent: Tmrc

        }
    ]
}

export default WorkData;