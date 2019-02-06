import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class BlogPostDetails extends PureComponent {
  static propTypes = {
    post: PropTypes.object,
    comments: PropTypes.array
  }

  static defaultPropTypes = {
    post: {},
    comments: []
  }

  render() {
    const {
      post: { title, content, date, author },
      comments
    } = this.props

    return (
      <div className="col-lg-8">
        {/* Title */}
        <h1 className="mt-4">{title}</h1>

        {/* Author */}
        <p className="lead">by {author}</p>

        <hr />

        {/* Date/Time */}
        <p>Posted on January 1, 2018 at 12:00 PM</p>

        <hr />

        {/* Preview Image */}
        <img
          className="img-fluid rounded"
          src="http://placehold.it/900x300"
          alt=""
        />

        <hr />

        {/* Post Content */}
        <p>{content}</p>

        <hr />

        {/* Comments Form */}
        <div className="card my-4">
          <h5 className="card-header">Leave a Comment:</h5>
          <div className="card-body">
            <form>
              <div className="form-group">
                <textarea className="form-control" rows="3" />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Single Comment */}
        {comments &&
          comments.map(({ id, body, email, name }) => (
            <div className="media mb-4" key={id}>
              <img
                className="d-flex mr-3 rounded-circle"
                src="http://placehold.it/50x50"
                alt=""
              />
              <div className="media-body">
                <h5 className="mt-0">{email}</h5>
                {body}
              </div>
            </div>
          ))}
      </div>
    )
  }
}

export default BlogPostDetails
