import { Grid } from "@mui/material";
import React from "react";
import AbovePage from "./above page/AbovePage";
import WhyDrSaina from "./why dr saina/WhyDrSaina";
import ConsultantList from "./consultant/ConsultantList";


const Home = () => {

    return (
        <>
            <main>
                <Grid container>
                    <Grid item xs={12}><AbovePage /></Grid>
                    <Grid item xs={12}><WhyDrSaina /></Grid>
                    <Grid item xs={12}><ConsultantList /></Grid>
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