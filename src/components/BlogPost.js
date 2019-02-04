import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class BlogPost extends PureComponent {
  static propTypes = {
    postId: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    author: PropTypes.string
  }

  render() {
    const { title, description, date, author, postId } = this.props

    return (
      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="card-text">{description}</p>
          <Link to={`/posts/${postId}`} className="btn btn-primary">
            Read More &rarr;
          </Link>
        </div>
        <div className="card-footer text-muted">
          Posted on {date} by {author}
        </div>
      </div>
    )
  }
}

export default BlogPost
