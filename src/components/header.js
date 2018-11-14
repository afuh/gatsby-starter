import React from 'react'
import styled from 'styled-components'
import { Link, StaticQuery, graphql } from 'gatsby'

import { theme } from '../utils/style'

const Content = styled.header`
  background: ${({ theme }) => theme.white};
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 20px;
`

export default () => (
  <StaticQuery
    query={query}
    render={({ site: { meta: { nav } } }) => (
      <Content>
        {nav.map(item => (
          <Link
            activeStyle={{ color: theme.deeporange }}
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
