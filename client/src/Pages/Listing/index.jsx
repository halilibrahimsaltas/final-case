import Sidebar from "../../Component/SideBar";
import Button from "@mui/material/Button";
import { IoMenuOutline } from "react-icons/io5";
import { PiSquaresFourFill } from "react-icons/pi";
import { CgMenuGridR } from "react-icons/cg";
import { useEffect, useState } from "react";
import ProductItem from "../../Component/ProductItem";
import Pagination from '@mui/material/Pagination';

import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../../utils/api";

const Listing = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [productView, setProductView] = useState('three');
    const [page, setCurrentPage] = useState(1); // Track current page
    const [productData, setProductData] = useState([]);
    const [totalPages, setTotalPages] = useState(0); // Track total pages
    const [filters, setFilters] = useState({
    brands: [],
    categories: [],
    priceRange: [0, 12000],
     });
    const openDropdown = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const {id}=useParams();

    useEffect(() => {
      /*let url =window.location.href;
      let apiEndPoint="";
      if(url.includes('brand')){
        apiEndPoint=`/api/products?brand=${id}`
      }
      if(url.includes('category')){
        apiEndPoint=`/api/products?category=${id}`
      }
      console.log(window.location.href);
      fetchDataFromApi(`${apiEndPoint}`).then((res)=>{
        setProductData(res);

       }) [id]burası filters yerine*/
      
      const queryParams = new URLSearchParams();
  
      if (filters.brands.length) queryParams.append("brand", filters.brands.join(","));
      if (filters.categories.length) queryParams.append("category", filters.categories.join(","));
      queryParams.append("minPrice", filters.priceRange[0]);
      queryParams.append("maxPrice", filters.priceRange[1]);
      queryParams.append("page", page);
  
      fetchDataFromApi(`/api/products?${queryParams.toString()}`)
        .then((res) => {
          setProductData(res.products);
          setTotalPages(res.totalPages)
           })
        .catch((err) => console.error("Error fetching products:", err));
    }, [filters,page]);


  // Handle page change for pagination
  const handleChange = (event, value) => {
    setCurrentPage(value);
};

  
  return (
    <div>
      <section className="product_Listing_Page">
        <div className="container">
          <div className="productListing d-flex">
            <Sidebar onFilterChange ={setFilters} />

            <div className="content_right">
              <div className="showBy mt-3 mb-3 d-flex align-items-center">
                <div className="d-flex align-item-center btnWrapper">
                  <Button onClick={()=>setProductView('one')}>
                    <IoMenuOutline />
                  </Button>
                  <Button onClick={()=>setProductView('two')}>
                    <PiSquaresFourFill />
                  </Button>
                  <Button onClick={()=>setProductView('three')}>
                    <CgMenuGridR />
                  </Button>
                </div>

              
              </div>

              <div className="productListing">
              {productData.map((product) => (
             <ProductItem key={product.id} item={product} itemView= {productView}/>
              ))}
              </div>
              <div className="d-flex align-items-center justify-content-center mt-5">
               <Pagination  
                  count={totalPages}
                  page={page}
                  onChange={handleChange}
                  color="secondary"
                  className="pagination"
                  showFirstButton
                  showLastButton
                  size="large" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Listing;
