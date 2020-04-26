import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Divider from '../components/divider';
import Image from '../components/image';
import Slider from '../components/slider';

import aboutStyles from './about.styles/about.module.scss'
import coreStyles from './about.styles/core-styles.scss'

const About = () => {
	const data = useStaticQuery(graphql`
		query {
			file(name: {eq: "ibhu-logo-black"}) {
				name
				publicURL
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
			allFile(filter: {relativeDirectory: {eq: "quotes"}}) {
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
		<Layout>
			<SEO title='About page' />
			<div>
				<div>
					<Divider />
					<div className={aboutStyles.imageCentre}>
						<Img
							fluid={data.file.childImageSharp.fluid}
							alt={data.file.name}
						/>
					</div>
					<Divider />
					<div className={aboutStyles.container}>
						<div>We dare to think <span>differently</span></div>
					</div>
				</div>
				<div className={aboutStyles.quoteContainer}>
					<div className={aboutStyles.quoteContent}>
						<Slider
							cssModule={coreStyles}
							images={data.allFile}
							play={true}
							bullets={false}
							organicArrows={true}
							infinite={true}
							buttons={false}
							fillParent={false}
						/>
					</div>
				</div>
				<div>
					The Ibhu brand was founded in the spirit of creativity and innovation, 
					it is the energy behind all of our Africa-centric products. Creativity 
					is at the core of Ibhu, from idea generation to product innovation.
				</div>
				<Divider />
				<div>
					<div>The creative process</div>
					<div className={aboutStyles.creativityContainer}>
						<div>
							<Image filename='knowledge' />
						</div>
						<div>
							<Image filename='connections' />
						</div>
						<div>
							<Image filename='experience' />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default About
