import{
    FETCH_DRIVERS
} from '../actions';

const initialState = {
    drivers:{}
  };


  export default function deliveriesReducer(state = initialState, action) {

    switch(action.type) {
        case FETCH_DRIVERS:
        // console.log('drivers reducer', action.payload.data)
          return {
            ...state.drivers, ...action.payload.data
          }
      default:
        return state;
    }
  }