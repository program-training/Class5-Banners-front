import axios from "axios";

const URL = `${import.meta.env.VITE_SERVER_HOST}:${import.meta.env.VITE_SERVER_PORT}/api/banners`;

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

export const getBannerByUserId = async (token: string) => {
  try {
    const banner = await axios.get(`${URL}/myBanners/`, {
      headers: {
        Authorization: token,
  }});
    return banner.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
