import React from "react";
import { Container, Grid, Typography } from "@mui/material";

import styles from './Footer.module.css';
import TopSection from "./TopSection";


const Footer = () => {

    return (
        <footer className={styles.container}>
            <TopSection />
            <section className={styles.bottomSection}>
                <Typography component='div' variant="div" color='#ffffff' textAlign='right'>تمامی حقوق مادی و معنوی متعلق به شرکت دانش بنیان نوین فناوران همراه ساینا می باشد.</Typography>
            </section>
        </footer>
    )
}

export default Footer;