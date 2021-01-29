import React from 'react';
import { Link } from 'gatsby';
import Image from '../components/image';
import Layout from '../components/layout';
import SEO from '../components/seo';

import indlovuStyles from './indlovu.module.scss';

const Indlovu = () => {
	return (
		<Layout>
			<SEO title='Indlovu Gin page' />
			<div className={indlovuStyles.imageContainer}>
				<div className={indlovuStyles.image}><Link to='/indlovu/original/'><Image filename='indlovu-original.jpg' alt='Original Indlovu gin'/></Link></div>
				<div className={indlovuStyles.image}><Link to='/indlovu/pink/'><Image filename='indlovu-pink.jpg' alt='Pink Indlovu gin' /></Link></div>
				<div className={indlovuStyles.image}><Link to='/indlovu/citrus/'><Image filename='indlovu-citrus.jpg' alt='Citrus Indlovu gin' /></Link></div>
			</div>
		</Layout>
	)
}

export default Indlovu
/**
INDLOVU GIN
An innovative premium gin for the adventurous spirit and the discerning gin collector.
The Ibhu brand is founded in the spirit of innovation, and Indlovu is our gin under that brand. Indlovu gin is made using multiple flavouring runs.
 */
