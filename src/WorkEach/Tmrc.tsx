import React from "react";
import {Box, Grid, Theme} from "@material-ui/core";
import {createStyles, makeStyles} from "@material-ui/styles";

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
        pala: {
            paddingBottom: theme.spacing(1)
        },
        subtitle: {
            fontSize: "2rem",
            color: theme.palette.secondary.main,
            paddingBottom: theme.spacing(1)
        },
        movie: {
            padding: theme.spacing(1)
        }
    })
)

export default function Tmrc(){
    const classes = useStyles();

    return (
      <Grid container className={classes.root}>
          <Grid item xs={12} className={classes.title}>
              Tofu Micon Real Cart 4D+VR ~Dead or Alive~
          </Grid>
          <Grid item xs={12} className={classes.block} container>
              <Grid item xs={6} className={classes.movie}>
                  <Box className={classes.pala}>
                      VRゴーグルのOclus Goと専用コントローラを用いたVRレースゲームです。
                  </Box>
                  <Box className={classes.pala}>
                      VRゴーグルを被り，走行妨害をしてくる敵を倒す「シューター」と，ディスプレイを見ながら運転する<br/>「ドライバー」の二人協力プレイを行えます。
                  </Box>
                  <Box className={classes.pala}>
                      「シューター」はVRゴーグルのみならず，ゲーム内で坂を登ると椅子が傾いたり，速度によって扇風機によって風を感じたり，
                      敵にぶつかると椅子に仕込まれたマッサージ機が震えたり，というような演出により，よりリアルな体験を得られます。
                  </Box>
              </Grid>
              <Grid item xs={6} className={classes.movie}>
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/lhPLyWS9gKk" frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen />
              </Grid>
          </Grid>

          <Grid item xs={12} className={classes.subtitle}>実績</Grid>
          <Grid item xs={12} className={classes.block}>
              Tsukuba Mini Maker Faire 2020 出展
          </Grid>

          <Grid item xs={12} className={classes.subtitle}>製作概要</Grid>
          <Grid item xs={12} container direction={"column"} className={classes.block}>
              <Grid item xs={12} container>
                  <Grid item xs={1}>製作人数</Grid>
                  <Grid item xs={11}>2人</Grid>
              </Grid>
              <Grid item xs={12} container>
                  <Grid item xs={1}>使用技術</Grid>
                  <Grid item xs={11}>Unity, Arduino(C/C++)</Grid>
              </Grid>
              <Grid item xs={12} container>
                  <Grid item xs={1}>担当部分</Grid>
                  <Grid item xs={11}>Unityゲーム製作（Arduinoへのシリアル信号送信まで）</Grid>
              </Grid>
          </Grid>
      </Grid>
    );
}