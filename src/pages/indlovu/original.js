import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import OriginalMenu from '../../components/original-menu';

import originalStyles from './original.module.scss';

const Original = () => {
	return (
		<Layout>
			<SEO title='Original Gin page' />
			<OriginalMenu />
			<h1 className={originalStyles.heading}>Hi from the Original page</h1>
			<p>Welcome to Original page</p>
			<Link to='/'>Go back to the homepage</Link>
		</Layout>
	)
}

export default Original
/**
INDLOVU GIN
An innovative premium gin for the adventurous spirit and the discerning gin collector.
The Ibhu brand is founded in the spirit of innovation, and Indlovu is our gin under that brand. Indlovu gin is made using multiple flavouring runs.
 */
