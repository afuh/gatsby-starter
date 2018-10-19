import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

IndexPage.propTypes = {
  location: PropTypes.object.isRequired
}

export default IndexPage
