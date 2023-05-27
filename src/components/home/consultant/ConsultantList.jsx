import React from "react";

import styles from './ConsultantList.module.css';

const ConsultantList = () => {

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>
                    گفتگو و مشاوره با بهترین مختصصین    
                </h2>
                <div>
                    بیش از 2500 پزشک آماده پاسخگویی به شما هستند     
                </div>
            </div>
        </div>
    )
}

export default ConsultantList;