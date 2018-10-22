import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

const Content = styled.footer`
  background: ${({ theme }) => theme.background};
  box-shadow: ${({ theme }) => theme.shadow};
  display: flex;
  justify-content: center;
  align-items: center;
`

const findIcon = name => {
  const Component = require("react-icons/fa")['Fa' + name]
  return <Component />
}

const Icon = styled.a`
  border: none;
  padding: 10px;
  margin: 10px;
  font-size: 22px;
  opacity: 0.6;
`

export default () => (
  <StaticQuery
    query={query}
    render={({ site: { meta: { social } } }) => (
      <Content>
        {social.map(item => (
          <Icon key={item.icon} href={item.url}>{findIcon(item.icon)}</Icon>
        ))}
      </Content>
    )}
  />
)

const query = graphql`
  {
    site {
      meta: siteMetadata {
        social {
          url
          icon
        }
      }
    }
  }
`
