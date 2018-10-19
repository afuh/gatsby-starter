import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import Header from './header'
import SEO from '../utils/seo'

import { defaultFont, normalize, typography, theme } from '../utils/style'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${typography}

  body {
    font-family: ${defaultFont};
  }
`

const Main = styled.main`
  margin: 50px;
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
