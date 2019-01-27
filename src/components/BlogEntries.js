import React, { Component } from 'react'

class BlogEntries extends Component {
  render() {
    return (
      <div className="col-md-8">
        <h1 className="my-4">
          Page Heading <small>Secondary Text</small>
        </h1>

        <div className="card mb-4">
          {/* <img className="card-img-top" src="http://placehold.it/750x300" alt="Card image cap"> */}
          <div className="card-body">
            <h2 className="card-title">Post Title</h2>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a
              laboriosam. Dicta expedita corporis animi vero voluptate
              voluptatibus possimus, veniam magni quis!
            </p>
            <a href="#" className="btn btn-primary">
              Read More &rarr;
            </a>
          </div>
          <div className="card-footer text-muted">
            Posted on January 1, 2017 by
            <a href="#">Start Bootstrap</a>
          </div>
        </div>

        <div className="card mb-4">
          {/* <img className="card-img-top" src="http://placehold.it/750x300" alt="Card image cap"> */}
          <div className="card-body">
            <h2 className="card-title">Post Title</h2>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a
              laboriosam. Dicta expedita corporis animi vero voluptate
              voluptatibus possimus, veniam magni quis!
            </p>
            <a href="#" className="btn btn-primary">
              Read More &rarr;
            </a>
          </div>
          <div className="card-footer text-muted">
            Posted on January 1, 2017 by
            <a href="#">Start Bootstrap</a>
          </div>
        </div>

        <div className="card mb-4">
          {/* <img className="card-img-top" src="http://placehold.it/750x300" alt="Card image cap"> */}
          <div className="card-body">
            <h2 className="card-title">Post Title</h2>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a
              laboriosam. Dicta expedita corporis animi vero voluptate
              voluptatibus possimus, veniam magni quis!
            </p>
            <a href="#" className="btn btn-primary">
              Read More &rarr;
            </a>
          </div>
          <div className="card-footer text-muted">
            Posted on January 1, 2017 by
            <a href="#">Start Bootstrap</a>
          </div>
        </div>

        <ul className="pagination justify-content-center mb-4">
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

export default BlogEntries
