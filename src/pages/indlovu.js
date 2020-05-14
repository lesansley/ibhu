import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import Image from '../components/image';
import Layout from '../components/layout';
import SEO from '../components/seo';

import indlovuStyles from './indlovu.module.scss';

const Indlovu = () => {
	return (
		<Layout>
			<SEO title='Indlovu Gin page' />
			<div className={indlovuStyles.imageContainer}>
				<div className={indlovuStyles.image}><a href='/'><Image filename='indlovu-original-with-bottle.jpg' alt='Original Indlovu gin'/></a></div>
				<div className={indlovuStyles.image}><a href='/'><Image filename='indlovu-pink-with-bottle.jpg' alt='Pink Indlovu gin' /></a></div>
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
