import { Grid, Typography } from "@mui/material";
import React from "react";

import styles from './DrSainaAccompanist.module.css';

const Accompanist = () => {

    return(
        <>
            <Grid container className={styles.container}>
                <Grid item xs={12} md={8} padding='30px 90px' className={styles.comradeContainer}>
                    <Typography component='div' variant="h6" fontWeight='bold' color='#065482' textAlign='right' className={styles.text}> همراهان دکتر ساینا:</Typography>
                </Grid>
                <Grid item xs={12} md={4} padding='30px 0px 30px 30px' className={styles.contactContainer}>
                    <Typography component='div' variant="h6" fontWeight='bold' color='#065482' textAlign='right' className={styles.text}> نیاز به راهنمایی دارید؟</Typography>
                    <span className={styles.numberContainer}>021-91005838</span>
                </Grid>
            </Grid>
        </>
    )
}

export default Accompanist;