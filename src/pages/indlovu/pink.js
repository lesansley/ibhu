import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import PinkMenu from '../../components/pink-menu';
import Divider from '../../components/divider';
import ExpressionsIntro from '../../components/expressions-intro';
import RecommendedServe from '../../components/recommended-serve';
import expressionsStyles from './expressions.module.scss';


const Pink = () => {
	const intro = `<p>A bush delicacy for the Indlovu is the prickly pear cactus, especially the delicious, delicately flavoured fruit.</p>
		<p>Removing the prickles is no problem for these intelligent beasts who use their feet to rub away the thorns – we don’t advise trying this at home!</p>
		<p>The prickly pear contains polyphenols, minerals and vitamins and in traditional medicine, the pulp of the prickly pear fruit has been used to treat inflammation and even hangovers.</p>
		<p>Close your eyes, take a sip and indulge in flavours of the African elephants’ savannah delicacy.</p>`;
	
	let ingredients = () => {
		return (
			[	'1 measure Indlovu Pink gin',
				'2 measures of cranberry juice',
				'A few drops of raspberry liqueur',
				'Top up with Champagne',
				'Garnish a maraschino cherry']
		)
	}

	return (
		<Layout>
			<SEO title='Indlovu Pink Prickly Pear and Vanilla Gin' />
			<div className={expressionsStyles.menuContainer} >
				<div className={expressionsStyles.menu}>
					<PinkMenu />
				</div>
			</div>
			<div id='pink' className={expressionsStyles.hyperJump}>
				<h1 className={`${expressionsStyles.h1} all-caps`}>Indlovu <span className={expressionsStyles.pink}>Pink</span> <span className={expressionsStyles.large}>Gin</span></h1>
				<ExpressionsIntro
					imgName='lg-pink-banner.jpg'
					imgAlt='Elephant eating prickly pear'
					htmlText={intro}
				/>
			</div>	
			<div className={expressionsStyles.large}>
				<Divider />
			</div>
			<div id='recommendations' className={expressionsStyles.hyperJump}>
				<h2 className='all-caps'>Recommended Serve</h2>
				<h3 className={expressionsStyles.pink}>Afrodiziac Cocktail</h3>
				<RecommendedServe 
					img1Name='pink-gin-pouring.jpg'
					img1Alt='Indlovu pink gin cocktail being poured into a cocktail glass'
					img2Name='pink-bottle-and-box.jpg'
					img2Alt='Indlovu Pink gin bottle with the presentation box'
					ingredients={ingredients()}
				/>
			</div>
		</Layout>
	)
}

export default Pink
