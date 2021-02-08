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
				<div className={indlovuStyles.image}><Link className={indlovuStyles.link} to='/indlovu/original/'><Image filename='original-infront-of-elephant.jpg' alt='Original Indlovu gin'/><p className={`${indlovuStyles.p} ${indlovuStyles.red}`}><h2 className={indlovuStyles.allCaps}>Indlovu Original</h2></p></Link></div>
				<div className={indlovuStyles.image}><Link className={indlovuStyles.link} to='/indlovu/pink/'><Image filename='pink-at-marina.jpg' alt='Pink Indlovu gin' /><p className={`${indlovuStyles.p} ${indlovuStyles.pink}`}><h2 className={indlovuStyles.allCaps}>Indlovu Pink</h2></p></Link></div>
				<div className={indlovuStyles.image}><Link className={indlovuStyles.link} to='/indlovu/citrus/'><Image filename='citrus-with-barkeeper.jpg' alt='Citrus Indlovu gin' /><p className={`${indlovuStyles.p} ${indlovuStyles.orange}`}><h2 className={indlovuStyles.allCaps}>Indlovu Citrus</h2></p></Link></div>
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
