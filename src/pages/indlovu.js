import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ExpressionsImages from '../components/expressions-images';

const Indlovu = () => {
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
		<Layout>
			<SEO title='Indlovu Gin page' />
			<ExpressionsImages data={expressionList}/>
		</Layout>
	)
}

export default Indlovu	
