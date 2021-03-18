import React from "react";
import {createStyles, makeStyles} from "@material-ui/styles";
import {Box, Grid, Theme, Typography} from "@material-ui/core";

interface LocomodachiProps{

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
        blockPadLess: {
            padding: theme.spacing(2)
        },
        subtitle: {
            fontSize: "2rem",
            color: theme.palette.secondary.main,
            paddingBottom: theme.spacing(1)
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

export default function Locmodachi(props: LocomodachiProps){
    const classes = useStyles();
    return (
        <Grid className={classes.root} container>
            <Grid item xs={12} className={classes.title}>
                Locomodachi
            </Grid>
            <Grid item xs={12} className={classes.block} container>
                <Grid item xs={12} md={6} container>
                    <Typography variant={"body1"} align={"justify"} paragraph={true}>
                        Locomodachiは，乗車可能でスマホで制御できるミニ蒸気機関車です。
                    </Typography>
                    <Typography variant={"body1"} align={"justify"} paragraph={true}>
                        ミニ蒸気機関車内の仕組みは実際の蒸気機関車と同様のものになっており，開発メンバーが購入したものを修理したものを電子的に操作しています。
                    </Typography>
                    <Typography variant={"body1"} align={"justify"} paragraph={true}>
                        スマホによって操作できるだけでなく，速度計・圧力計も備えています。
                        また，蒸気機関車の動く仕組みを学習できるように，内部の蒸気や機関の動きを見られるようにしています。
                    </Typography>
                    <Typography variant={"body1"} align={"justify"} paragraph={true}>
                        技術的には，スマホアプリはUnityを用いて開発し，BLE通信でESP32マイコンに制御信号を送っています。
                        送られた制御信号をもとに，サーボモータ等で蒸気機関車の各種操作弁を直接操作しています。
                        また，速度計・圧力計のデータも同様にBLE通信で送信しています。
                    </Typography>
                    <Typography variant={"body1"} align={"justify"} paragraph={true}>
                        ちなみに，蒸気の圧力を最大にすれば，合計150kg程度を轢いて走行できました。
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} className={classes.movie}>
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/psbCic9E-XE"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} className={classes.subtitle}>実績</Grid>
            <Grid item xs={12} className={classes.blockPadLess}>
                Maker Faire Tokyo 2019出展<br/>
                ※出展時，Dangoは開発メンバーではなかった
            </Grid>
            <Grid item xs={12} className={classes.block}>
                Tsukuba Mini Maker Faire 2020出展
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
                    <Grid item xs={10} md={11}>スマホアプリ作成，マイコン制御プログラム作成</Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} className={classes.block}>
                ※紹介動画の製作者はDangoではありませんが，製作者と出演者に許可を得て掲載しています。
            </Grid>
        </Grid>
    )
}