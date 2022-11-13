import "./ProductItem.scss";

import { FaShoppingCart, FaHeart, FaAlignJustify } from "react-icons/fa";
function ProductItem() {
  return (
    <div class="item">
      <div class="product">
        <img
          class="img-fluid"
          src={require("../../assets/images/product-1.jpg")}
        />
      </div>
      <div class="text py-3 pb-4 px-3 text-center">
        <h3>
          <a href="#">Bell Pepper</a>
        </h3>
      </div>
      <div class="pricing">
        <span class="mr-2 price-dc">$120.00</span>
      </div>
      <div className="item-cart">
        <h3 className="cart">
          <FaShoppingCart />
        </h3>
        <h3 className="cart">
          <FaHeart />
        </h3>
        <h3 className="cart">
          <FaAlignJustify />
        </h3>
      </div>
    </div>
  );
}

export default ProductItem;
