import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { v4 as uuid4 } from 'uuid';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const TastingNotes = ({ gin }) => {
	const data = useStaticQuery(graphql`
		query {
			notes: allContentfulTastingNotes {
				edges {
					node {
						gin
						idx
						descriptor
						description {
							raw
						}
					}
				}
			}
		}
	`)
	
	const len = data.notes.edges.length;
	
	let notes = [];
	for (let i = 0; i < len; i++) {
		if (data.notes.edges[i].node.gin === gin) {
			notes.push(data.notes.edges[i].node);
		}
	}
	
	notes.sort((a, b) => (a.idx > b.idx) ? 1 : -1)
	
	const drcOptions = {
		renderNode: {
			[BLOCKS.PARAGRAPH]: (node, children) => (
				<p>{children}</p>
			)
		}
	};
	
	return (
		<div>
			<table>
				<tbody>
					{notes.map(note => {
						return (
							<tr key={uuid4()}>
								<th>{note.descriptor}</th>
								<td>{documentToReactComponents(JSON.parse(note.description.raw), drcOptions)}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}

TastingNotes.propTypes = {
	gin: PropTypes.oneOf(['original', 'pink', 'orange']).isRequired
}

export default TastingNotes
