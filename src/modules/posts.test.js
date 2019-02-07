import axios from 'axios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import postsReducer, {
  getAllPosts,
  INITIAL_STATE,
  GET_POSTS_LOADING,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR
} from './posts'

let mockStore = null

describe('Posts module', () => {
  describe('Action Creators', () => {
    beforeEach(() => {
      mockStore = configureMockStore([thunk])(INITIAL_STATE)
    })

    it('should perform successfully actions on getAllPosts call', async () => {
      const expectedActions = [
        { type: GET_POSTS_LOADING },
        { type: GET_POSTS_SUCCESS, payload: [{ id: 1, name: 'test name' }] }
      ]

      await mockStore.dispatch(getAllPosts())

      expect(mockStore.getActions()).toEqual(expectedActions)
    })

    it('should perform error actions on getAllPosts call', async () => {
      const error = new Error('API Error')
      const expectedActions = [
        { type: GET_POSTS_LOADING },
        { type: GET_POSTS_ERROR, payload: error }
      ]

      // Reject error on calling mock API
      jest
        .spyOn(axios, 'get')
        .mockImplementationOnce(() => Promise.reject(error))

      await mockStore.dispatch(getAllPosts())

      expect(mockStore.getActions()).toEqual(expectedActions)
    })
  })

  describe('Posts Reducer', () => {
    it('should return the initial state', () => {
      expect(postsReducer(undefined, {})).toEqual(INITIAL_STATE)
    })

    it('should handle GET_POSTS_LOADING', () => {
      expect(
        postsReducer(INITIAL_STATE, {
          type: GET_POSTS_LOADING
        })
      ).toEqual({
        error: null,
        isLoading: true,
        isLoaded: false,
        items: null
      })
    })

    it('should handle GET_POSTS_SUCCESS', () => {
      expect(
        postsReducer(
          {
            error: null,
            isLoading: true,
            isLoaded: false,
            items: null
          },
          {
            type: GET_POSTS_SUCCESS,
            payload: [{ id: 1, name: 'test name' }]
          }
        )
      ).toEqual({
        error: null,
        isLoading: false,
        isLoaded: true,
        items: [{ id: 1, name: 'test name' }]
      })
    })

    it('should handle GET_POSTS_ERROR', () => {
      expect(
        postsReducer(
          {
            error: null,
            isLoading: true,
            isLoaded: false,
            items: null
          },
          {
            type: GET_POSTS_ERROR,
            payload: new Error('mock error')
          }
        )
      ).toEqual({
        error: new Error('mock error'),
        isLoading: false,
        isLoaded: true,
        items: null
      })
    })
  })
})
