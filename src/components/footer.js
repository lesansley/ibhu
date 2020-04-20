import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import footerStyles from './footer.module.scss'

const Footer = () => {
	const data = useStaticQuery(graphql`
    query SiteAuthorQuery {
      site {
        siteMetadata {
					author,
					email
        }
      }
    }
	`)
	
	return (
		<footer className={footerStyles.container}>
			<div className={footerStyles.content}>
				Built by {data.site.siteMetadata.author} ({data.site.siteMetadata.email}) © {new Date().getFullYear()}
			</div>
		</footer>
	)
}

export default Footer
