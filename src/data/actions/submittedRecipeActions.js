import * as types from './actionTypes'

/*
TODO: add some typescript to this project


{
  type:
  isLoading:
  error:
  data:
}
*/
export function submitRecipeLoading() {
  return {
    type: types.SUBMIT_RECIPE_LOADING,
    isLoading: true
  };
}

export function submitRecipeFailure(err) {
  return {
    type: types.SUBMIT_RECIPE_ERROR,
    isLoading: false,
    error: err
  };
}

export function submitRecipeSuccess(data) {
  return {
    type: types.SUBMIT_RECIPE_SUCCESS,
    isLoading: false,
    data: data
  };
}

export const submitRecipe = (url, dispatch) => {
  return (dispatch) => {
    dispatch(submitRecipeLoading());

    return fetch("http://localhost:8000/ingested_recipes/", {
        method: 'POST',
        body: {
          'source_type': 'internet',
          'source': url
        }
      }).then((response) => {
        if (response.ok) {
          dispatch(submitRecipeSuccess(response.json()))
        } else {
          dispatch(submitRecipeFailure(response.json()))
        }
      })
      .catch((err) => {
        dispatch(submitRecipeFailure(err));
      });
    }
  }
