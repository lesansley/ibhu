import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { v4 as uuid4 } from 'uuid';

const Recommendations = ({ gin }) => {
	const data = useStaticQuery(graphql`
		query {
			recommendations: allContentfulRecommendations {
				edges {
					node {
						name
						ingredients
						nickname
						gin
					}
				}
			}
		}
	`)
	
	var recommendations = [];
	const len = data.recommendations.edges.length;

	for (var i = 0; i < len; i++) {
		if (data.recommendations.edges[i].node.gin === gin) {
			recommendations.push(data.recommendations.edges[i].node);
		}
	}
	
	return (
		<div className='recommendationWrapper'>
			{ recommendations.map(n => {
				return (
					<div key={uuid4()} className='recommendationContainer'>
						<div classname='recommendationTitle'>{n.name}</div>
						<div classname='recommendationSubtitle'>{n.nickname}</div>
						<ul classname='recommendationIngredientList'>
							{n.ingredients.map(ingredient => {
								return (
									<li classname='recommendationIngredient' key={uuid4()}>{ingredient}</li>
								)
							})}
						</ul>
					</div>
				)
			})} 
		</div>
	)
}

export default Recommendations
