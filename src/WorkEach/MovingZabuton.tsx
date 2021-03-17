import React from "react";
import {Grid, Theme, Typography} from "@material-ui/core";
import {createStyles, makeStyles} from "@material-ui/styles";
import systemImg from "../assets/imgs/MZSystem.png"

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
        movie: {
            padding: theme.spacing(2),
            minHeight: "50vh"
        },
        imgSet: {
            width: "100%",
            height: "100%",
        }
    })
)

export default function MovingZabuton(){
    const classes = useStyles();

    return (
      <Grid container className={classes.root}>
          <Grid item xs={12} className={classes.title}>
              Moving Zabuton
          </Grid>
          <Grid item xs={12} className={classes.block} container>
              <Grid item xs={12} md={6}>
                  <Typography variant={"body1"} align={"justify"} paragraph={true}>
                      「ムービング座布団」とは，AIによって今映っている動画がどんなシーンかを把握し，それに合わせて座布団が震えたり，水が出たりして4D（体感型映画）風に盛り上げてくれるデバイスです。
                  </Typography>
                  <Typography variant={"body1"} align={"justify"} paragraph={true}>
                      座布団や水のみならず，ディスプレイの後ろが光ったり，そばにある扇風機を動いたりと，映画館ではできない，家の中ならではの表現も行っています。
                  </Typography>
                  <Typography variant={"body1"} align={"justify"} paragraph={true}>
                      ソースコードはGitHubで配布しています。ソースコード的には映画のシーンに合わせてシリアル信号を発信するだけなので，信号に対応したハードを自作することで，誰でもオリジナルのムービング座布団を作成できます。
                  </Typography>
              </Grid>
              <Grid item xs={12} md={6} className={classes.movie}>
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/OjxnwR7rCn8" frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen />
              </Grid>
          </Grid>
          <Grid item xs={12} className={classes.block} container>
              <Grid item xs={12} md={6} className={classes.movie}>
                  <img src={systemImg} alt={"システム"} className={classes.imgSet}/>
              </Grid>
              <Grid item xs={12} md={6}>
                  <Typography variant={"body1"} align={"justify"} paragraph={true}>
                      仕組みとしては，TV等の映像機器から10秒間隔で「音」を入力し，それを学習済モデル(AI)に通すことで，音を「水」「衝撃」「それ以外」に分類します。この判定結果をシーンの状況として使用します。
                  </Typography>
                  <Typography variant={"body1"} align={"justify"} paragraph={true}>
                      判定ができたら，結果をシリアル通信(USB等)でArduinoに送ります。Arduinoに組まれた信号処理プログラムよって，各種ハードウェアが制御され，4D体験を生み出します。
                  </Typography>
              </Grid>
          </Grid>

          <Grid item xs={12} className={classes.subtitle}>実績</Grid>
          <Grid item xs={12} className={classes.block}>
              Yahoo! Japan Open Hack U 2020 Online Vol.1 Happy Hacking賞
          </Grid>

          <Grid item xs={12} className={classes.subtitle}>製作概要</Grid>
          <Grid item xs={12} container direction={"column"} className={classes.block}>
              <Grid item xs={12} container>
                  <Grid item xs={2} md={1}>製作人数</Grid>
                  <Grid item xs={10} md={11}>4人</Grid>
              </Grid>
              <Grid item xs={12} container>
                  <Grid item xs={2} md={1}>使用技術</Grid>
                  <Grid item xs={10} md={11}>Python(TensorFlow), Arduino(C/C++)</Grid>
              </Grid>
              <Grid item xs={12} container>
                  <Grid item xs={2} md={1}>担当部分</Grid>
                  <Grid item xs={10} md={11}>学習モデル作成，本番環境でのAI組み込み</Grid>
              </Grid>
          </Grid>
      </Grid>
    );
}