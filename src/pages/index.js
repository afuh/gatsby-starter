import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Home = ({ location }) => (
  <Layout location={location}>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/about">Go to About</Link>
  </Layout>
)

Home.propTypes = {
  location: PropTypes.object.isRequired
}

export default Home
