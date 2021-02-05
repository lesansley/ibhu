import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import CitrusMenu from '../../components/citrus-menu';
import Divider from '../../components/divider';
import ExpressionsIntro from '../../components/expressions-intro';
import RecommendedServe from '../../components/recommended-serve';
import expressionsStyles from './expressions.module.scss';


const Citrus = () => {
	const intro = `<p>Indlovu are passionate about the delicious tangy marula fruits growing naturally in the savannah and wild about oranges too. With their superior sense of smell, 
		an indlovu can sniff out an orange from a great distance so beware they may raid your vehicle for one of these juicy fruits!</p>
		<p>Marula and oranges contain high levels of antioxidants and vitamin C - a great support for the immune system.</p>
		<p>Close your eyes, take a sip and indulge in flavours of the African elephants’ favoured fruits</p>`;

		let ingredients = () => {
			return (
				[	'2 measures of Indlovu Citrus gin',
					'4 measures of fresh orange juice',
					'A splash of lime juice',
					'Top up with soda water',
					'Garnish with a sprig of rosemary & a slice of orange']
			)
		}
	
	return (
		<Layout>
			<SEO title='Indlovu Citrus Orange and Marula Gin' />
			<div className={expressionsStyles.menuContainer} >
				<div className={expressionsStyles.menu}>
					<CitrusMenu />
				</div>
			</div>
			<div id='citrus' className={expressionsStyles.hyperJump}>
				<h1 className={`${expressionsStyles.h1} all-caps`}>Indlovu <span className={expressionsStyles.orange}>Citrus</span> <span className={expressionsStyles.large}>Gin</span></h1>
				<ExpressionsIntro
					imgName='lg-citrus-banner.jpg'
					imgAlt='Two elephant at a water hole'
					htmlText={intro}
				/>
			</div>	
			<div className={expressionsStyles.large}>
				<Divider />
			</div>
			<div id='recommendations' className={expressionsStyles.hyperJump}>
				<h2 className='all-caps'>Recommended Serve</h2>
				<h3 className={expressionsStyles.orange}>Indlovu Fizz</h3>
				<RecommendedServe
					img1Name='citrus-cocktail.jpg'
					img1Alt='Indlovu citrus gin cocktail in a high ball glass'
					img2Name='citrus-bottle-and-box.jpg'
					img2Alt='Indlovu Citrus gin bottle with the presentation box'
					ingredients={ingredients()}
				/>
			</div>
		</Layout>
	)
}

export default Citrus
