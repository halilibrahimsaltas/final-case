import Sidebar from "../../Component/SideBar";

const  Listing = ()=>{
    return(
       <div>
           <section className="product_Listing_Page">
            <div className="container">
                <div className="productListing d-flex">
                    <Sidebar/>

                    <div className="content_right">
                        contentright


                    </div>

                </div>

            </div>

           </section>
       </div>

    )

}

export default Listing;