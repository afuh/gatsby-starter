import React from 'react'
import PropTypes from 'prop-types'
import GatsbyImg from 'gatsby-image'

const Landing = ({ frontmatter, html }) => (
  <div style={{
    margin: '40px 0',
    borderTop: '1px solid lightgray',
    borderBottom: '1px solid lightgray'
  }}>
    <h2 dangerouslySetInnerHTML={{ __html: frontmatter.title }}/>
    {frontmatter.image &&
          <GatsbyImg
            style={{ width: 300, height: 300 }}
            fixed={frontmatter.image.childImageSharp.fixed}
            alt={frontmatter.title}
          />
    }
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </div>
)

Landing.propTypes = {
  frontmatter: PropTypes.object.isRequired,
  html: PropTypes.string.isRequired
}

export default Landing
