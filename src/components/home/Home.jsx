import { Grid } from "@mui/material";
import React from "react";
import AbovePage from "./above page/AbovePage";
import WhyDrSaina from "./why dr saina/WhyDrSaina";
import ConsultantList from "./consultant/ConsultantList";
import ConsultantDoctorList from "./consultant doctor list/ConsultantDoctorList";
import ConsultantSuggestBox from "./consultant suggest box/ConsultantSuggestBox";
import FAQ from "./FAQ/FAQ";
import Properties from "./properties/Properties";


const Home = () => {

    return (
        <>
            <main>
                <Grid container>
                    <Grid item xs={12}><AbovePage /></Grid>
                    <Grid item xs={12}><WhyDrSaina /></Grid>
                    <Grid item xs={12}><ConsultantList /></Grid>
                    <Grid item xs={12}><ConsultantDoctorList /></Grid>
                    <Grid item xs={10}><ConsultantSuggestBox /></Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12}><FAQ /></Grid>
                    <Grid item xs={12}><Properties /></Grid>
                </Grid>
            </main>
        </>
    )
}

export default Home;