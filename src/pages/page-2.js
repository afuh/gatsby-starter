import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = ({ location }) => (
  <Layout location={location}>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

SecondPage.propTypes = {
  location: PropTypes.object.isRequired
}

export default SecondPage
