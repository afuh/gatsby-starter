const siteConfig = require('./siteConfig')

module.exports = {
  siteMetadata: {
    ...siteConfig
  },
  plugins: [
    'gatsby-plugin-react-helmet'
  ]
}
