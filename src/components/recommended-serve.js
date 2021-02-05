import React from 'react';
import Image from './image';
import recommendedServeStyles from './recommended-serve.module.scss';

const RecommendedServe = (data) => {
	let ingredientsList = () => {
		return ({__html:
			'<ul>' + data.ingredients.map(item => {
				return (`<li>${item}</li>`)
			}).join('') + '</ul>'})
	};

	return (
		<React.Fragment>
			<h3 className={recommendedServeStyles.pink}>{data.title}</h3>
			<div className={recommendedServeStyles.container}>
			<div className={`${recommendedServeStyles.image} ${recommendedServeStyles.item1}`}>
				<Image filename={`${data.img1Name}`} alt={`${data.img1Alt}`} />
			</div>
			<div className={recommendedServeStyles.item2} dangerouslySetInnerHTML={ingredientsList()}></div>
			<div className={`${recommendedServeStyles.image} ${recommendedServeStyles.item3} ${recommendedServeStyles.large}`}>
				<Image filename={`${data.img2Name}`} alt={`${data.img2Alt}`} />
			</div>
		</div>
		</React.Fragment>
	)
}

export default RecommendedServe
