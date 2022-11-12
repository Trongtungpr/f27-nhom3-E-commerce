import RegistrationForm from "../../page/auth/register/RegisterPage";
import HomeLayoutHeader from "./components/HomeLayoutHeader";

function HomeLayout(props) {
  return (
    <div className="HomeLayout">
      <HomeLayoutHeader />
      <RegistrationForm />
      <div className="home-content-wrapper">{props.content}</div>
    </div>
  );
}

export default HomeLayout;
