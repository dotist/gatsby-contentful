import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Listing = styled.article`
  margin-bottom: 25px;
  border-bottom: 1px dotted black;
  &:last-child {
    border-bottom: 0px;
  }
  a,
  a:link,
  a:visited {
    color: saddlebrown;
    text-decoration: none;
    transition: all 200ms ease-out;
    border-bottom: 2px solid transparent;
  }
  a:hover {
    border-bottom: 2px solid green;
  }
`

const PostListing = ({ post }) => (
  <Listing>
    <h4>
      <Link to={post.slug}>{post.title}</Link>
    </h4>
    <h5>{post.createdAt}</h5>
    <p>{post.body.childMarkdownRemark.excerpt}</p>
  </Listing>
)
export default PostListing
