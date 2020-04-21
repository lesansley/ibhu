import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';
import mediaStyles from './media.module.scss';

const Media = () => {
	const data = useStaticQuery(graphql`
		query	{
			allFile(filter: {relativeDirectory: {eq: "media"}}) {
				edges {
					node {
						relativePath
						name
						childImageSharp {
							fluid(maxWidth: 2000) {
								base64
								tracedSVG
								srcWebp
								srcSetWebp
								originalImg
								originalName
								presentationWidth
								presentationHeight
							}
						}
						publicURL
						size
					}
				}
				totalCount
			}
		}
	`)
	
	return (
		<div>
			<h1>As featured by</h1>
			<div className={mediaStyles.container}>
				{data.allFile.edges.map( edge => {
					return (
						<div key={uuidv4()}>
							<img
								src={edge.node.publicURL}
								alt={edge.node.name}
								className={mediaStyles.image}
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Media
