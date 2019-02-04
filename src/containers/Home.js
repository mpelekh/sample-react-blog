import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllPosts } from '../modules/posts'
import BlogPosts from '../components/BlogPosts'

class Home extends Component {
  static propTypes = {
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
      posts: { isLoading, error, items: posts }
    } = this.props

    return (
      <div className="col-md-8">
        <h1 className="my-4">
          Page Heading <small>Secondary Text</small>
        </h1>

        {isLoading ? <div>Loading...</div> : <BlogPosts posts={posts} />}

        <ul className="pagination justify-description-center mb-4">
          <li className="page-item">
            <a className="page-link" href="#">
              &larr; Older
            </a>
          </li>
          <li className="page-item disabled">
            <a className="page-link" href="#">
              Newer &rarr;
            </a>
          </li>
        </ul>
      </div>
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
)(Home)
