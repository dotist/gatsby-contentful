const path = require('path')

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulBlogPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
        createPage({
          path: node.slug,
          component: path.resolve('./src/components/PostPage.js'),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })
}
