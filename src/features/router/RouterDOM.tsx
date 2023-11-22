import { Routes, Route } from "react-router-dom";
import SignUpPage from "../users/pages/SignUpPage";
import BannerManagementPage from "../banners/pages/BannerManagementPage";
import ShowUserPage from "../users/pages/ShowUserPage";
import ErrorPage from "../pages/ErrorPage";
import LogInPage from "../users/pages/LogInPage";
import ForgetPasswordPage from "../users/pages/ForgetPasswordPage";
import ResetPasswordPage from "../users/pages/ResetPasswordPage";
import EditUserPage from "../users/pages/EditUserPage";
import CreateNewBannerPage from "../banners/pages/CreateNewBannerPage";
import EditBannerPage from "../banners/pages/EditBannerPage";
import MyBannersPage from "../banners/pages/MyBannersPage";
import Layout from "../layout/Layout";

const RouterDom = () => {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/forget-password/:userID" element={<ForgetPasswordPage />} />
      <Route path="/reset-password/:userID" element={<ResetPasswordPage />} />

      <Route path="/banners" element={<Layout />}>
        <Route path="" element={<BannerManagementPage />} />
        <Route path="my-banners/:userID" element={<MyBannersPage />} />
        <Route path="create" element={<CreateNewBannerPage />} />
        <Route path="edit/:productID" element={<EditBannerPage />} />
        <Route path="products/:productID" element={<SignUpPage />} />
        <Route path="categories/:categoryName" element={<SignUpPage />} />
      </Route>

      <Route path="/managements" element={<BannerManagementPage />} />

      <Route path="/users" element={<ShowUserPage />}>
        <Route path="show/:userID" element={<ShowUserPage />} />
        <Route path="edit/:userID" element={<EditUserPage />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
export default RouterDom;
