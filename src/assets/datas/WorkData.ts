import {Work} from "../../Work"

import TMRC from "../imgs/TMRC.png"
import Tmrc from "../../WorkEach/Tmrc";

import MovingZabuton from "../../WorkEach/MovingZabuton";
import MZImg from "../imgs/MovingZabuton.png"

type workData = {
    works: Array<Work>
}

const WorkData: workData = {
    works: [
        {
            name: "Moving Zabuton",
            about: "AIを使ったリアルタイム4D体感座布団",
            imgLink: MZImg,
            keyword: ["Python", "C/C++", "Arduino", "ML", "Hardware", "4D"],
            detailComponent: MovingZabuton
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