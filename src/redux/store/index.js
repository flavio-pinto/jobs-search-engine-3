import { combineReducers, configureStore } from '@reduxjs/toolkit';
import favsReducer from '../reducers/favsReducer';
import jobsReducer from '../reducers/jobsReducer';

const generalReducer = combineReducers({
  jobs: jobsReducer,
  favorites: favsReducer
})

const store = configureStore({
  reducer: generalReducer
})

export default store;