import { Grid } from "@mui/material";
import React from "react";

const FooterLink = () => {

    return(
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={12} md={3}></Grid>
                        <Grid item xs={12} md={5}></Grid>
                        <Grid item xs={12} md={2}></Grid>
                        <Grid item xs={12} md={2}></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}></Grid>
            </Grid>
        </>
    )
}