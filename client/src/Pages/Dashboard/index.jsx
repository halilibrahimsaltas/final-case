import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MyContext from "../../context/MyContext";
import Sidebar from "../../Component/Dashboard/Sidebar";
import QuantityBox from "../../Component/QuantityBox";
import { IoClose } from "react-icons/io5";
import { Button } from "@mui/material";



const Dashboard = () => {
 
    return(
          <div className="main d-flex mt-4">
            <div className="sidebarWrapper">
                <Sidebar/>
            </div>

            <div className="content w-100 ">
                <div className="card  shadow border-0 p-3 mt-4">
                    <h3>Product List</h3>

                    <div className="row cardFilter">
                        <div className="col">
                            <h4>Categories</h4>

                        </div>

                    </div>

                </div>

            </div>
          </div>

        

    )
 
 
};

export default Dashboard;

