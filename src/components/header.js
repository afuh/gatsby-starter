import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Content = styled.header`
  background: ${({ theme }) => theme.background};
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 20px;
`

const Header = ({ siteTitle }) => (
  <Content >
    <h1 style={{ margin: 0 }}>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </Content>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired
}

export default Header
