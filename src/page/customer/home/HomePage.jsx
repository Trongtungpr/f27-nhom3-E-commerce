import HeaderSlider from "../../../components/slider/Slider";
import RegisterPage from "../../auth/register/RegisterPage";
import ProductList from "./components/product/productlist/ProductList";


function HomePage() {
  return <div>
    <HeaderSlider/>
    <ProductList/>
    {/* <RegisterPage/> */}
  </div>;
}

export default HomePage;
