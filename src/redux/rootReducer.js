import { combineReducers } from "redux";
import categoriesReducer from "./main categories/mainCategoriesReducer";

const rootReducer = combineReducers({
    categoriesReducer,
})

export default rootReducer;