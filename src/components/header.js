import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

import logo from '../images/logo.svg'

const HeaderWrapper = styled.div`
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: ${({ isHome }) => (isHome ? '30vh' : '10vh')};
  h3 {
    text-align: center;
    position: absolute;
    bottom: 0;
    z-index: 1;
    max-width: 960px;
    margin: 0 auto;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-weight: lighter;
    letter-spacing: 2px;
    padding: 5px;
    font-size: 15px;
  }
`

/* justify-content: space-between; */
const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 1;
  > * {
    float: left;
  }
  > a img {
    height: 50px;
    padding: 0 20px 0 0;
  }
  a {
    &:link,
    &:visited {
      color: #001611;
      text-decoration: none;
    }
  }
`

const MainNav = styled.div`
  float: right;
  ul {
    list-style: none;
    display: flex;
    li {
      margin-left: 10px;
      font-family: sans-serif;
      padding: 0 0 0 10px;
      a {
        color: white !important;
        text-decoration: none;
        &:hover {
          border-bottom: 3px solid red;
        }
      }
    }
  }
`

export default class Header extends Component {
  /* Header animation */
  componentDidUpdate = (prevProps, prevState) => {
    const { location } = this.props
    if (location.pathname != prevProps.location.pathname) {
      if (this.props.location.pathname == '/') {
        this.wrapper.animate([{ height: '10vh' }, { height: '30vh' }], {
          duration: 300,
          fill: 'forwards',
          easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
          iterations: 1,
        })
      } else {
        this.wrapper.animate([{ height: '30vh' }, { height: '10vh' }], {
          duration: 300,
          fill: 'forwards',
          easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
          iterations: 1,
        })
      }
    }
  }

  render() {
    const { data, location } = this.props
    return (
      <HeaderWrapper
        isHome={this.props.location.pathname == '/'}
        ref={wrapper => (this.wrapper = ReactDOM.findDOMNode(wrapper))}
      >
        <HeaderContent>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            <img src={logo} alt="IBT logo test" />
          </Link>
          <h1 style={{ margin: 0 }}>
            <Link to="/">{this.props.siteTitle}</Link>
          </h1>
          <MainNav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </MainNav>
        </HeaderContent>
        <Img
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
          }}
          sizes={this.props.siteImageSizes}
        />
        <h3>{this.props.siteMeta}</h3>
      </HeaderWrapper>
    )
  }
}
