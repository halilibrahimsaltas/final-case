import Sidebar from "../../Component/SideBar";
import Button from "@mui/material/Button";
import { IoMenuOutline } from "react-icons/io5";
import { PiSquaresFourFill } from "react-icons/pi";
import { CgMenuGridR } from "react-icons/cg";
import { useEffect, useState } from "react";
import ProductItem from "../../Component/ProductItem";
import Pagination from "@mui/material/Pagination";
import { fetchDataFromApi } from "../../utils/api";
import { useLocation } from "react-router-dom";

const SearchPage = () => {
  const [productView, setProductView] = useState("three");
  const [page, setCurrentPage] = useState(1); // Track current page
  const [productData, setProductData] = useState([]);
  const [totalPages, setTotalPages] = useState(0); // Track total pages
  const [filters, setFilters] = useState({
    name: "",
    brand: "",
    priceRange: [0, 1000],
  });

  const location = useLocation();

  useEffect(() => {
    // Extract query parameters from the URL
    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get("name") || "";
    const brand = queryParams.get("brand") || "";

    // Update filters
    setFilters((prev) => ({
      ...prev,
      name,
      brand,
    }));

    // Fetch filtered data
    fetchDataFromApi(`/api/products?${queryParams.toString()}`)
      .then((res) => {
        setProductData(res.products || []);
        setTotalPages(res.totalPages || 0);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, [location.search, page]);

  // Handle page change for pagination
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div>
      <section className="product_Listing_Page">
        <div className="container">
          <div className="productListing d-flex">
            <Sidebar onFilterChange={setFilters} />

            <div className="content_right">
              <div className="showBy mt-3 mb-3 d-flex align-items-center">
                <div className="d-flex align-item-center btnWrapper">
                  <Button onClick={() => setProductView("one")}>
                    <IoMenuOutline />
                  </Button>
                  <Button onClick={() => setProductView("two")}>
                    <PiSquaresFourFill />
                  </Button>
                  <Button onClick={() => setProductView("three")}>
                    <CgMenuGridR />
                  </Button>
                </div>
              </div>

              <div className="productListing">
                {productData.map((product) => (
                  <ProductItem key={product.id} item={product} itemView={productView} />
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
                  size="large"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchPage;
