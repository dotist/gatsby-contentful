import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'

const Layout = ({ children, data, location }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.desc },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
    />
    <Header
      location={location}
      siteTitle={data.site.siteMetadata.title}
      siteMeta={data.site.siteMetadata.desc}
      siteImageSizes={data.background.sizes}
    />
    <div
      style={{
        backgroundColor: '#cccccc',
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteMetaHeader {
    site {
      siteMetadata {
        title
        desc
        keywords
      }
    }
    background: imageSharp(id: { regex: "/header-bg.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
