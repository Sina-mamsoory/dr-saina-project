import axios from "axios"

const fetchMainCategoriesSuccess = data => {
    return {
        type: 'FETCH_MAIN_CATEGORIES_SUCCESS',
        payload: data
    }
}

const fetchMainCategoriesFailur = error => {
    return {
        type: 'FETCH_MAIN_CATEGORIES_FAILURE',
        payload: error
    }
} 

export const fetchMainCategories = () => {
    return dispatch => {
        axios.get('http://127.0.0.1:8000/doctor/v1/get_main_categorys/')
            .then(response => {
                const data = response.data;
                dispatch(fetchMainCategoriesSuccess(data));
            })
                .catch(error => {
                    const errorMSG = error.message;
                    dispatch(fetchMainCategoriesFailur(errorMSG));
                })
        }
}
