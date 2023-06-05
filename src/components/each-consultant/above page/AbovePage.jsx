import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from './AbovePage.module.css';
import { fetchMainCategories } from "../../../redux/main categories/mainCategoriesAction";

const AbovePage = ({categories}) => {

    return (
            <>
                <div className={styles.sectionInfo}>
                   <h1> مشاوره آنلاین با 114 نفر از متخصصین {(categories.name)}</h1>
                </div>
                <div className={styles.buttons}>
                    <button>به من پزشک پیشنهاد دهید</button>
                    <button>خودم انتخاب می کنم</button>
                </div>
                <div className={styles.lastConsultation}>
                    <span className={styles.time}><span>45 ثانیه پیش </span></span>
                    <p className={styles.lastText}>آخرین مشاوره دریافت شده در <span> متخصص زنان و زایمان </span></p>
                </div>
            </>
        
    )
}

export default AbovePage;