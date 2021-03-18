import React from "react";
import {createStyles, makeStyles} from "@material-ui/styles";
import {Grid, Theme, Typography} from "@material-ui/core";

import KEJSImg from "../assets/imgs/KEJS.png"
import SysImg from "../assets/imgs/KEJSystem.png"

interface KEJSProps{

}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(4)
        },
        title: {
            fontSize: "3rem",
            color: theme.palette.primary.main,
            borderBottom: "0.5vh solid aliceblue",
        },
        block: {
            padding: theme.spacing(2),
            paddingBottom: theme.spacing(4)
        },
        subtitle: {
            fontSize: "2rem",
            color: theme.palette.secondary.main,
            paddingBottom: theme.spacing(1)
        },
        description: {
            padding: theme.spacing(1)
        },
        movie: {
            padding: theme.spacing(2),
            minHeight: "50vh"
        },
        imgSet: {
            width: "100%",
            height: "100%",
            objectFit: "contain"
        }
    })
)

export default function KEJS(props: KEJSProps){
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} className={classes.title}>
                Robot Referee of KENDO
            </Grid>
            <Grid item xs={12} className={classes.block} container>
                <Grid item xs={12} md={6} className={classes.description}>
                    <Typography variant={"body1"} align={"justify"} paragraph={true}>
                        Robot Referee of KENDOは，剣道における審判を補助するデバイスです。
                    </Typography>
                    <Typography variant={"body1"} align={"justify"} paragraph={true}>
                        小手や胴の防具につけられた圧力センサと，竹刀につけられた圧力センサから得られた情報を用いて，十分な強さで適切な場所を打突できたかを判定します。
                    </Typography>
                    <Typography variant={"body1"} align={"justify"} paragraph={true}>
                        判定結果はPCアプリケーションやWebアプリにアップロードされ，見やすい形で観客や審判に提供されます。
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={KEJSImg} alt={"KEJS"} className={classes.imgSet} />
                </Grid>
            </Grid>
            <Grid item xs={12} className={classes.block} container>

                <Grid item xs={12} md={6} >
                    <img src={SysImg} alt={"system"}  className={classes.imgSet} />
                </Grid>
                <Grid item xs={12} md={6} className={classes.description}>
                    <Typography variant={"body1"} align={"justify"} paragraph={true}>
                        技術的な詳細としては，防具・竹刀それぞれに一つずつESP32，さらにPC側に受信機としてもう一つESP32が付けられており，それらが協調して動作しています。
                    </Typography>
                    <Typography variant={"body1"} align={"justify"} paragraph={true}>
                        竹刀や防具の圧力センサの値が規定値を超えた場合，ESP32からESP-NOWによって受信機に信号を送信します。
                        受信機側は，信号を受け取った時間が規定値以内ならPCやインターネットに打突情報を送信し，各アプリケーションが打突演出をおこないます。
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} className={classes.subtitle}>製作概要</Grid>
            <Grid item xs={12} container direction={"column"} className={classes.block}>
                <Grid item xs={12} container>
                    <Grid item xs={2} md={1}>製作人数</Grid>
                    <Grid item xs={10} md={11}>5人</Grid>
                </Grid>
                <Grid item xs={12} container>
                    <Grid item xs={2} md={1}>使用技術</Grid>
                    <Grid item xs={10} md={11}>ESP32(C/C++), Unity(C#)</Grid>
                </Grid>
                <Grid item xs={12} container>
                    <Grid item xs={2} md={1}>担当部分</Grid>
                    <Grid item xs={10} md={11}>マイコン制御プログラムの作成，PCアプリケーションの作成</Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}