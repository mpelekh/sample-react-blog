import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class DetailedPost extends PureComponent {
  static propTypes = {
    post: PropTypes.object
  }

  static defaultPropTypes = {
    post: {}
  }

  render() {
    const { title, content, date, author } = this.props.post

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
        <div className="media mb-4">
          <img
            className="d-flex mr-3 rounded-circle"
            src="http://placehold.it/50x50"
            alt=""
          />
          <div className="media-body">
            <h5 className="mt-0">Commenter Name</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
        </div>
      </div>
    )
  }
}

export default DetailedPost
