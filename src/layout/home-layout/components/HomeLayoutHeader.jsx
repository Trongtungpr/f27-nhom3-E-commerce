import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { ROUTERS } from "../../../const";
import { logoutAction } from "../../../stores/slices";
import { FaShoppingCart } from "react-icons/fa";
import "./HomeLayoutHeader.scss";
import ShopDrop from "../../../components/shop/ShopPage";

function HomeLayoutHeader() {
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.user.userInfoState.data);
  const dispatch = useDispatch();

  const gotoLoginPage = () => {
    navigate(ROUTERS.login);
  };

  const onLogout = () => {
    dispatch(logoutAction());
  };

  

  return (
    <div className="HomeLayoutHeader">
      <div className="contaier-header">
        <div className="header">
          <div className="logo">
            <a href="logo">
              <img
                className="logos"
                src={require("../../../assets/images/Plantiful Garden Logo.gif")}
                alt=""
              />
            </a>
          </div>
          <div className="header-list">
            <input type="text" placeholder="Search..." />
            <a href="">HOME</a>
           <a href="" > <ShopDrop/></a>
            <a href="">ABOUT US</a>
            <a href="">CONTACT</a>
          </div>
          <div className="header-customer">
            {userInfo && <div className="user-logout">{userInfo.email}</div>}
            {userInfo === null ? (
              <div className="header-login" onClick={gotoLoginPage}>
                LOGIN 
              </div>
            ) : (
              <div className="header-logout" onClick={onLogout}>Logout</div>
            )}
            <h3 className="cart">
              {" "}
              <FaShoppingCart />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLayoutHeader;
