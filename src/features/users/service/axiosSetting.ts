// import axios from "axios";
// import { FETCH_ACTION } from "../user-slice";

// export const axiosMiddleware = (store) => (next) => (action) => {
//   console.log("action:", action);

//   if (action.type === `${FETCH_ACTION}/fulfilled`) {
//     setInterceptors(store);
//   }

//   return next(action);
// };

// export const setInterceptors = (store) => {
//   if (!store) {
//     return;
//   }

//   axios.interceptors.response.use(
//     (response) => {
//       console.log("inside interceptors", store.getState());
//       return response;
//     },
//     (error) => {
//       console.log("inside interceptors - error", store.getState());
//       return Promise.reject(error);
//     }
//   );
// };
