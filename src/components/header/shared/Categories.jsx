import React , {useEffect, useState} from "react";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import styles from './Categories.module.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { getMainCategorys } from "../../../services/api";
import CategorieItem from "./CategorieItem";


const Categories = ({status}) => {

    const [data, setData] = useState([])

    useEffect(() => {   
        const fetchAPI = async() => {
            setData(await getMainCategorys())
        }

        fetchAPI()
    }, [])

    console.log(data)
    return(
        <div className={status ? styles.containerShow: styles.containerNotShow}>
                <div className={styles.categories}>
                    {data.map(item => <CategorieItem key={item.id} data={item.name} />)}
                </div>
        </div>
    )
}


export default Categories;