import React from "react";
import { Grid, Typography, ThemeProvider } from "@mui/material";


import styles from './WhyDrSaina.module.css';



const WhyDrSaina = () => {

    return (
                <Grid container className={styles.gridContainer}  rowSpacing={1}>
                    <Grid item xs={12} className={styles.why} textAlign= 'right'> 
                        <Typography component='h5' variant='h5' mb={3} mt={6} fontWeight={800} >چرا دکتر ساینا؟</Typography>
                    </Grid>
                    <Grid className={styles.cause} item xs={12} md={4}>
                        <div><img src="#" alt="logo" /></div>
                        <div>
                            <div>تحت پوشش بیمه تکمیلی</div>
                            <div>کسر هزینه ویزیت تا سقف ۱۰۰٪ متناسب با طرح بیمه شما</div>
                        </div>
                    </Grid>
                    <Grid className={styles.cause} item xs={12} md={4}>
                        <div><img src="#" alt="logo" /></div>
                        <div>
                            <div>تضمین بازگشت 100% وجه</div>   
                            <div>در صورت نارضایتی از مشاوره، هزینه شما پس از بررسی به طور کامل بازگردانده میشود</div>
                        </div>
                    </Grid>
                    <Grid className={styles.cause} item xs={12} md={4}>
                        <div><img src="#" alt="logo" /></div>
                        <div>
                            <div>پشتیبانی ویژه و سریع</div>    
                            <div>کسر هزینه ویزیت تا سقف ۱۰۰٪ متناسب با طرح بیمه شما</div>
                        </div>
                    </Grid>
                </Grid>
    )
}

export default WhyDrSaina;