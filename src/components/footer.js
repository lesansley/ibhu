import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import footerStyles from './footer.module.scss'

const Footer = () => {
	const data = useStaticQuery(graphql`
    query SiteAuthorQuery {
      site {
        siteMetadata {
					name
        }
      }
    }
	`)
	
	return (
		<footer className={footerStyles.container}>
			<div className={footerStyles.content}>
				{data.site.siteMetadata.name} © {new Date().getFullYear()}
			</div>
		</footer>
	)
}

export default Footer
