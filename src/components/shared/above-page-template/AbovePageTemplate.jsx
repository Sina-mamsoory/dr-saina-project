import React from "react";

import styles from './AbovePageTemplate.module.css';

const AbovePageTemplate = ({children}) => {

    return (
            <div className={styles.container}>
               {children}
            </div>
        
    )
}

export default AbovePageTemplate;