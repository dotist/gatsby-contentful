import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from '../components/header'
import './index.css'

const MainContent = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

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
    <MainContent>{children()}</MainContent>
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
