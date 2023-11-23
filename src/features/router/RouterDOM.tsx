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
import BannerPage from "../banners/pages/BannerPage";

const RouterDom = () => {
  return (
    <Routes>

      <Route path="banners">
        <Route path="products/:productID" element={<BannerPage />} />
        <Route path="categories/:categoryName" element={<BannerPage />} />
      </Route>

      <Route path="/" element={<Layout />}>
        <Route path="" element={<BannerManagementPage />} />
        <Route path="my-banners/" element={<MyBannersPage />} />
        <Route path="create" element={<CreateNewBannerPage />} />
        <Route path="edit/:bannerID" element={<EditBannerPage />} />

        <Route path="user/sign-up" element={<SignUpPage />} />
        <Route path="user/login" element={<LogInPage />} />
        <Route path="user/show/" element={<ShowUserPage />} />
        <Route path="user/edit/" element={<EditUserPage />} />
        <Route
          path="user/forget-password/"
          element={<ForgetPasswordPage />}
        />
        <Route path="reset-password/" element={<ResetPasswordPage />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
export default RouterDom;
