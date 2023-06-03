const initialValue = {
    mainCategories: [],
    error: '' 
}

const categoriesReducer = (state=initialValue, action) => {
    switch(action.type) {
        case 'FETCH_MAIN_CATEGORIES_SUCCESS':
            return {
                ...state,
                mainCategories: action.payload
            }
        case 'FETCH_MAIN_CATEGORIES_FAILURE':
            return {
                mainCategories: [],
                error: action.payload
            }
        default:
        return state
    }
}

export default categoriesReducer;