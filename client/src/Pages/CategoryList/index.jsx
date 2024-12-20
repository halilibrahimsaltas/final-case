import React, { useEffect, useState } from "react";
import Sidebar from "../../Component/Dashboard/Sidebar";
import { Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FaPen } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import Pagination from "@mui/material/Pagination";
import { deleteData, editData, fetchDataFromApi } from "../../utils/api";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";


const CategoryList = () => {
  const [catData, setCatData] = useState([]);
  const [showBy, setShowBy] = useState("");
  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formFields, setformFields] = useState({
    name: "",
  });

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

  const changeInput = (e) => {
    setformFields(() => ({
      ...formFields,
      [e.target.name]: e.target.value,
    }));
  };

  const editCat = (id) => {
    setformFields({
        name: ''
      });
    if (!id) {
      console.error("ID is undefined");
      return;
    }
    setEditId(id);
    setOpen(true);
    fetchDataFromApi(`/api/categories/${id}`).then((data) => {
      setformFields({
        name: data.name
      });
      console.log(data);
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const categoryEditFunc = (e) => {
    e.preventDefault();

    editData(`/api/categories/${editId}`,formFields)
      .then((data) => {
         fetchDataFromApi("/api/categories")
       .then((data) => {
        setCatData(data);
        setOpen(false);
      })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteCat = (id)=>{

    deleteData(`/api/categories/${id}`).then(res=>{
        fetchDataFromApi("/api/categories")
       .then((data) => {
        setCatData(data);
       
      })

    })
  }
  

 

  return (
    <div className="main d-flex mt-4">
      <div className="sidebarWrapper">
        <Sidebar />
      </div>

      <div className="content w-100 ">
        <div className="card shadow border-0 p-3 mt-4">
          <h3>Category List</h3>

          <div className="row cardFilter mt-3">
            <div className="col">
              <h4>Category By</h4>
              <Select
                value={showBy}
                onChange={(e) => setShowBy(e.target.value)}
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
                  <th>UID</th>
                  <th>CATEGORY</th>
                  <th>ACTION</th>
                </tr>
              </thead>

              <tbody>
                {catData?.length !== 0 &&
                  catData.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>
                        <div className="actions d-flex align-items-center">
                          <Button
                            className="success"
                            color="success"
                            onClick={() => editCat(item._id)}
                          >
                            <FaPen />
                          </Button>
                          <Button className="error" color="error" onClick={()=>deleteCat(item._id)}>
                            <RiDeleteBinFill />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="d-flex justify-content-center pt-3 tableFooter">
              <Pagination
                count={100}
                color="secondary"
                className="pagination"
                showFirstButton
                showLastButton
              />
            </div>
          </div>
        </div>
      </div>

      <Dialog open={open} onClose={handleClose} className="editModal">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          }}
        >
          <DialogTitle>Edit Category</DialogTitle>
          
            <DialogContent>
              <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                name="name"
                label="Category Name"
                type="text"
                fullWidth
                variant="standard"
                value={formFields.name || ""} // Prevent uncontrolled component error
                onChange={changeInput}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} variant="outlined">
                Cancel
              </Button>
              <Button type="button" onClick={categoryEditFunc} variant="outlined" className="btn-purple ">
                Submit
              </Button>
            </DialogActions>
         

          <br />
        </form>
      </Dialog>
    </div>
  );
};

export default CategoryList;
