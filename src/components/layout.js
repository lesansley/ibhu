import React from 'react';
import PropTypes from 'prop-types';
import { FormspreeProvider } from '@formspree/react';
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
		<FormspreeProvider project="{your-project-id}">
			<div className={layoutStyles.page}>
				<Header siteTitle={data.site.siteMetadata.title} />
				<div className={layoutStyles.container}>
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
			</div>
    </FormspreeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
