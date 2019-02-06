import React from 'react'
import { shallow } from 'enzyme'
import {
  BlogPostDetailsContainer,
  mapStateToProps
} from './BlogPostDetailsContainer'

describe('BlogPostDetails Container', () => {
  it('should be crashed without passed props', () => {
    expect(() => shallow(<BlogPostDetailsContainer />)).toThrowError(TypeError)
  })

  it('should be rendered with loader', () => {
    const { enzymeWrapper } = setup({
      posts: { isLoading: true }
    })

    expect(enzymeWrapper.find('.loader').length).toBe(1)
    expect(enzymeWrapper.find('.no-post').length).toBe(0)
    expect(enzymeWrapper.find('BlogPostDetails').length).toBe(0)
  })

  it('should be rendered with no post message', () => {
    const { enzymeWrapper } = setup({
      posts: { isLoading: false, isLoaded: true }
    })

    expect(enzymeWrapper.find('.no-post').length).toBe(1)
    expect(enzymeWrapper.find('.no-post').text()).toBe(
      'No post with such id: 111'
    )
    expect(enzymeWrapper.find('.loader').length).toBe(0)
    expect(enzymeWrapper.find('BlogPostDetails').length).toBe(0)
  })

  it('should be rendered with BlogPostDetails', () => {
    const { enzymeWrapper } = setup({
      posts: { isLoading: false, isLoaded: true, items: [{ id: 111 }] },
      comments: { isLoading: false, isLoaded: true, items: [{ postId: 111 }] }
    })

    expect(enzymeWrapper.find('.no-post').length).toBe(0)
    expect(enzymeWrapper.find('.loader').length).toBe(0)
    expect(enzymeWrapper.find('BlogPostDetails').length).toBe(1)
    expect(enzymeWrapper.find('BlogPostDetails').props()).toEqual({
      post: { id: 111 },
      comments: [{ postId: 111 }]
    })
  })

  it('should call getAllPosts() if not loaded', () => {
    const { props } = setup({
      posts: { isLoading: false, isLoaded: false }
    })

    expect(props.getAllPosts).toBeCalledTimes(1)
  })

  it('should not call getAllPosts() if already loaded', () => {
    const { props } = setup({
      posts: { isLoading: false, isLoaded: true }
    })

    expect(props.getAllPosts).toBeCalledTimes(0)
  })

  it('should call getAllComments() if not loaded', () => {
    const { props } = setup({
      comments: { isLoading: false, isLoaded: false }
    })

    expect(props.getAllComments).toBeCalledTimes(1)
  })

  it('should not call getAllComments() if already loaded', () => {
    const { props } = setup({
      comments: { isLoading: false, isLoaded: true }
    })

    expect(props.getAllComments).toBeCalledTimes(0)
  })

  describe('redux connect', () => {
    describe('mapStateToProps()', () => {
      it('should return posts and comments from state', () => {
        const state = { posts: {}, comments: {}, users: {} }

        expect(mapStateToProps(state)).toEqual({ posts: {}, comments: {} })
      })
    })
  })
})

function setup(additionalProps = {}) {
  const props = {
    match: { params: { id: 111 } },
    getAllPosts: jest.fn(),
    getAllComments: jest.fn()
  }

  const enzymeWrapper = shallow(
    <BlogPostDetailsContainer {...props} {...additionalProps} />
  )

  return {
    props: { ...props, ...additionalProps },
    enzymeWrapper
  }
}
