import React from "react";

import  styles from './Properties.module.css';

const Properties = () => {

    return(
        <>
            <div className={styles.container}>
                <div className={styles.items}>
                    <div>
                        <img src="#" alt="no image"/>
                    </div>
                    <div>
                        <h3>پشتیبانی 24 ساعته</h3>
                    </div>
                    <div>
                        <p>در 24 ساعت شبانه روز در 7 روز هفته با پشتیبانی گفتگو کنید.</p>
                    </div>
                </div>
                <div className={styles.items}>
                    <div>
                        <img src="#" alt="no image"/>
                    </div>
                    <div>
                        <h3>خصوصی بودن ارتباط با پزشک</h3>
                    </div>
                    <div>
                        <p>ما تضمین می کنیم که گفتگوی شما با پزشکان کاملا محرمانه می باشد</p>
                    </div>
                </div>
                <div className={styles.items}>
                    <div>
                        <img src="#" alt="no image"/>
                    </div>
                    <div>
                        <h3>مقرون به صرفه</h3>
                    </div>
                    <div>
                        <p>زحمت حضور در صف های طولانی نوبت و هزینه رفت و آمد را به حداقل برسانید</p>
                    </div>
                </div>
                <div className={styles.items}>
                    <div>
                        <img src="#" alt="no image"/>
                    </div>
                    <div>
                        <h3>دسترسی در هر زمان و مکان</h3>
                    </div>
                    <div>
                        <p>در هر زمان از شبانه روز، حتی ایام تعطیل به طور مستقیم با پزشکان گفتگو کنید</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Properties;