import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import SEO from '../utils/seo'

const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={({ site: { meta } }) => (
      <>
      <SEO />
        <Header siteTitle={meta.title} />
        <main>
          {children}
        </main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired
}

export default Layout

const query = graphql`
  {
    site {
      meta: siteMetadata {
        title
      }
    }
  }
`
