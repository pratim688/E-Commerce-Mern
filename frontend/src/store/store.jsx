import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./userSlice";
import { createTransform } from "redux-persist";
const clearInvalidTokenTransform = createTransform(
  // Transform in: Runs when state is being rehydrated
  (inboundState) => {
    if (inboundState.token && !validateToken(inboundState.token)) {
      return { ...inboundState, token: null, userDetails: null };
    }
    return inboundState;
  },
  // Transform out: Runs before state is persisted (optional)
  (outboundState) => outboundState,
  { whitelist: ["user"] }
);
// Configure persist for user slice
const persistConfig = {
  key: "root", // key for storage
  storage, // storage engine (localStorage)
  whitelist: ["user"], // only persist user slice
  transforms: [clearInvalidTokenTransform],
};
// Create persisted reducer
const persistedUserReducer = persistReducer(persistConfig, userReducer);
export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
  },
});

// Create persistor
export const persistor = persistStore(store);
