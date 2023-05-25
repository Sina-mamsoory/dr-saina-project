import { Grid } from "@mui/material";
import React from "react";
import AbovePage from "./above page/AbovePage";


const Home = () => {

    return (
        <>
            <main>
                <Grid container>
                    <Grid item xs={12}><AbovePage /></Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12}></Grid>
                </Grid>
            </main>
        </>
    )
}

export default Home;