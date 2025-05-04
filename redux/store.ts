//
// "use client";

// import { configureStore } from "@reduxjs/toolkit";
// import { apiSlice } from "./features/api/apiSlice";
// import authSlice from "./features/auth/authSlice";

// export const store = configureStore({
//   reducer: {
//     [apiSlice.reducerPath]: apiSlice.reducer,
//     auth: authSlice,
//   },
//   devTools: false,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiSlice.middleware),
// });

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;



































"use client" 
import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "./features/api/apiSlice";
import authSlice from "./features/auth/authSlice"
// import { boolean } from "yup";


export const store=configureStore({
    reducer:{
[apiSlice.reducerPath]:apiSlice.reducer,
auth:authSlice,
},
    devTools:false,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware)
});


//call the refresh token function on every page load



const initializeApp = async () => {
    
        await store.dispatch(apiSlice.endpoints.refreshToken.initiate({},{forceRefetch:true}));
        await store.dispatch(apiSlice.endpoints.loadUser.initiate({},{forceRefetch:true}));
  
};

initializeApp();











// store.js

// import { configureStore } from "@reduxjs/toolkit";
// import { apiSlice } from "./features/api/apiSlice";
// import authSlice from "./features/auth/authSlice";

// export const store = configureStore({
//     reducer: {
//         [apiSlice.reducerPath]: apiSlice.reducer,
//         auth: authSlice,
//     },
//     devTools: false,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
// });

// // Define RootState and AppDispatch types
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// // Thunk action creator
// const initializeApp = async (dispatch: AppDispatch) => {
//     await dispatch(apiSlice.endpoints.refreshToken.initiate({}, { forceRefetch: true }));
// };

// // Call initializeApp with the correct dispatch type
// initializeApp(store.dispatch);
