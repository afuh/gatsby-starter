import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link, StaticQuery, graphql } from 'gatsby'

import { theme } from '../utils/style'

const Content = styled.header`
  background: ${({ theme }) => theme.background};
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 20px;
`

const Header = ({ siteTitle }) => (
  <StaticQuery
    query={query}
    render={({ site: { meta: { nav } } }) => (
      <Content>
        <h1>{siteTitle}</h1>
        {nav.map(item => (
          <Link
            activeStyle={{ color: theme.active }}
            style={{ marginRight: 10 }}
            key={item.name}
            to={item.path}
          >
            {item.name}
          </Link>
        ))}
      </Content>
    )}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired
}

export default Header

const query = graphql`
  {
    site {
      meta: siteMetadata {
        nav {
          name
          path
        }
      }
    }
  }
`
