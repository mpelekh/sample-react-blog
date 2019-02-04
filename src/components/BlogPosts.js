import React from 'react'
import BlogPost from './BlogPost'

export default function BlogPosts({ posts }) {
  return (
    posts &&
    posts.map(({ id, title, content: description, date, author }) => (
      <BlogPost
        key={id}
        postId={id}
        title={title}
        description={description}
        date={date}
        author={author}
      />
    ))
  )
}
