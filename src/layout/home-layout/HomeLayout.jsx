import Footer from "../../components/footer/Footer";
import ProductItem from "../../components/product/ProductItem";
import RegisterPage from "../../page/auth/register/RegisterPage";
import HomeLayoutHeader from "./components/HomeLayoutHeader";

function HomeLayout(props) {
  return (
    <div className="HomeLayout">
      <HomeLayoutHeader />
      <div className="home-content-wrapper">{props.content}</div>
      <div> <ProductItem/></div>
      {/* <div><RegisterPage/></div> */}
      <div><Footer/></div>
    </div>
  );
}

export default HomeLayout;
