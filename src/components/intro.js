import React from 'react';
import Youtube from '../components/youtube';
import Divider from '../components/divider';
import introStyles from '../components/intro.module.scss';
import ExpressionsImages from '../components/expressions-images';

const Intro = () => {
	const expressionList = [
		{
			page: '/indlovu/original/',
			imageName: 'original-infront-of-elephant.jpg',
			imageAlt: 'Original Indlovu gin',
			htmlText: 'Indlovu Original',
			color: 'red'
		},
		{
			page: '/indlovu/pink/',
			imageName: 'pink-at-marina.jpg',
			imageAlt: 'Pink Indlovu gin',
			htmlText: 'Indlovu Pink',
			color: 'pink'
		},
		{
			page: '/indlovu/citrus/',
			imageName: 'citrus-with-barkeeper.jpg',
			imageAlt: 'Citrus Indlovu gin',
			htmlText: 'Indlovu Citrus',
			color: 'orange'
		}
	]
	return (
		<React.Fragment>
			<div className={introStyles.headerSection}>
				<h1 className={`${introStyles.header}`}>
					<div>Gins made in Africa ...</div>
					<div className={introStyles.offsetRight}>Inspired by elephants</div> 
				</h1>
			</div>
			<div className={introStyles.images}>
				<ExpressionsImages data={expressionList} />
			</div>
			<Divider />
			<div className={introStyles.video}>
				<Youtube youtubeId='rGikK2Uy6TU' />
			</div>
		</React.Fragment>
	)
}

export default Intro
