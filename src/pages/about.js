import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Divider from '../components/divider';

import aboutStyles from './about.module.scss'

const About = () => {
	const logo = useStaticQuery(graphql`
		query {
			file(name: {eq: "ibhu-logo-black"}) {
				name
				publicURL
			}
		}
	`)

	return (
		<Layout>
			<SEO title='About page' />
			<div>
				<div>
					<Divider />
					<div className={aboutStyles.imageCentre}>
						<img src={logo.file.publicURL} alt={logo.file.name} />
					</div>
					<Divider />
					<div className={aboutStyles.container}>
						<div>We dare to think <span>differently</span></div>
					</div>
				</div>
				<div className={aboutStyles.quoteContainer}>
					<div>Quotes</div>
				</div>
				<div>
					The Ibhu brand was founded in the spirit of creativity and innovation, 
					it is the energy behind all of our Africa-centric products. Creativity 
					is at the core of Ibhu, from idea generation to product innovation.
				</div>
				<Divider />
				<div>
					<div>The creative process</div>
				</div>

			</div>
		</Layout>
	)
}

export default About
