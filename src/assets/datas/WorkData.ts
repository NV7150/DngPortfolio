import {Work} from "../../Work"

import TMRC from "../imgs/TMRC.png"
import Tmrc from "../../WorkEach/Tmrc";

import MovingZabuton from "../../WorkEach/MovingZabuton";
import MZImg from "../imgs/MovingZabuton.png"

import Locmodachi from "../../WorkEach/Locomodachi";
import LocoImg from "../imgs/Locomodachi.jpg"

import KEJS from "../../WorkEach/KEJS";
import KEJSImg from "../imgs/KEJS.png"

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
        },
        {
            name: "Locomodachi",
            about: "スマホで動かせる蒸気機関車",
            imgLink: LocoImg,
            keyword: ["Unity", "C/C++", "ESP32", "Hardware", "MobileApp", "Mobility"],
            detailComponent: Locmodachi
        },
        {
            name: "Robot Referee of KENDO",
            about: "剣道の電子審判機",
            imgLink: KEJSImg,
            keyword: ["Unity", "C/C++", "ESP32", "Hardware", "Sports"],
            detailComponent: KEJS
        }
    ]
}

export default WorkData;