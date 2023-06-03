import React from "react";

import styles from './ConsultantSuggestBox.module.css';

const ConsultantSuggestBox = () => {

    return(
        <>
            <div className={styles.container}>
                <div className={styles.doYuoNeedHelp}>
                    <div className={styles.doYuoNeedHelpQuestion}><span>برای انتخاب مشاور نیاز به راهنمایی دارید؟</span></div>
                    <div className={styles.doYuoNeedHelpNumber}>
                        <span>تماس بگیرید</span>
                        <span>021-91402121</span>
                    </div>
                </div>
                <div className={styles.image}>
                    <img src="https://www.drsaina.com/themes/_shared/images/Layer2.png" alt='#' />
                </div>
            </div>
        </>
    )
}

export default ConsultantSuggestBox;