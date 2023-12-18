import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { BannerInterface } from "./interface/BannerInterface";
import {
  getBannersReq,
  addBannerReq,
  getMyBannersReq,
  deleteBannerReq,
  getUnbanneredProducts,
  getBannerByBannerIdReq,
  editBannerReq,
} from "./service/bannerReqFromServer";
import { ProductInterface } from "./interface/ProductInterface";

interface InitialState {
  pending: boolean;
  bannersState: BannerInterface[] | null;
  bannersToDisplay: BannerInterface[] | null;
  specificBanner: BannerInterface | null;
  products: ProductInterface[] | null;
  error: string;
}

const initialState: InitialState = {
  pending: false,
  bannersState: null,
  bannersToDisplay: null,
  specificBanner: null,
  products: null,
  error: "",
};

export const bannersSlice = createSlice({
  name: "banners",
  initialState,
  reducers: {
    setBannersToDisplay: (state, action: PayloadAction<BannerInterface[]>) => {
      if (!action.payload) state.bannersToDisplay = state.bannersState;
      state.bannersToDisplay = action.payload;
      return state;
    },
    setSpecificBanner: (state, action) => {
      state.specificBanner = action.payload;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBannersReq.pending, (state) => {
      state.pending = true;
      state.error = "";
      return state;
    });
    builder.addCase(getBannersReq.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.bannersToDisplay = payload;
      state.bannersState = payload;
      state.error = "";
      return state;
    });
    builder.addCase(getBannersReq.rejected, (state, { error }) => {
      state.pending = false;
      state.error = error.message || "";
      return state;
    });
    builder.addCase(addBannerReq.pending, (state) => {
      state.pending = true;
      state.error = "";
      return state;
    });
    builder.addCase(addBannerReq.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.bannersState?.push(payload[0]);
      state.products?.splice(
        state.products.findIndex((prod) => prod.id === payload.productID),
        1
      );
      state.bannersToDisplay = state.bannersState;
      state.error = "";
      return state;
    });
    builder.addCase(addBannerReq.rejected, (state, { error }) => {
      state.pending = false;
      state.error = error.message || "";
      return state;
    });

    builder.addCase(getMyBannersReq.pending, (state) => {
      state.pending = true;
      state.error = "";
      return state;
    });
    builder.addCase(getMyBannersReq.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.bannersState = payload;
      state.error = "";
      return state;
    });
    builder.addCase(getMyBannersReq.rejected, (state, { error }) => {
      state.pending = false;
      state.error = error.message || "";
      return state;
    });
    builder.addCase(getBannerByBannerIdReq.pending, (state) => {
      state.pending = true;
      state.error = "";
      return state;
    });
    builder.addCase(getBannerByBannerIdReq.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.specificBanner = payload;
      state.error = "";
      return state;
    });
    builder.addCase(getBannerByBannerIdReq.rejected, (state, { error }) => {
      state.pending = false;
      state.error = error.message || "";
      return state;
    });
    builder.addCase(deleteBannerReq.pending, (state) => {
      state.pending = true;
      state.error = "";
      return state;
    });
    builder.addCase(deleteBannerReq.fulfilled, (state, { payload }) => {
      state.bannersState?.splice(
        state.bannersState.findIndex((banner) => banner._id === payload._id),
        1
      );
      state.bannersToDisplay = state.bannersState;
      state.pending = false;
      state.error = "";
      return state;
    });
    builder.addCase(deleteBannerReq.rejected, (state, { error }) => {
      state.pending = false;
      state.error = error.message || "";
      return state;
    });
    builder.addCase(getUnbanneredProducts.pending, (state) => {
      state.pending = true;
      state.error = "";
      return state;
    });
    builder.addCase(getUnbanneredProducts.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.products = payload;
      state.error = "";
      return state;
    });
    builder.addCase(getUnbanneredProducts.rejected, (state, { error }) => {
      state.pending = false;
      state.error = error.message || "";
      return state;
    });
    builder.addCase(editBannerReq.pending, (state) => {
      state.error = "";
      state.pending = true;
      return state;
    });
    builder.addCase(editBannerReq.fulfilled, (state, { payload }) => {
      state.error = "";
      state.pending = false;
      if (state.bannersState) {
        const index = state.bannersState.findIndex(
          (banner) => banner._id === payload._id
        );
        state.bannersState[index] = payload;
        state.bannersToDisplay = state.bannersState;
      }
      return state;
    });
    builder.addCase(editBannerReq.rejected, (state, { error }) => {
      state.pending = false;
      state.error = error.message || "";
      return state;
    });
  },
});
export const { setBannersToDisplay: setBanners, setSpecificBanner } =
  bannersSlice.actions;
export default bannersSlice.reducer;
