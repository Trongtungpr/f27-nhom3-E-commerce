import HomeLayoutHeader from "./components/HomeLayoutHeader";

function HomeLayout(props) {
  return (
    <div className="HomeLayout">
      <HomeLayoutHeader />
      <div className="home-content-wrapper">{props.content}</div>
    </div>
  );
}

export default HomeLayout;
