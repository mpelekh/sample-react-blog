import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllPosts } from '../modules/posts'
import { getAllComments } from '../modules/comments'
import BlogPostDetails from '../components/BlogPostDetails'

export class BlogPostDetailsContainer extends Component {
  static propTypes = {
    match: PropTypes.object,
    posts: PropTypes.object,
    comments: PropTypes.object,
    getAllPosts: PropTypes.func,
    getAllComments: PropTypes.func
  }

  static defaultProps = {
    posts: {},
    comments: {}
  }

  componentDidMount() {
    const { posts, comments, getAllPosts, getAllComments } = this.props

    if (!posts.isLoading && !posts.isLoaded) {
      getAllPosts()
    }

    if (!comments.isLoading && !comments.isLoaded) {
      getAllComments()
    }
  }

  render() {
    const {
      match: {
        params: { id: postId }
      },
      posts,
      comments
    } = this.props

    const post =
      posts.items && posts.items.find(post => post.id === Number(postId))
    const postComments =
      comments.items &&
      comments.items.filter(({ postId }) => post && post.id === postId)

    return (
      <>
        {posts.isLoading && <div className="loader">Loading</div>}
        {!posts.isLoading && posts.isLoaded && !post && (
          <div className="no-post">No post with such id: {postId}</div>
        )}
        {post && <BlogPostDetails post={post} comments={postComments} />}
      </>
    )
  }
}

export const mapStateToProps = ({ posts, comments }) => ({
  posts,
  comments
})

export default connect(
  mapStateToProps,
  {
    getAllPosts,
    getAllComments
  }
)(BlogPostDetailsContainer)
