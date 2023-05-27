import React from "react";
import { Grid, Typography } from "@mui/material";

import styles from './FooterLink.module.css';
import aparatIcon from './../../asset/icon/icons8-aparat.svg';
import instagramIcon from './../../asset/icon/icons8-instagram.svg';
import twitterIcon from './../../asset/icon/icons8-twitter.svg';
import telegramIcon from './../../asset/icon/icons8-telegram.svg';
import { Link } from "react-router-dom";
import SimpleAccordion from "./Acordion";

const FooterLink = () => {

    return(
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container className={styles.innerContainer}>
                        <Grid item xs={12} md={3} className={styles.socialMedia}>
                            <Typography component='div' variant="h6" fontWeight='bold' color='#065482' textAlign='right'> دکتر ساینا</Typography>
                            <div className={styles.socialMediaIconsContainer}>
                                <div className={styles.SMIcons}><img src={aparatIcon} alt="aparat" /></div>
                                <div className={styles.SMIcons}><img src={instagramIcon} alt="aparat" /></div>
                                <div className={styles.SMIcons}><img src={twitterIcon} alt="aparat" /></div>
                                <div className={styles.SMIcons}><img src={telegramIcon} alt="aparat" /></div>
                            </div>
                           
                        </Grid>
                        <Grid item xs={12} md={5} padding= '0 15px' >
                                <div className={styles.DownloadLinks}>
                                    <div className={styles.contemtText}>
                                        <h5>دانلود اپلیکیشن دکتر ساینا</h5>
                                        <p>دسترسی راحت‌تر و سریع‌تر به پزشکان، شما می‌توانید با انتخاب دکمه‌های زیر اقدام به دانلود اپ دکتر ساینا کنید.</p>
                                    </div>
                                    <div className={styles.links}>
                                        <div>
                                            <Link to='https://www.drsaina.com/DownloadApplication' target="_blank">
                                                <img className={styles.iconFooter} src='https://www.drsaina.com/themes/_shared/images/cafeBazzarDownload.svg' />
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to='https://www.drsaina.com/DownloadApplication' target="_blank">
                                                <img className={styles.iconFooter} src='https://www.drsaina.com/themes/_shared/images/googlePlayDownload.svg' />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className={styles.links}>
                                        <div>
                                            <Link to='https://www.drsaina.com/DownloadApplication' target="_blank">
                                                <img className={styles.iconFooter} src='https://www.drsaina.com/themes/_shared/images/drsainaDownload.svg' />
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to='https://www.drsaina.com/DownloadApplication' target="_blank">
                                                <img className={styles.iconFooterLast} src='https://www.drsaina.com/themes/_shared/images/myketShareLogo.svg' />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <nav>
                                <label className={styles.drSainaServices}>خدمات دکتر ساینا</label>
                                <ul className={styles.footerAcordion}>
                                    <li>مشاوره پزشکی</li>
                                    <li>مشاوره روانشناسی</li>
                                    <li>آزمایش در محل</li>
                                    <li>بانک سلامت</li>
                                    <li>مجله سلامت</li>
                                    <li>راهکار سازمانی</li>
                                </ul>
                            </nav>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <nav>
                                <div className={styles.Acordion}>
                                    <SimpleAccordion/>
                                </div>
                                <label className={styles.drSainaServices}>صفحات دکتر ساینا</label>
                                <ul className={styles.footerAcordion}>
                                    <li>ثبت نام پزشک </li>
                                    <li>ارتباط با ما</li>
                                    <li>درباره ما</li>
                                    <li>قوانین</li>
                                    <li>حریم شخصی</li>
                                    <li>سوالات متداول</li>
                                    <li>همکاری با ما</li>
                                    <li>مشاوره پزشکی در تلگرام</li>
                                    <li>مشاوره رایگان پزشکی</li>
                                    <li>درباره کرونا ویروس</li>
                                </ul>
                            </nav>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}></Grid>
            </Grid>
        </>
    )
}

export default FooterLink;