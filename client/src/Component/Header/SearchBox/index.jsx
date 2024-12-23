import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { fetchDataFromApi } from "../../../utils/api";
import MyContext from "../../../context/MyContext";
import { useNavigate } from "react-router-dom";


const Seachbox = () => {
  const [searchFields, setSearchFields]= useState("");

  const context = useContext(MyContext);

  const navigate = useNavigate();

  const onChangeValue=(e)=>{
    setSearchFields(e.target.value);
  }

  const searchProducts=()=>{
    fetchDataFromApi(`api/search?q=${searchFields}`).then((res)=>{
      context.setSearchData(res);
      navigate('/search');

    })

    
  }

  return (
    <div className="headerSearch ml-3 mr-3">
      <input type="text" placeholder="Seach for products..."  onChange={onChangeValue}/>
      <Button onClick={searchProducts}>
        <IoSearch />
      </Button>
    </div>
  )
};

export default Seachbox;
