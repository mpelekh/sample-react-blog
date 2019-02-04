import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllPosts } from '../modules/posts'
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
    const {
      posts: { isLoading, isLoaded },
      getAllPosts
    } = this.props

    if (!isLoading && !isLoaded) {
      getAllPosts()
    }
  }

  render() {
    const {
      match: {
        params: { id: postId }
      },
      posts
    } = this.props

    const post =
      posts.items && posts.items.find(post => post.id === Number(postId))

    return (
      <>
        {posts.isLoading && <div>Loading</div>}
        {!posts.isLoading && posts.isLoaded && !post && (
          <div>No post with such id: {postId}</div>
        )}
        {post && <BlogPostDetails post={post} />}
      </>
    )
  }
}

const mapStateToProps = ({ posts }) => ({
  posts
})

export default connect(
  mapStateToProps,
  {
    getAllPosts
  }
)(BlogPostDetailsContainer)
