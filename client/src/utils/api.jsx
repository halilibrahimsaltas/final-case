import axios from "axios";

const baseURL =  "http://localhost:4000";

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

export const postNewData = async (url,formData)=>{
    try {
        const response = await fetch(process.env.REACT_APP_API_URL+url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
        });
        if(response.ok){
            const data=await response.json();
            return data;
        }else{
            const errorData =await response.json();
            return errorData;

        }
        
    } catch (error) {
        console.error('Error:',error)
        
    }
};

export const editData = async (url, updatedData) => {
    try {
        const response = await axios.put(`${baseURL}${url}`, updatedData, {
            headers: {
                'Content-Type': 'multipart/form-data', // Ensure this header is set
            },
        });
        return response.data;
    } catch (error) {
        console.error("Request failed:", error.response ? error.response.data : error.message);
        return { error: error.response ? error.response.data : error.message };
    }
};

export const newEditData = async (url, updatedData) => {
    const response = await axios.put(`${baseURL}${url}`, updatedData) 
    return response;

};

export const deleteData = async (url) => {
    try {
        const response = await axios.delete(`${baseURL}${url}`);
        return response.data;
    } catch (error) {
        console.error(error.message);
        return { error: error.message };
    }
};



