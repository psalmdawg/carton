import{
    FETCH_DELIVERIES,
    DELETE_DELIVERIES,
    EDIT_DELIVERIES
} from '../actions';

const initialState = {

  };


export default (state = initialState, action) => {

    switch(action.type) {
        case FETCH_DELIVERIES:

          return {
            ...state.deliveries, ...action.payload.data
          };

          return {
            ...state.deliveries, ...action.payload.data
          }
        case DELETE_DELIVERIES:
          const adjustedDeliveries = state
          delete adjustedDeliveries[action.payload]
          return { 
            ...state, ...adjustedDeliveries 
          };
        case EDIT_DELIVERIES:
         return { 
            ...state, ...adjustedDeliveries 
          };
      default:
        return state;
    }
  }