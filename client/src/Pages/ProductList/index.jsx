import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../Component/Dashboard/Sidebar";
import { Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FaPen } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import Pagination from '@mui/material/Pagination';

const ProductList = () => {
    const [showBy, setshowBy] = useState("");

    return (
      <div className="main d-flex mt-4">
        <div className="sidebarWrapper">
          <Sidebar />
        </div>
  
        <div className="content w-100 ">
          <div className="card  shadow border-0 p-3 mt-4">
            <h3>Product List</h3>
  
            <div className="row cardFilter mt-3">
              <div className="col">
                <h4>Category By</h4>
                <Select
                  value={showBy}
                  onChange={(e)=>setshowBy(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Shoes</MenuItem>
                  <MenuItem value={20}>Clothing</MenuItem>
                  <MenuItem value={30}>Personal Care</MenuItem>
                </Select>
              </div>
            </div>
  
  
            <div className="table-responsive mt-4 ">
              <table className="table table-bordered v-align ">
                  <thead className="thead-dark darkest">
                      <tr>
                          <th>
                              UID
                          </th>
                          <th>
                              PRODUCT
                          </th>
                          <th>
                              CATEGORY
                          </th>
                          <th>
                              PRICE
                          </th>
                          <th>
                              STOCK
                          </th>
                          <th>
                              ACTION
                          </th>
                          
                      </tr>
                  </thead>
  
                  <tbody>
                      <tr>
                          <td>
                              1
                          </td>
                          <td>
                              Nike Air Max
                          </td>
                          <td>
                              Shoes
                          </td>
                          <td>
                              $100
                          </td>
                          <td>
                              400
                          </td>
                          <td>
                              <div className="actions d-flex align-items-center">
                                  <Button className="success"color="success"><FaPen /></Button>
  
                                  <Button  className="error" color="error"><RiDeleteBinFill /></Button>
  
                              </div>
                             
                          </td>
                      </tr>
                      </tbody>
  
                      <tbody>
                      <tr>
                          <td>
                              1
                          </td>
                          <td>
                              Nike Air Max
                          </td>
                          <td>
                              Shoes
                          </td>
                          <td>
                              $100
                          </td>
                          <td>
                              400
                          </td>
                          <td>
                              <div className="actions d-flex align-items-center">
                                  <Button className="success"color="success"><FaPen /></Button>
  
                                  <Button  className="error" color="error"><RiDeleteBinFill /></Button>
  
                              </div>
                             
                          </td>
                      </tr>
                      </tbody>
                      <tbody>
                      <tr>
                          <td>
                              1
                          </td>
                          <td>
                              Nike Air Max
                          </td>
                          <td>
                              Shoes
                          </td>
                          <td>
                              $100
                          </td>
                          <td>
                              400
                          </td>
                          <td>
                              <div className="actions d-flex align-items-center">
                                  <Button className="success"color="success"><FaPen /></Button>
  
                                  <Button  className="error" color="error"><RiDeleteBinFill /></Button>
  
                              </div>
                             
                          </td>
                      </tr>
                      </tbody>
                      <tbody>
                      <tr>
                          <td>
                              1
                          </td>
                          <td>
                              Nike Air Max
                          </td>
                          <td>
                              Shoes
                          </td>
                          <td>
                              $100
                          </td>
                          <td>
                              400
                          </td>
                          <td>
                              <div className="actions d-flex align-items-center">
                                  <Button className="success"color="success"><FaPen /></Button>
  
                                  <Button  className="error" color="error"><RiDeleteBinFill /></Button>
  
                              </div>
                             
                          </td>
                      </tr>
                      </tbody>
  
              </table>
              <div className="d-flex justify-content-center pt-3 tableFooter">
                <Pagination count={100} color="secondary" className="pagination" showFirstButton showLastButton />
              </div>
  
            </div>
          </div>
        </div>
      </div>
    );
};  

export default ProductList;