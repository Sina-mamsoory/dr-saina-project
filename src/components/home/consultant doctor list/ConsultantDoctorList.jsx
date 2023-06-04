import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMainCategories } from "../../../redux/main categories/mainCategoriesAction";

import styles from './ConsultantDoctorList.module.css';
import EachCategories from "./shared/EachCategory";

const ConsultantDoctorList = () => {

    const categoriesData = useSelector(state => state.categoriesReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMainCategories);
    }, [])

    return(
        <>
            <div className={styles.container}>
                {
                    categoriesData.mainCategories.map(item => <EachCategories key={item.id} data={item} />)
                }
            </div>
        </>
    )
}

export default ConsultantDoctorList;