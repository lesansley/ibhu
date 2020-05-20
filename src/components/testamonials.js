import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { v4 as uuid4 } from 'uuid';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import testamonialsStyles from './testamonials.module.scss';

const Testamonials = () => {
	const data = useStaticQuery(graphql`
		query {
			testamonials: allContentfulTestamonials {
				edges {
					node {
						name
						quote {
							json
						}
					}
				}
			}
		}
	`)
	
	return (
		<div>
			{data.testamonials.edges.map(edge => {
				return (
					<div>{edge.node.name}</div>
				)
			})}
		</div>

	)
}

export default Testamonials
