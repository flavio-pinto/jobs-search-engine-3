import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { encryptTransform } from "redux-persist-transform-encrypt";
import favsReducer from "../reducers/favsReducer";
import jobsReducer from "../reducers/jobsReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";



const persistConfig = {
  key: "root", // il livello da cui vogliamo cominciare a far persistere i dati
  storage, // come dire --> storage: storage, seleziona lo storage engine da utilizzare
  transforms: [
    // elenco delle trasformazioni (plugin) applicabili a redux-persist
    encryptTransform({
      secretKey: process.env.REACT_APP_PERSIST_KEY,
    }),
  ],
};

const generalReducer = combineReducers({
  jobs: jobsReducer,
  favorites: favsReducer,
});

const persistedReducer = persistReducer(persistConfig, generalReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // <-- lo spegne
    })
});

export const persistor = persistStore(store);
