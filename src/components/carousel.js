import React from 'react';
import { CarouselProvider, Slider, Slide, Image, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import { useStaticQuery, graphql } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';

import 'pure-react-carousel/dist/react-carousel.es.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import carouselStyles from './carousel.module.scss';

const Carousel = () => {
	const data = useStaticQuery(graphql`
	query{
		allFile(filter: {relativeDirectory: {eq: "carousel"}}) {
			edges {
				node {
					relativePath
					name
					childImageSharp {
						# Specify a fluid image and fragment
						# The default maxWidth is 800 pixels
						fluid(maxWidth: 2000){
							...GatsbyImageSharpFluid
						}
					}
					publicURL
				}
			}
			totalCount
		}
	}
	`)
	
	return (
		<>
		<CarouselProvider
			naturalSlideWidth={400}
			naturalSlideHeight={250}
			totalSlides={data.allFile.totalCount}
			interval={3000}
			isPlaying
			infinite
			hasMasterSpinner
			lockOnWindowScroll
		>
			<div className={carouselStyles.container}>
				<Slider>
				{data.allFile.edges.map(edge => {
					return (
						<Slide key={uuidv4()} className={carouselStyles.listItem}>
							<Image
								tag={`img`}
								src={edge.node.publicURL}
								className={carouselStyles.image}
								/>
						</Slide>
					)
				})}
				</Slider>
				<ButtonBack className={carouselStyles.buttonBack}><MdKeyboardArrowLeft className={carouselStyles.arrow} /></ButtonBack>
				<ButtonNext className={carouselStyles.buttonNext}><MdKeyboardArrowRight className={carouselStyles.arrow} /></ButtonNext>
			</div>
			<DotGroup className={carouselStyles.dotGroup} />
			</CarouselProvider>
		</>
	)
}

export default Carousel
