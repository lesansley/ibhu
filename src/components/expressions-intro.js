import React from 'react';
import Image from './image';
import expressionsIntroStyles from './expressions-intro.module.scss';

const ExpressionsIntro = (data) => {
	function createMarkup() {
		return {__html: data.htmlText};
	}
	return (
		<div className={expressionsIntroStyles.container}>
			<div className={`${expressionsIntroStyles.image} ${expressionsIntroStyles.item1} ${expressionsIntroStyles.small}`}>
				<Image filename={`${data.imgName}`} alt={`${data.imgAlt}`} />
			</div>
			<div className={expressionsIntroStyles.item2} dangerouslySetInnerHTML={createMarkup()} />
		</div>
	)
}

export default ExpressionsIntro
