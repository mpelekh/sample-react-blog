import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllPosts } from '../modules/posts'
import { getAllComments } from '../modules/comments'
import BlogPostDetails from '../components/BlogPostDetails'

class BlogPostDetailsContainer extends Component {
  static propTypes = {
    match: PropTypes.object,
    posts: PropTypes.object,
    getAllPosts: PropTypes.func
  }

  static defaultPropTypes = {
    posts: {}
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
        {posts.isLoading && <div>Loading</div>}
        {!posts.isLoading && posts.isLoaded && !post && (
          <div>No post with such id: {postId}</div>
        )}
        {post && <BlogPostDetails post={post} comments={postComments} />}
      </>
    )
  }
}

const mapStateToProps = ({ posts, comments }) => ({
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
