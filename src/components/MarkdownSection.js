import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'

const MarkdownSection = ({ md }) => (
  <div style={{
    margin: '40px 0',
    borderTop: '1px solid lightgray',
    borderBottom: '1px solid lightgray'
  }}>
    <h2 dangerouslySetInnerHTML={{ __html: md.frontmatter.title }}/>
    {md.frontmatter.image &&
      <Image
        style={{ width: 300, height: 300 }}
        fixed={md.frontmatter.image.childImageSharp.fixed}
        alt={md.frontmatter.title}
      />
    }
    <div dangerouslySetInnerHTML={{ __html: md.html }} />
  </div>
)

MarkdownSection.propTypes = {
  md: PropTypes.shape({
    html: PropTypes.string.isRequired,
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.object
    })
  })
}

export default MarkdownSection
