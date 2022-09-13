import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../actions";

const initialState = {
  list: []
};

const favsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        list: [...state.list, action.payload]
        
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
          list: state.list.filter((el) => el._id !== action.payload)
      };
    default:
      return state;
  }
};

export default favsReducer;
