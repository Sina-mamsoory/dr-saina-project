import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMainCategories } from "../../../redux/main categories/mainCategoriesAction";

import styles from './ConsultantDoctorList.module.css';
import EachCategories from "./shared/EachCategory";
import { Grid } from "@mui/material";

const ConsultantDoctorList = () => {

    const categoriesData = useSelector(state => state.categoriesReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMainCategories);
    }, [])

    return(
        <>
            <Grid container spacing={1} className={styles.container}>
                {
                    categoriesData.mainCategories.map(item => 
                        <Grid item xs={12} md={4}>
                            <EachCategories key={item.id} data={item} />
                        </Grid>
                    )
                }
            </Grid>
        </>
    )
}

export default ConsultantDoctorList;