import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import postsReducer, {
  getAllPosts,
  INITIAL_STATE,
  GET_POSTS_LOADING,
  GET_POSTS_SUCCESS
} from './posts'

let mockStore = null

describe('Posts module', () => {
  beforeEach(() => {
    mockStore = configureMockStore([thunk])(INITIAL_STATE)
  })

  it('should properly update state on a successful getAllPosts call', async () => {
    const expectedActions = [
      { type: GET_POSTS_LOADING },
      { type: GET_POSTS_SUCCESS, payload: [{ id: 1, name: 'test name' }] }
    ]

    await mockStore.dispatch(getAllPosts())

    expect(mockStore.getActions()).toEqual(expectedActions)
  })
})
