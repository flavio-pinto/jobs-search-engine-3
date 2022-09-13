export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const GET_JOBS = 'GET_JOBS';

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
        type: GET_JOBS,
        payload: data
      })
    } else {
      alert('Error fetching results')
    }
  } catch (error) {
    console.log(error)
  }
}