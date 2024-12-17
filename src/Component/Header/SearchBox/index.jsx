import { Button } from "@mui/material";
import { IoSearch } from "react-icons/io5";

const Seachbox = () => {
  return (
    <div className="headerSearch ml-3 mr-3">
      <input type="text" placeholder="Seach for products..." />
      <Button>
        <IoSearch />
      </Button>
    </div>
  )
};

export default Seachbox;
