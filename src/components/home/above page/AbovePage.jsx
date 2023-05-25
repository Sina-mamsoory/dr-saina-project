import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import TextTransition, { presets } from 'react-text-transition';

import styles from './AbovePage.module.css';
import SearchIcon from '@mui/icons-material/Search';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CustomizedInputBase from "./SearchInput";

const TEXTS = ['متنی', 'صوتی', 'تلفنی'];

const AbovePage = () => {

    const [inputValue, setInputValue] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
          () => setIndex((index) => index + 1),
          3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
      }, []);

    return (
                <div className={styles.container}>
                <div className={styles.sectionInfo}>
                    <h1>مشاوره آنلاین پزشکی</h1>
                    <p className={styles.contact}>
                        <span>با بیش از 2500 پزشک در 43 تخصص به صورت </span>
                        <span className={styles.contactType}>
                            <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
                        </span>
                        <span className={styles.lastChild}>گفتگو کنید</span>
                    </p>
                    <p><Link>چطور مشاوره آنلاین بگیرم؟</Link></p>
                </div>
                <div className={styles.searchInput} >
                    <CustomizedInputBase />
                </div>
                <div className={styles.lastConsultation}>
                    <span><AccessAlarmIcon style={{position: 'relative', top: '8px'}}/> <span>6 ثانیه پیش </span></span>
                    آخرین مشاوره دریافت شده در
                    <span> متخصص زنان و زایمان </span>
                </div>
            </div>
        
    )
}

export default AbovePage;