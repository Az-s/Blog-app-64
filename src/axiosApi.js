import axios from "axios";

const axiosApi = axios.create({
    pageURL: 'https://az-sa-bd3f9-default-rtdb.firebaseio.com/'
});

export default axiosApi;