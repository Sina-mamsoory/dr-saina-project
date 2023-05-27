import { Grid } from "@mui/material";
import React from "react";
import Accompanist from "./DrSainaAccompanist";

import styles from './TopSection.module.css';
import FooterLink from "./footerLink";

const TopSection = () => {

    return (
        <>
            <section className={styles.container}>
                <Grid item xs={12}><Accompanist /></Grid>
                <Grid item xs={12}><FooterLink /></Grid>
            </section>
        </>
    )
}

export default TopSection;