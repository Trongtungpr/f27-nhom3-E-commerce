import "./ProductItem.scss";

import { FaShoppingCart, FaHeart, FaAlignJustify } from "react-icons/fa";
function ProductItem(props) {
  return (
    <div class="item">
      <div class="product">
        <img class="img-fluid" src={props.product.img} />
      </div>
      <div class="text py-3 pb-4 px-3 text-center">     
          <a href="#">{props.product.name}</a>
      </div>
      <div class="pricing">
        <span class="mr-2 price-dc">{props.product.price}</span>
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
