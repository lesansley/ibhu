import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

class Image extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filename: this.props.filename,
			alt: this.props.alt || ''
		}
	}

	render() {
		return (
			<StaticQuery
				query={graphql`
					query {
						allFile (filter: {sourceInstanceName: {eq: "images"}}) {
							edges {
								node {
									relativePath
									name
									childImageSharp {
										sizes(maxWidth: 2000) {
											...GatsbyImageSharpSizes
										}
									}
								}
							}
						}
					}
				`}

				render={(data) => {
					const image = data.allFile.edges.find(n => {
						return n.node.relativePath.includes(this.state.filename);
					});
					if (!image) { return null; }
					
					const imageSizes = image.node.childImageSharp.sizes;
					return (
						<Img
							alt={this.state.alt}
							sizes={imageSizes}
						/>
					);
				}}
			/>
		)
	}
}

Image.propTypes = {
	filename: PropTypes.string.isRequired,
	alt: PropTypes.string
}

export default Image
