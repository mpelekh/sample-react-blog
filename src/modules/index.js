import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import postsReducer from './posts'
import commentsReducer from './comments'

export default history =>
  combineReducers({
    router: connectRouter(history),
    posts: postsReducer,
    comments: commentsReducer
  })
