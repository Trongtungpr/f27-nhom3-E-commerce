import "./ShopDrop.scss";
import Dropdown from "react-bootstrap/Dropdown";
function ShopDrop() {
  return (
    <div class="dropdown">
      <button class="dropbtn">SHOP</button>
      <div class="dropdown-content">
        <a href="#">Shop</a>
        <a href="#">Wishlist</a>
        <a href="#">Cart</a>
        <a href="#">Single Product</a>
        <a href="#">Check Out</a>
      </div>
    </div>
  );
}

export default ShopDrop;
