import React from "react";

import styles from './EachCategory.module.css'
import instagramIcon from './../../../../asset/icon/icons8-instagram.svg';
import { Link } from "react-router-dom";


const EachCategories = ({data}) => {

    return(
        <>
            
            <div className={styles.container}>
                <Link to={'/consultation/' + data.id}>
                <div className={styles.itemHeader}>
                    <div className={styles.itemHeaderImage}><img src={instagramIcon} alt="aparat" /></div>
                    <div className={styles.itemHeaderText}>
                        <p>گفتگو و مشاوره با متخصص</p>
                        <h3>
                            {data.name}
                        </h3>
                    </div>
                </div>
                <div className={styles.itemBody}>
                    <p className={styles.itemBodyText}>{data.name}</p>
                </div>
                </Link>
            </div>
        </>
    )
}

export default EachCategories;