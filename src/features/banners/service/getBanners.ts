import axios from "axios";

const URL = `${import.meta.env.VITE_BASE_URL}/api/banners`;

export const getBannersFromServer = async (token: string) => {
  try {
    const banners = await axios.get(URL, {headers: {Authorization: token}});
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
