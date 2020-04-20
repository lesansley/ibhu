import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image'
import { v4 as uuidv4 } from 'uuid'

const Slider = () => {

		return (
			<StaticQuery
				query={graphql`
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
						}
					}
				`}
				
				render={data => (
					<>
						<h1>Slider.js</h1>
						<h2>Awesome Slider</h2>
						<AwesomeSlider
							cssModule={AwesomeSliderStyles}
						>
							<div>
							{data.allFile.edges.map( edge => {
							return (
								<div key={uuidv4()} data-src={edge.node.publicURL} />
							)
						})}
							</div>
						</AwesomeSlider>
						<h2>Div List</h2>
						<div>
							{data.allFile.edges.map( edge => {
								return (
									<div key={uuidv4()}>{edge.node.publicURL}</div>
								)
							})}
						</div>
						<h2>Img List</h2>
						<div>
							{data.allFile.edges.map( edge => {
								return (
									<div key={uuidv4()}><Img fluid={edge.node.childImageSharp.fluid} /></div>
								)
							})}
							</div>
					</>
				)}
			/>
		)
}

export default Slider
