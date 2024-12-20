import axios from "axios";
require('dotenv').config();

const baseURL = process.env.REACT_APP_API_URL || "http://localhost:4000";

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(`${baseURL}${url}`);
        return data;
    } catch (error) {
        console.error(error.message);
        return { error: error.message };
    }
};

export const postData = async (url, data) => {
    try {
        const response = await axios.post(`${baseURL}${url}`, data);
        return response.data;
    } catch (error) {
        console.error(error.message);
        return { error: error.message };
    }
};

