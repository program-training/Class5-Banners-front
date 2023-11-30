const ROUTES = {
  layout: "/",
  BannerManagementPage: "",
  BannerHorizontalPage: "banners/horizontal/products/:id",
  BannerPage: "banners/vertical/products/:id",
  BannerPageByCategory: "banners/categories/:categoryName",
  MyBannersPage: "my-banners/",
  CreateNewBannerPage: "create",
  EditBannerPage: "edit/:bannerID",
  SignUpPage: "user/sign-up",
  LogInPage: "user/login",
  ShowUserPage: "user/show/",
  EditUserPage: "user/edit/",
  ForgetPasswordPage: "user/forget-password/",
  ResetPasswordPage: "reset-password/",
  ErrorPage: "*",
};

export default ROUTES;
