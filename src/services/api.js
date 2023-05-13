import axios from "axios";

export const getMainCategorys = async () => {
    const response = await axios.get('http://127.0.0.1:8000/doctor/v1/get_main_categorys/');
    return response.data;
}
