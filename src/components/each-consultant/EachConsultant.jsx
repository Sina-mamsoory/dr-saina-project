import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import AbovePage from "./above page/AbovePage";
import { useDispatch, useSelector } from "react-redux";
import { fetchMainCategories } from "../../redux/main categories/mainCategoriesAction";
import { useParams } from "react-router-dom";
import WhyDrSaina from "../shared/why dr saina/WhyDrSaina";
import Properties from "../shared/properties/Properties";
import AbovePageTemplate from "../shared/above-page-template/AbovePageTemplate";


const EachConsultant = () => {

    
    const mainCategories = useSelector(state => state.categoriesReducer);
    const dispatch = useDispatch();
    const params = useParams()

    const id = params.id;
    const category = mainCategories.mainCategories[id - 1];
    
    useEffect(() => {
        dispatch(fetchMainCategories());
    }, [])
    
    console.log(mainCategories)
    return (
        <>
            <main>
                <Grid container>
                    <Grid item xs={12}>
                        <AbovePageTemplate>
                            <AbovePage categories={category} />
                        </AbovePageTemplate>
                    </Grid>
                    <Grid item xs={12}><WhyDrSaina /></Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={10}></Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12}><Properties /></Grid>
                </Grid>
            </main>
        </>
    )
}

export default EachConsultant;