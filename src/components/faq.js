import React from 'react'
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { useStaticQuery, graphql } from 'gatsby'
import Collapsible from 'react-collapsible';
import { v4 as uuidv4 } from 'uuid'
import List from './list'

import faqStyles from './faq.module.scss'

const FAQ = () => {
	const data = useStaticQuery(graphql`
		query {
			faq: allContentfulFaq {
				edges {
					node {
						answer {
							raw
						}
						question
					}
				}
			}
	}
	`)

	const drcOptions = {
		renderNode: {
			[BLOCKS.UL_LIST]: (node) => {
				return (<List data={node} />);
			}
		}
	}

	var edges = data.faq.edges.map(edge => {
		return ({ uid: uuidv4(), question: edge.node.question, answer: JSON.parse(edge.node.answer.raw) })
	});

	return (
		<div>
			{edges.map(edge => {
				return (
					<Collapsible
						key={edge.uid}
						transitionTime={400}
						trigger={edge.question}
						className={faqStyles.collapsible}
						triggerClassName={faqStyles.trigger}
						triggerOpenedClassName={`${faqStyles.open} ${faqStyles.trigger}`}
						contentOuterClassName={faqStyles.outer}
						contentInnerClassName={faqStyles.inner}
					>
						{documentToReactComponents(edge.answer, drcOptions)}
					</Collapsible>
				)
			})}
		</div>
	)
}

export default FAQ
