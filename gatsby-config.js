module.exports = {
  siteMetadata: {
    title: 'Dyssembler',
    desc: 'DYSS.NET',
    keywords: 'Dancemusic, Underground radio, House, Berlin Community Radio',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '6s41busehey4',
        accessToken:
          '65a1f07b332363ea024d6555888e94e92381ed2c40e4414ae4b11ba56b23930a',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/static/assets`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
  ],
}

// pathPrefix: "/ibt-gatsby",
