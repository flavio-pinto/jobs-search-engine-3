import {
  GET_JOBS,
  GET_COMPANY_JOBS,
  SET_COMPANY_NAME,
  QUERY_UPDATE,
  GET_JOBS_LOADING,
  GET_JOBS_ERROR,
} from "../actions";

const initialState = {
  content: [],
  companyName: "",
  companyJobs: [],
  query: "",
  loading: false,
  error: false,
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        content: action.payload,
      };
    case GET_COMPANY_JOBS:
      return {
        ...state,
        companyJobs: action.payload.data,
      };
    case SET_COMPANY_NAME:
      return {
        ...state,
        companyName: action.payload,
      };
    case QUERY_UPDATE:
      return {
        ...state,
        query: action.payload,
      };
    case GET_JOBS_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    case GET_JOBS_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default jobsReducer;
