import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import BlogPost from './BlogPost'

class BlogEntries extends Component {
  static propTypes = {
    posts: PropTypes.array
  }

  static defaultPropTypes = {
    posts: []
  }

  render() {
    const { posts } = this.props

    return (
      <div className="col-md-8">
        <h1 className="my-4">
          Page Heading <small>Secondary Text</small>
        </h1>

        {posts.map(({ id, title, body: description, date, author }) => (
          <BlogPost
            key={id}
            title={title}
            description={description}
            date={date}
            author={author}
          />
        ))}

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

export default connect(mapStateToProps)(BlogEntries)