import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
    props: {
        MuiTextField: {
            variant: "outlined"
        },
    },
    palette: {
        primary:{
            light: "#83D1F7",
            main: "#83D1F7",
            dark: "#83D1F7"
        },
        secondary: {
            main: "#5DCF96"
        }

    }
});

export default theme;