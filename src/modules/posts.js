import axios from 'axios'

const GET_POSTS_LOADING = 'GET_POSTS_LOADING'
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
const GET_POSTS_ERROR = 'GET_POSTS_ERROR'

const initialState = {
  isLoading: false,
  isLoaded: false,
  error: null,
  items: null
}

export const getAllPosts = () => dispatch => {
  dispatch({ type: GET_POSTS_LOADING })

  axios
    .get('https://ui-course-server.now.sh/vyuskiv/posts')
    .then(result => {
      dispatch({ type: GET_POSTS_SUCCESS, payload: result.data })
    })
    .catch(error => {
      dispatch({ type: GET_POSTS_ERROR, payload: error })
    })
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_LOADING: {
      return {
        ...state,
        error: null,
        isLoading: true,
        isLoaded: false
      }
    }

    case GET_POSTS_ERROR: {
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        error: action.payload
      }
    }

    case GET_POSTS_SUCCESS: {
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
