import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import MarkdownSection from './MarkdownSection'

export default () => (
  <StaticQuery
    query={query}
    render={({ md }) => <MarkdownSection md={md} />}
  />
)

const query = graphql`
  {
    md: markdownRemark(fileAbsolutePath: { regex: "/landing/" }) {
      ...MarkdownFragment
    }
  }
`
