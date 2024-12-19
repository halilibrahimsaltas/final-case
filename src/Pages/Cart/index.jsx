import { Link } from "react-router-dom";
import QuantityBox from "../../Component/QuantityBox";
import { IoClose } from "react-icons/io5";


const Cart = () => {
  return (
    <>
      <section className="section cartPage">
        <div className="container"> 
            <h2 className="hd mb-0">Your Cart</h2>
              <p>
                There are <b>3</b> products in your cart.
              </p>
          <div className="row">
            <div className="col-md-8">
             
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th width="40%">Product</th>
                      <th width="14%">Unit Price</th>
                      <th width="14%">Quantity</th>
                      <th width="10%">Subtotal</th>
                      <th width="10%">Remove</th>
                    </tr>
                  </thead>
                </table>
                <tbody>
                  <tr>
                    <td width="45%">
                        <Link to="/product/1"> 
                        <div className="d-flex align-items-center            cartItemimgWrapper">
                            <div className="imgWrapper">
                                <img src="https://m.media-amazon.com/images/I/81OcvnCIH1L._AC_SY200_.jpg" className="w-100"/>

                            </div>
                            <div className="info px-3">
                                <h6>Bounty Quick Size Paper Towels, White, 8 Family Rolls = 20 Regular Rolls
                                </h6>

                            </div>
                        </div>
                        </Link>
                
                    </td>
                    <td width="10%" >$24.42</td>
                    <td width="16%"><QuantityBox/></td>
                    <td width="12%">$24.42</td>
                    <td width="9%"><span className="remove"><IoClose /></span></td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td width="40%">
                        <Link to="/product/1"> 
                        <div className="d-flex align-items-center            cartItemimgWrapper">
                            <div className="imgWrapper">
                                <img src="https://m.media-amazon.com/images/I/81OcvnCIH1L._AC_SY200_.jpg" className="w-100"/>

                            </div>
                            <div className="info px-3">
                                <h6>Bounty Quick Size Paper Towels, White, 8 Family Rolls = 20 Regular Rolls
                                </h6>

                            </div>
                        </div>
                        </Link>
                
                    </td>
                    <td width="10%" >$24.42</td>
                    <td width="16%"><QuantityBox/></td>
                    <td width="12%">$24.42</td>
                    <td width="9%"><span className="remove"><IoClose /></span></td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td width="40%">
                        <Link to="/product/1"> 
                        <div className="d-flex align-items-center            cartItemimgWrapper">
                            <div className="imgWrapper">
                                <img src="https://m.media-amazon.com/images/I/81OcvnCIH1L._AC_SY200_.jpg" className="w-100"/>

                            </div>
                            <div className="info px-3">
                                <h6>Bounty Quick Size Paper Towels, White, 8 Family Rolls = 20 Regular Rolls
                                </h6>

                            </div>
                        </div>
                        </Link>
                
                    </td>
                    <td width="10%" >$24.42</td>
                    <td width="16%"><QuantityBox/></td>
                    <td width="12%">$24.42</td>
                    <td width="9%"><span className="remove"><IoClose /></span></td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td width="45%">
                        <Link to="/product/1"> 
                        <div className="d-flex align-items-center            cartItemimgWrapper">
                            <div className="imgWrapper">
                                <img src="https://m.media-amazon.com/images/I/81OcvnCIH1L._AC_SY200_.jpg" className="w-100"/>

                            </div>
                            <div className="info px-3">
                                <h6>Bounty Quick Size Paper Towels, White, 8 Family Rolls = 20 Regular Rolls
                                </h6>

                            </div>
                        </div>
                        </Link>
                
                    </td>
                    <td width="10%" >$24.42</td>
                    <td width="16%"><QuantityBox/></td>
                    <td width="12%">$24.42</td>
                    <td width="9%"><span className="remove"><IoClose /></span></td>
                  </tr>
                </tbody>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
