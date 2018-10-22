import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'

import Header from './header'
import SEO from '../utils/seo'

import { theme, GlobalStyle } from '../utils/style'

const Main = styled.main`
  max-width: 900px;
  margin: 50px auto;
`
const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={({ site: { meta } }) => (
      <>
      <GlobalStyle />
      <SEO />
      <ThemeProvider theme={theme}>
        <>
          <Header siteTitle={meta.title} />
          <Main>
            {children}
          </Main>
        </>
      </ThemeProvider>
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
