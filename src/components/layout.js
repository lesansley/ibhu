import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';
import Slider from './slider'
import Divider from './divider';
import layoutStyles from './layout.module.scss';

const Layout = ({ children, banner = false }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
					title
        }
			}
			allFile(filter: {relativeDirectory: {eq: "carousel"}}) {
				edges {
					node {
						publicURL
						relativePath
						name
						childImageSharp {
							fluid {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
    }
	`)

  return (
		<React.Fragment>
			<div className={layoutStyles.container}>
				<Header siteTitle={data.site.siteMetadata.title} />
				{banner &&
					<Slider
						images={data.allFile}
						bullets={false}
					/>
				} 
				<div className={layoutStyles.content}>
					<Divider />
					<main>{children}</main>
					<div className={layoutStyles.bottom}>
						<Divider/>
					</div>
				</div>
				<Footer />
			</div>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
