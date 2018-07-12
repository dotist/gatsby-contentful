import React from 'react'
import Link from 'gatsby-link'

const PostListing = ({ post }) => (
  <article>
    <h4>
      <Link to={post.slug}>{post.title}</Link>
    </h4>
    <h5>{post.createdAt}</h5>
    <p>{post.body.childMarkdownRemark.excerpt}</p>
  </article>
)
export default PostListing
