import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class BlogPost extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    author: PropTypes.string
  }

  render() {
    const { title, description, date, author } = this.props

    return (
      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">
            Read More &rarr;
          </a>
        </div>
        <div className="card-footer text-muted">
          Posted on {date} by {author}
        </div>
      </div>
    )
  }
}

export default BlogPost
