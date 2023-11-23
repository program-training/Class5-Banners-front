import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserLoginI {
  loggedIn: boolean;
  isAdmin: boolean;
  token: string;
}

const loggedOut = { loggedIn: false, isAdmin: false, token: "" };

const initialState: UserLoginI = JSON.parse(
  localStorage.getItem("user") || JSON.stringify(loggedOut)
);

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserLoginI>) => {
      state.isAdmin = action.payload.isAdmin;
      state.loggedIn = action.payload.loggedIn;
      state.token = action.payload.token;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logOut: (state) => {
      counterSlice.caseReducers.setUser(state, {
        payload: loggedOut,
        type: "user/setUser",
      });
    },
  },
});

export const { setUser, logOut } = counterSlice.actions;

export default counterSlice.reducer;
