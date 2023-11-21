import { Routes, Route } from "react-router-dom";
import SignUpPage from "../pages/SignUpPage";
import BannerManagementPage from "../pages/BannerManagementPage";
import ShowUserPage from "../pages/ShowUserPage";
import ErrorPage from "../pages/ErrorPage";
import LogInPage from "../pages/LogInPage";
import BannerPage from "../pages/BannerPage";
import ForgetPasswordPage from "../pages/ForgetPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import EditUserPage from "../pages/EditUserPage";
import CreateNewBannerPage from "../pages/CreateNewBannerPage";
import EditBannerPage from "../pages/EditBannerPage";
import Header from "../components/Header";
import MyBannersPage from "../pages/MyBannersPage";

const RouterDom = () => {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/forget-password/:userID" element={<ForgetPasswordPage />} />
      <Route path="/reset-password/:userID" element={<ResetPasswordPage />} />

      <Route path="/banners" element={<Header />}>
        <Route path="" element={<BannerManagementPage />} />
        <Route path="my-banners" element={<MyBannersPage />} />
        <Route path="create" element={<CreateNewBannerPage />} />
        <Route path="edit/:productID" element={<EditBannerPage />} />
        <Route path="products/:productID" element={<SignUpPage />} />
        <Route path="categories/:categoryName" element={<BannerPage />} />
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
