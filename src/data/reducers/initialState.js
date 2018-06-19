import * as actionTypes from '../actions/actionTypes'

const initialState = {
  submittedRecipe: {
    isLoading: false,
    error: null,
    data: null
  }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SUBMIT_RECIPE_LOADING: {
      return {
        ...state,
        submittedRecipe: {
          ...state.submittedRecipe,
          isLoading: true
        }
      }
    }
    case actionTypes.SUBMIT_RECIPE_SUCCESS: {
      return {
        ...state,
        submittedRecipe: {
          ...state.submittedRecipe,
          isLoading: false,
          data: action.data
        }
      }
    }
    case actionTypes.SUBMIT_RECIPE_ERROR: {
      return {
        ...state,
        submittedRecipe: {
          ...state.submittedRecipe,
          isLoading: false,
          error: action.error
        }
      }
    }
    default:
      return state;
  }
};

export default rootReducer;
