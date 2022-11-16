import { initializeUseSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router";
import { ROUTERS } from "../../const";
import "./ShopDrop.scss";

function ShopDrop() {
    const navigate = useNavigate();
    const handleShop = (e)=>{
        navigate(ROUTERS.product)
    };
  return (
    <div class="dropdown">
      <button class="dropbtn">SHOP</button>
      <div class="dropdown-content">
        <a href="" onClick={handleShop}>Shop</a>
        <a href="#">Wishlist</a>
        <a href="#">Cart</a>
        <a href="#">Single Product</a>
        <a href="#">Check Out</a>
      </div>
    </div>
  );
}

export default ShopDrop;
