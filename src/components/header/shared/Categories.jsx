import React , {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from './Categories.module.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import CategorieItem from "./CategorieItem";
import { fetchMainCategories } from "../../../redux/main categories/mainCategoriesAction";


const Categories = ({status}) => {

    const categoriesData = useSelector(state => state.categoriesReducer);
    const dispatch = useDispatch();

    useEffect(() => {   
        dispatch(fetchMainCategories())
    }, [])

    return(
        <div className={status ? styles.containerShow: styles.containerNotShow}>
                <div className={styles.categories}>
                    {categoriesData.mainCategories.map(item => <CategorieItem key={item.id} data={item.name} />)}
                </div>
        </div>
    )
}


export default Categories;