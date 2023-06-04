import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

import styles from './FAQ.module.css';
import SimpleAccordion from "./Accordion";

const FAQ = () => {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h4> سوالات متداول</h4>
                </div>
                <div className={styles.questions}>
                    <Card sx={{maxWidth: '1200px', marginBottom: '50px', backgroundColor: '#fff', boxShadow: '0 10px 20px 0 rgba(0,0,0,.09)'}}>
                        <CardContent>
                                <SimpleAccordion />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default FAQ;