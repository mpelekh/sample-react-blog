import axios from 'axios'

const GET_COMMENTS_LOADING = 'GET_COMMENTS_LOADING'
const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS'
const GET_COMMENTS_ERROR = 'GET_COMMENTS_ERROR'

const initialState = {
  isLoading: false,
  isLoaded: false,
  error: null,
  items: null
}

export const getAllComments = () => dispatch => {
  dispatch({ type: GET_COMMENTS_LOADING })

  axios
    .get(`https://jsonplaceholder.typicode.com/comments`)
    .then(result => {
      dispatch({ type: GET_COMMENTS_SUCCESS, payload: result.data })
    })
    .catch(error => {
      dispatch({ type: GET_COMMENTS_ERROR, payload: error })
    })
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS_LOADING: {
      return {
        ...state,
        error: null,
        isLoading: true,
        isLoaded: false
      }
    }

    case GET_COMMENTS_ERROR: {
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        error: action.payload
      }
    }

    case GET_COMMENTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        error: null,
        items: action.payload
      }
    }

    default:
      return state
  }
}
