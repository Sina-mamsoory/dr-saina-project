import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import styles from './CategorieItem.module.css';


const CategorieItem = ({data}) => {

    return(
        <>
            <Typography component='p' variant='p' mb={3} fontWeight={500} ><Link to='/products'> {data} <KeyboardArrowLeftIcon fontSize="small" style={{color: 'silver'}} /></Link></Typography>
        </>
    )
}

export default CategorieItem;