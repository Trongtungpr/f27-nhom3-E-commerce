import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import { ROUTERS } from "./const";
import FullLayout from "./layout/full-layout/FullLayout";
import HomeLayout from "./layout/home-layout/HomeLayout";
import DashboardPage from "./page/admin/DashboardPage";
import { LoginPage } from "./page/auth/login/LoginPage";
import RegisterPage from "./page/auth/register/RegisterPage";
import CartPage from "./page/customer/cart/CartPage";
import ProductList from "./page/customer/home/components/product/productlist/ProductList";
import HomePage from "./page/customer/home/HomePage";
import { ProtectedRoute } from "./router/ProtectedRoute";

// This is a components
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Customer Router */}
          <Route
            path={ROUTERS.home}
            element={<HomeLayout content={<HomePage />} />}
          />
          <Route
            path={ROUTERS.product}
            element={<HomeLayout content={<ProductList />} />}
          />
          <Route
            path={ROUTERS.login}
            element={<FullLayout content={<LoginPage />} />}
          />
          <Route
            path={ROUTERS.register}
            element={<FullLayout content={<RegisterPage/>} />}
          />
          {/* Protected Router */}
          <Route
            path={ROUTERS.cart}
            element={
              <HomeLayout
                content={
                  <ProtectedRoute>
                    <CartPage />
                  </ProtectedRoute>
                }
              />
            }
          />

          {/* Staff Router */}
          <Route
            path={"/staff/product"}
            element={
              <HomeLayout
                content={
                  <ProtectedRoute>
                    <CartPage />
                  </ProtectedRoute>
                }
              />
            }
          />
          <Route
            path={"/staff/order"}
            element={
              <HomeLayout
                content={
                  <ProtectedRoute>
                    <CartPage />
                  </ProtectedRoute>
                }
              />
            }
          />

          {/* Admin */}

          <Route
            path={"/admin/dashboard"}
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
