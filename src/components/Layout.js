import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/main.scss';
import Footer from './Footer';
// import SideBar from './Sidebar';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreloaded: true,
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ isPreloaded: false });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children } = this.props;
    const { isPreloaded } = this.state;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet>
              <meta charSet="utf-8" />

              <link rel="preconnect" href="https://fonts.gstatic.com"></link>

              <link
                href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@200&display=swap"
                rel="stylesheet"
              />
              <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap"
                rel="stylesheet"
              ></link>
              <title>Jack Property Maintenance</title>
            </Helmet>
            <head>
              <script
                src="https://kit.fontawesome.com/7d3146b57e.js"
                crossorigin="anonymous"
              ></script>
            </head>
            <div
              className={
                isPreloaded
                  ? 'landing main-body is-preload'
                  : 'landing main-body'
              }
            >
              <div id="page-wrapper">
                {/* <SideBar fullMenu={fullMenu} /> */}
                {children}
                <Footer />
              </div>
            </div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
