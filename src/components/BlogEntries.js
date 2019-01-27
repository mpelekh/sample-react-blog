import React, { Component } from 'react'
import BlogPost from './BlogPost'

class BlogEntries extends Component {
  render() {
    return (
      <div className="col-md-8">
        <h1 className="my-4">
          Page Heading <small>Secondary Text</small>
        </h1>

        <BlogPost
          title="Post Title"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a
            laboriosam. Dicta expedita corporis animi vero voluptate
            voluptatibus possimus, veniam magni quis!"
          date="January 1, 2017"
          author="Mykola Pelekh"
        />

        <BlogPost
          title="Post Title"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a
            laboriosam. Dicta expedita corporis animi vero voluptate
            voluptatibus possimus, veniam magni quis!"
          date="January 1, 2017"
          author="Mykola Pelekh"
        />

        <BlogPost
          title="Post Title"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a
            laboriosam. Dicta expedita corporis animi vero voluptate
            voluptatibus possimus, veniam magni quis!"
          date="January 1, 2017"
          author="Mykola Pelekh"
        />

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

export default BlogEntries
