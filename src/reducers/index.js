import { combineReducers } from 'redux';
import DeliveryReducer from './deliveriesReducer';
import DriverReducer from './driversReducer';

export default combineReducers({
  deliveries: DeliveryReducer,
  drivers:DriverReducer
});
