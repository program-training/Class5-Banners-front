import {
  getToken,
  getUser,
  removeToken,
  setItem,
} from "./service/localStorageService";
import {
  loginReq,
  signUpReq,
  deleteUserReq,
  getUserReq,
  editUserReq,
} from "./service/asyncReq";
import {
  SerializedError,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { UserInterface } from "./interfaces/userInterface";
import {
  LoginInterface,
  SignUpInterface,
} from "./interfaces/userSliceInterfaces";

interface initialState {
  loading: boolean;
  userState: UserInterface | null;
  token: string | null;
  error: string | SerializedError;
}
const initialState: initialState = {
  error: "",
  loading: false,
  token: getToken(),
  userState: getUser(),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = "";
      return state;
    },
    logOut: (state) => {
      // client.clearStore();
      state = initialState;
      removeToken();
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginReq.pending, (state) => {
      state.error = "";
      state.loading = true;
      return state;
    }),
      builder.addCase(loginReq.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = "";
        if (payload) {
          state.token = payload;
          setItem("token", payload);
          state.userState = getUser();
        }
        return state;
      }),
      builder.addCase(loginReq.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message || "";
        return state;
      });
    builder.addCase(signUpReq.pending, (state) => {
      state.error = "";
      state.loading = true;
      return state;
    }),
      builder.addCase(signUpReq.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.token = payload;
        state.error = "";
        return state;
      }),
      builder.addCase(signUpReq.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message || "";
        return state;
      });
    builder.addCase(deleteUserReq.pending, (state) => {
      state.error = "";
      state.loading = true;
      return state;
    });
    builder.addCase(deleteUserReq.fulfilled, (state) => {
      // client.clearStore();
      removeToken();
      state.error = "";
      state.loading = false;
      state.token = null;
      state.userState = null;
      return state;
    });
    builder.addCase(deleteUserReq.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message || "";
      return state;
    });
    builder.addCase(getUserReq.pending, (state) => {
      state.error = "";
      state.loading = true;
      return state;
    });
    builder.addCase(getUserReq.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = "";
      state.userState = payload;
      return state;
    });
    builder.addCase(getUserReq.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message || "";
      return state;
    });
    builder.addCase(editUserReq.pending, (state) => {
      state.error = "";
      state.loading = true;
      return state;
    });
    builder.addCase(editUserReq.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = "";
      state.userState = payload;
      return state;
    });
    builder.addCase(editUserReq.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message || "";
      return state;
    });
  },
});

export const { logOut, resetError } = userSlice.actions;
export default userSlice.reducer;

// interface initialState {
//   loading: boolean;
//   userState: UserInterface | null;
//   token: string | null;
//   error: string | SerializedError;
// }
// const initialState: initialState = {
//   error: "",
//   loading: false,
//   token: getToken(),
//   userState: getUser(),
// };

// const BASE_URL =
//   import.meta.env.VITE_BASE_URL ||
//   "https://banner-service-back.onrender.com:";

// export const loginReq = createAsyncThunk(
//   "user/loginReq",
//   async (userFromClient: LoginInterface, thunkAPI) => {
//       try {
//           const { data: token } = await axios.post(
//               `${BASE_URL}/users/login`,
//               userFromClient
//           );
//           return token;
//       } catch (error) {
//           return thunkAPI.rejectWithValue({ error });
//       }
//   }
// );

// export const signUpReq = createAsyncThunk(
//   "user/signUpReq",
//   async (userFromClient: SignUpInterface, thunkAPI) => {
//       try {
//           const { data: user } = await axios.post(
//               `${BASE_URL}/users/sign-up`,
//               userFromClient
//           );
//           return user;
//       } catch (error) {
//           return thunkAPI.rejectWithValue({ error });
//       }
//   }
// );

// export const deleteUserReq = createAsyncThunk(
//   "user/deleteUserReq",
//   async (_, thunkAPI) => {
//       try {
//           const { data: deletedUser } = await axios.delete(
//               `${BASE_URL}/users`
//           );
//           return deletedUser;
//       } catch (error) {
//           return thunkAPI.rejectWithValue({ error });
//       }
//   }
// );

// export const getUserReq = createAsyncThunk(
//   "user/getUserReq",
//   async (_, thunkAPI) => {
//       try {
//           const { data: user } = await axios.get(BASE_URL);
//           return user;
//       } catch (error) {
//           return thunkAPI.rejectWithValue({ error });
//       }
//   }
// );
// export const editUserReq = createAsyncThunk(
//   "user/editUserReq",
//   async (editedUser: Partial<UserInterface>, thunkAPI) => {
//       try {
//           const { data } = await axios.put(`${BASE_URL}/users`, editedUser);
//           return data;
//       } catch (error) {
//           return thunkAPI.rejectWithValue(error);
//       }
//   }
// );

// export const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//       logOut: (state) => {
//           state.userState = null;
//           state.token = null;
//           removeToken();
//           return state;
//       },
//   },
//   extraReducers: (builder) => {
//       builder.addCase(loginReq.pending, (state) => {
//           state.loading = true;
//           return state;
//       }),
//           builder.addCase(loginReq.fulfilled, (state, { payload }) => {
//               state.loading = false;
//               state.error = "";
//               if (payload) {
//                   state.token = payload;
//                   localStorage.setItem("token", payload);
//                   state.userState = getUser();
//               }
//               return state;
//           }),
//           builder.addCase(loginReq.rejected, (state, payload) => {
//               state.loading = false;
//               state.error = payload.error;
//               return state;
//           });
//       builder.addCase(signUpReq.pending, (state) => {
//           state.loading = true;
//           return state;
//       }),
//           builder.addCase(signUpReq.fulfilled, (state) => {
//               state.loading = false;
//               state.error = "";
//               return state;
//           }),
//           builder.addCase(signUpReq.rejected, (state, payload) => {
//               state.loading = false;
//               state.error = payload.error;
//               return state;
//           });
//       builder.addCase(deleteUserReq.pending, (state) => {
//           state.loading = true;
//       });
//       builder.addCase(deleteUserReq.fulfilled, (state) => {
//           removeToken();
//           state.token = null;
//           state.userState = null;
//           return state;
//       });
//       builder.addCase(deleteUserReq.rejected, (state, payload) => {
//           state.error = payload.error;
//           return state;
//       });
//   },
// });

// export const { logOut } = userSlice.actions;
// export default userSlice.reducer;
