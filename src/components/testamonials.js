import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { v4 as uuid4 } from 'uuid';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import testamonialsStyles from './testamonials.module.scss';

class Testamonials extends Component {
	constructor(props) {
		super(props);
		this.state = {
			idx: 0,
			count: 0
		}
	}

	text = ({ testamonials }) => {
		for (let i = 0; i < testamonials.totalCount; i++) {
			return (
				<div>{testamonials.edges[i].node.name}</div>
			)
		}
	}

	drcOptions = {
		renderNode: {
			[BLOCKS.PARAGRAPH]: (node, children) => (
				<p>{children}</p>
			)
		}
	};

	render() {
		return (
			<StaticQuery
				query={(graphql`
					query {
						testamonials: allContentfulTestamonials {
							totalCount
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
				`)}
				render={data => (
					<>
						<div>
							{data.testamonials.edges.map(edge => {
								return (
									<div className={testamonialsStyles.quoteBlock} key={uuid4()}>
										<div>{documentToReactComponents(edge.node.quote.json, this.drcOptions)}</div>
										<div className={testamonialsStyles.name}><p>{edge.node.name}</p></div>
									</div>
								)
							})}
						</div>
					</>
				)}
			/>
		)
	}
}

export default Testamonials
