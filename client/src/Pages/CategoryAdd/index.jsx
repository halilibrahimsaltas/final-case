import React, { useState } from "react";
import Sidebar from "../../Component/Dashboard/Sidebar";
import { Button } from "@mui/material";
import { BsCloudUploadFill } from "react-icons/bs";
import { postData } from "../../utils/api";


const CategoryAdd = () => {

    const [ formFields, setformFields ] = useState({
        name: "",
    }
    );

    const changeInput = (e) => {
           setformFields(()=>({
            ...formFields,
            [e.target.name]: e.target.value
             }
           ))
    }

    const handleCategory = (e) => {
        e.preventDefault();
        console.log(formFields);
        postData("/api/categories/create", formFields)
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });

        
    }
   
    return (
        <div className="main d-flex mt-4">
            <div className="sidebarWrapper">
                <Sidebar />
            </div>

            <div className="content w-100">
                <div className="card shadow border-0 p-3 mt-4">
                    <h3>Add Category</h3>
                </div>
                <form className="form "onSubmit={handleCategory} >
                    <div className="row">
                        <div className="col">
                            <div className="card p-4">
                                <h5 className="mb-4">Information</h5>
                                <div className="form-group mt-3">
                                    <h6>CATEGORY</h6>
                                    <input type="text" name="name" onChange={changeInput} />
                                </div>
                                <br />
                                <Button type="submit"className="btn-purple btn-lg btn-big">
                                    <BsCloudUploadFill /> &nbsp; ADD
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CategoryAdd;
