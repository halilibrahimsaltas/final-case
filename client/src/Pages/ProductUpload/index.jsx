import React, { useEffect, useState, useContext } from "react";
import Sidebar from "../../Component/Dashboard/Sidebar";
import { Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { BsCloudUploadFill } from "react-icons/bs";

const ProcductUpload = () => {
  const [catData, setCatData] = useState([]);
  const [categoryVal, setcategoryVal] = useState("");
  const [error_,setError]= useState(false);
  const [success_,setSuccess]=useState(false);

    useEffect(() => {
      window.scrollTo(0, 0);
      fetchDataFromApi("/api/categories/")
        .then((data) => {
          console.log(data);
          setCatData(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
  
  const [formFields, setFormFields]= useState({
    name:'',
    description:'',
    images:[],
    brand:'',
    price:0,
    oldPrice:0,
    category:'',
    countInStock:0,
  });


  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChangeCategory = (event) => {
    setcategoryVal(event.target.value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handlePublish = () => {
    if (image) {
      console.log("Publishing with image:", image);
      // Handle the image upload logic here
    } else {
      alert("Please upload an image before publishing.");
    }
  };

  const addProduct = ()=>{

  }

  return (
    <div className="main d-flex mt-4">
      <div className="sidebarWrapper">
        <Sidebar />
      </div>

      <div className="content w-100 ">
        <div className="card  shadow border-0 p-3 mt-4">
          <h3>Product Upload</h3>
        </div>

        <form className="form" onSubmit={addProduct}>
          <div className="row">
            <div className="col">
              <div className="card p-4">
                <h5 className="mb-4">Informations</h5>
                {error_===true && <p className="text-danger">Please fill all the fields</p>}
                {success_===true && <p className="text-success">Successfully !</p>}
                <div className="form-group mt-3">
                  <h6>PRODUCT NAME</h6>
                  <input type="text" />
                </div>
                <div className="form-group mt-3">
                  <h6>DESCRIPTION</h6>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>CATEGORY</h6>
                      <Select
                        value={categoryVal}
                        onChange={handleChangeCategory}
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

                  <div className="col">
                    <div className="form-group">
                      <h6>BRAND</h6>
                      <input type="text" />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>OLD PRICE</h6>
                      <input type="text" />
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-group">
                      <h6>NET PRICE</h6>
                      <input type="text" />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>STOCK</h6>
                      <input type="text" />
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-group">
                      <h6>IMAGE</h6>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="form-control"
                      />
                    </div>
                    {preview && (
                      <div className="mt-3">
                        <h6>Preview:</h6>
                        <img
                          src={preview}
                          alt="Preview"
                          style={{
                            width: "200px",
                            height: "auto",
                            borderRadius: "8px",
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>

                <br />

                <Button  type="submit" className="btn-purple btn-lg btn-big" >
                  <BsCloudUploadFill /> &nbsp; PUBLISH
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProcductUpload;
