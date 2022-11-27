import Footer from "../../components/footer/Footer";
import ProductList from "../../page/customer/home/components/product/productlist/ProductList";


import HomeLayoutHeader from "./components/HomeLayoutHeader";

function HomeLayout(props) {
  return (
    <div className="HomeLayout">
      <HomeLayoutHeader />
      <div className="home-content-wrapper">{props.content}</div>
      {/* <ProductList /> */}
      {/* <div> <ProductItem/></div> */}
      {/* <div><RegisterPage/></div> */}

      <div><Footer/></div>
    </div>
  );
}

export default HomeLayout;
