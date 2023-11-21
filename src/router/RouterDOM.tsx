import { Routes, Route } from "react-router-dom";
import SignUpPage from "../pages/SignUpPage";
import BannerManagementPage from "../pages/BannerManagementPage";
import ShowUserPage from "../pages/ShowUserPage";
import ErrorPage from "../pages/ErrorPage";

const RouterDom = () => {
  return (
    <Routes>
      <Route path="/SignIn" element={<SignUpPage />} />
      <Route path="/banners" element={<SignUpPage />}>
        <Route path="products/:id" element={<SignUpPage />} />
        <Route path="categories/:name" element={<SignUpPage />} />
      </Route>
      <Route path="/managements" element={<BannerManagementPage />} />
      <Route path="/users" element={<ShowUserPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
export default RouterDom;
