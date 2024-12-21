import React, { useEffect, useState } from "react";
import Sidebar from "../../Component/Dashboard/Sidebar";
import { Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FaPen } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import Pagination from "@mui/material/Pagination";
import { deleteData, editData, fetchDataFromApi } from "../../utils/api";



const ProductList = () => {
  const [showBy, setshowBy] = useState("");
  const [productList, setProductList] = useState([]);

  

  useEffect(() => {
    window.scroll(0, 0);
    fetchDataFromApi("/api/products/")
      .then((data) => {
        console.log(data);
        setProductList(data);
      })
      .catch((error) => {
        console.log(error);
      });




    }, []);

    const deleteProduct = (id)=>{

      deleteData(`/api/products/${id}`).then(res=>{
        fetchDataFromApi("/api/products/")
      .then((data) => {
        console.log(data);
        setProductList(data);
      })
      .catch((error) => {
        console.log(error);
      });
        
        
    })
    };

    const handleChange = (event, value) => {
        fetchDataFromApi(`/api/products?page=${value}`).then((res)=>{
            setProductList(res);
    
        })
    };
      

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
                onChange={(e) => setshowBy(e.target.value)}
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
                  <th className="pl-5">UID</th>
                  <th>PRODUCT</th>
                  <th>CATEGORY</th>
                  <th>PRICE</th>
                  <th>STOCK</th>
                  <th>ACTION</th>
                </tr>
              </thead>

              <tbody>
                {productList?.products?.length !== 0 &&
                  productList?.products?.map((item, index) => {
                    return (
                      <tr key={index} >
                        <td className="pl-5">{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.category.name}</td>
                        <td>Rs{item.price}</td>
                        <td>{item.countInStock}</td>
                        <td>
                          <div className="actions d-flex align-items-center">
                             {/* <Link to={`/product/edit/${item.id}`}>*/}
                            <Button className="success" color="success" 
                              >
                              <FaPen />
                            </Button>
                             {/* </Link>*/}
                              
                            <Button className="error" color="error"  onClick={()=>deleteProduct(item.id)}>
                              <RiDeleteBinFill />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <div className="d-flex justify-content-center pt-3 tableFooter">
              <Pagination
                count={productList?.totalPages}
                color="secondary"
                className="pagination"
                showFirstButton
                showLastButton
                 onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
