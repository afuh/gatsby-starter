const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode, basePath: `pages` })

    createNodeField({
      node,
      name: "slug",
      value
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const component = path.resolve('src/templates/page.js')

    resolve(
      graphql(
        `
        {
          projects: allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }
      `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        result.data.projects.edges.forEach(edge => {
          if (edge.node.fields.slug.match(/content/)) return

          createPage({
            path: edge.node.fields.slug,
            component,
            context: {
              slug: edge.node.fields.slug
            }
          })
        })
      })
    )
  })
}
