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
				totalCount
				edges {
					node {
						name
						quote {
							raw
						}
					}
				}
			}
		}
	`)

	const drcOptions = {
		renderNode: {
			[BLOCKS.PARAGRAPH]: (node, children) => (
				<p>{children}</p>
			)
		}
	};

	return (
		<>
			<div>
				{data.testamonials.edges.map(edge => {
					return (
						<div className={testamonialsStyles.quoteBlock} key={uuid4()}>
							<div>{documentToReactComponents(JSON.parse(edge.node.quote.raw), drcOptions)}</div>
							<div className={testamonialsStyles.name}><p>{edge.node.name}</p></div>
						</div>
					)
				})}
			</div>
		</>
	)
}

export default Testamonials
