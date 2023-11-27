import axios from "axios";

const URL = "https://banner-service-back.onrender.com/api/banners";

export const getBannersFromServer = async () => {
  try {
    const banners = await axios.get(URL);
    return banners.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getBannerById = async (id: string) => {
  try {
    const banner = await axios.get(`${URL}/${id}`);
    return banner.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getBannerByUserId = async (userID: string) => {
  try {
    const banner = await axios.get(`${URL}/myBanners/${userID}`);
    return banner.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
