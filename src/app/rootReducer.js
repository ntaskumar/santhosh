import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import countryReducer from '../features/countrySlice';

const rootReducer = combineReducers({
  auth: authReducer,
  countries: countryReducer,

});

export default rootReducer;
