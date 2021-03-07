import {Box, Grid} from "@material-ui/core";

type TopPropertyProps = {
    propName: string;
    propKeyword: Array<string>;
}


const TopProperty = (props: TopPropertyProps) => {
    const keywords = props.propKeyword.map((keyword) => {
        return (
            <Box p={1}>{keyword + ","}</Box>
        );
    });

    return (
        <Grid container alignItems={"flex-start"} >
            <Grid item xs={3}>
                {props.propName} :
            </Grid>
            <Grid item xs={9}>
                <Box display="flex" flexWrap="wrap">
                    {keywords}
                </Box>
            </Grid>
        </Grid>
    );
};

export default TopProperty;