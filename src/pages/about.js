import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Divider from '../components/divider';
import Slider from '../components/slider';

import aboutStyles from './about.module.scss';
import quotesStyles from './about-quotes.scss';

const About = () => {
	const data = useStaticQuery(graphql`
		query {
			logo: file(name: {eq: "ibhu-logo-black"}) {
				name
				publicURL
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
			story: file(name: {eq: "ibhu-story"}) {
				name
				publicURL
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
			creativity: allFile(filter: {relativeDirectory: {eq: "creativity"}}) {
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
			quotes: allFile(filter: {relativeDirectory: {eq: "quotes"}}) {
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
							fluid={data.logo.childImageSharp.fluid}
							alt={data.logo.name}
						/>
					</div>
					<Divider />
					<div className={aboutStyles.imageCentre}>
						<Img
							fluid={data.story.childImageSharp.fluid}
							alt={data.story.name}
						/>
					</div>
					<div className={aboutStyles.container}>
						<div>We dare to think <span>differently</span></div>
					</div>
				</div>
				<div className={aboutStyles.quoteContainer}>
					<div className={aboutStyles.quoteContent}>
						<Slider
							cssModules={quotesStyles}
							images={data.quotes}
							play={true}
							bullets={false}
							organicArrows={true}
							infinite={true}
							buttons={false}
							fillParent={false}
						/>
					</div>
				</div>
				<Divider />
				<div>
					The Ibhu brand was founded in the spirit of creativity and innovation, 
					it is the energy behind all of our Africa-centric products. Creativity 
					is at the core of Ibhu, from idea generation to product innovation.
				</div>
				<div>
					<div className={aboutStyles.creativityContainer}>
						<div className={aboutStyles.creativityContent}>
							<Slider
								images={data.creativity}
								play={false}
								bullets={true}
								organicArrows={true}
								infinite={true}
								buttons={true}
								fillParent={false}
							/>
						</div>
					</div>
					<div className={aboutStyles.quoteContainer}>
						<div className={aboutStyles.quoteContent}>
							<div className={aboutStyles.abcdContent}>
								<div>
									<span className={aboutStyles.abcd}>A</span>lways <span className={aboutStyles.abcd}>B</span>e <span className={aboutStyles.abcd}>C</span>onnecting the <span className={aboutStyles.abcd}>D</span>ots
									<p className={aboutStyles.abcdAttribute}>Richard Branson</p>
								</div>
							</div>
					</div>
				</div>
				</div>
				<Divider />
			</div>
		</Layout>
	)
}

export default About
