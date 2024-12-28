import { Button } from "@mui/material";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Searchbox = () => {
  const [searchFields, setSearchFields] = useState("");

  const navigate = useNavigate();

  const onChangeValue = (e) => {
    setSearchFields(e.target.value);
  };

  const searchProducts = () => {
    if (!searchFields.trim()) {
      alert("Please enter a search term.");
      return;
    }
    
    // Navigate to SearchPage with the query parameter
    navigate(`/search?${searchFields}`);
  };

  return (
    <div className="headerSearch ml-3 mr-3">
      <input
        type="text"
        placeholder="Search for products by name or brand..."
        onChange={onChangeValue}
        value={searchFields}
      />
      <Button onClick={searchProducts}>
        <IoSearch />
      </Button>
    </div>
  );
};

export default Searchbox;
