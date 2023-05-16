import { Grid } from "@mui/material";
import React from "react";
import Accompanist from "./DrSainaAccompanist";

import styles from './TopSection.module.css';

const TopSection = () => {

    return (
        <>
            <Grid container>
                <section className={styles.container}>
                    <Grid item xs={12}><Accompanist /></Grid>
                    <Grid item xs={12}></Grid>
                </section>
            </Grid>
        </>
    )
}

export default TopSection;