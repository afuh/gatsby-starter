import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'

const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={({ site: { meta } }) => (
      <>
        <Header siteTitle={meta.title} />
        <main>
          {children}
        </main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
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
