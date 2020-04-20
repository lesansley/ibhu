/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import layoutStyles from "./layout.module.scss"

const Layout = ({ children, banner }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
					title
        }
      }
    }
  `)

  return (
		<>
			<div className={layoutStyles.container}>
				<Header siteTitle={data.site.siteMetadata.title} />
				<div className={layoutStyles.banner}>{banner}</div>
				<div className={layoutStyles.content}>
					<main>{children}</main>
				</div>
				<Footer />
			</div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
