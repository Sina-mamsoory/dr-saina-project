import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import Categories from "./shared/Categories";
import TemporaryDrawer from "./shared/HamburgerMenue";

import styles from './Header.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Header = () => {
    const [status, setStatus] = useState(false)


    return (

        <div className={styles.container}>
            <div className={styles.logo}>
                Logo
            </div>
            <div className={styles.drawer}>
                <TemporaryDrawer></TemporaryDrawer>
            </div>
            <div className={styles.secondPartForm}>
                <ul className={styles.list}>
                    <li className={styles.dropdown} onMouseOver={() => setStatus(true)} onMouseOut={() => setStatus(false)}>
                        <div className={styles.linkContainer}>
                            <Link to='/consultation' className={styles.link}>مشاوره پزشکی</Link>
                            <KeyboardArrowDownIcon fontSize="small" style={{ color: 'silver', transform: status ? 'rotate(-180deg)' : 'rotate(0deg)', transition: 'all 0.1s ease-in' }} />
                        </div>
                        <div className={styles.lastchild}>
                            <Categories status={status} />
                        </div>
                    </li>
                    <li>مشاوره روانشناسی</li>
                    <li>آزمایش در محل</li>
                    <li>نوبت دهی</li>
                    <li>بانک سلامت</li>
                    <li>مجله سلامت</li>
                </ul>
            </div>
            <div className={styles.lastPartForm}>
                <div className={styles.form}>
                    ورود / ثبت نام
                </div>
            
            </div>
        </div>

    )
}

export default Header;