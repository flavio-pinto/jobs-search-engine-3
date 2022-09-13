export const GET_JOBS = 'GET_JOBS';

const initialState = {
  jobs: []
}

const jobsReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobs: action.payload
      }
    default:
      return state
  }
}

export default jobsReducer;