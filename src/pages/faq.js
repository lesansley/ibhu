import React from 'react'
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { useStaticQuery, graphql } from 'gatsby'
import Collapsible from 'react-collapsible';
import { v4 as uuidv4 } from 'uuid'
import Layout from '../components/layout'
import List from '../components/list'
import SEO from '../components/seo'

import faqStyles from './faq.module.scss'

const FAQ = () => {
	const data = useStaticQuery(graphql`
		query {
			allContentfulFaq {
				edges {
					node {
						answer {
							json
						}
						question
					}
				}
			}
	}
	`)

	const options = {
		renderNode: {
			[BLOCKS.UL_LIST]: (node) => {
				return (<List data={node} />);
			}
		}
	}

	var edges = data.allContentfulFaq.edges.map(edge => {
		return ({ uid: uuidv4(), question: edge.node.question, answer: edge.node.answer.json })
	});

	return (
		<Layout>
			<SEO title='FAQ' />
			<h1>Frequently asked questions</h1>
			<div className={faqStyles.container}>
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
							{documentToReactComponents(edge.answer, options)}
						</Collapsible>
					)
				})}
			</div>
			
		</Layout>
	)
}

export default FAQ
