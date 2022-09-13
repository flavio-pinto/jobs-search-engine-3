export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const GET_JOBS = 'GET_JOBS';
export const GET_JOBS_ERROR = 'GET_BOOKS_ERROR'
export const GET_JOBS_LOADING = 'GET_BOOKS_LOADING'
export const GET_COMPANY_JOBS = 'GET_COMPANY_JOBS';
export const QUERY_UPDATE = 'QUERY_UPDATE';


export const removeFromFavoritesAction = (id) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: id,
  };
};

export const addToFavoritesAction = (data) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: data,
  };
}



export const getCompanyJobsAction = async(params) => {
  try {
    const response = await fetch('https://strive-jobs-api.herokuapp.com/jobs?company=' + params.companyName)
    if (response.ok) {
      const data = await response.json()
      dispatchEvent({
        type: GET_COMPANY_JOBS,
        payload: data
      })
    } else {
      alert('Error fetching results')
    }
  } catch (error) {
    console.log(error)
  }
}

export const getJobsAction = () => {
  const baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?search='

  return async(dispatch, getState) => {
    try {
      dispatch({
        type: GET_JOBS_LOADING
      })
      const response = await fetch(baseEndpoint + getState().jobs.query + '&limit=20')
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_JOBS,
          payload: data
        })
        setTimeout(() => {
          dispatch({
            type: GET_JOBS_LOADING,
          })
        }, 500)
      } else {
        alert('Error fetching results')
        dispatch({
          type: GET_JOBS_ERROR,
        })
        dispatch({
          type: GET_JOBS_LOADING,
        })
      }
    } catch (error) {
      console.log(error)
      dispatch({
        type: GET_JOBS_ERROR,
      })
      dispatch({
        type: GET_JOBS_LOADING,
      })
    }
  }
  
}