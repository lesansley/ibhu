import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { v4 as uuidv4 } from 'uuid';
import Img from 'gatsby-image';
import 'react-awesome-slider/dist/styles.css';
import sliderStyles from './slider.module.scss';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
	const data = useStaticQuery(graphql`
		query {
			allFile(filter: {relativeDirectory: {eq: "carousel"}}) {
				edges {
					node {
						childImageSharp {
							fluid {
								...GatsbyImageSharpFluid
							}
						}
						name
					}
				}
			}
		}
	`)
	return (
		<AutoplaySlider
			play={true}
			cancelOnInteraction={false} // should stop playing on user interaction
			interval={3000}
			className={sliderStyles.container}
		>
			{data.allFile.edges.map(edge => {
				return (
					<div key={uuidv4()} className={sliderStyles.imageContainer}>
						<Img
							className={sliderStyles.image}
							alt={edge.node.alt}
							fluid={edge.node.childImageSharp.fluid}
						/>
					</div>
				)
			})}
		</AutoplaySlider>
	)
}

export default Slider 
