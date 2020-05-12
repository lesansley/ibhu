import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Map from '../components/map';
import stockistsStyles from './stockists.module.scss';

const Stockists = () => {

	return (
		<Layout>
			<SEO title="Stockists page" />
			<h1>List of stockists</h1>
			<div className={stockistsStyles.mapContainer}>
				<Map />
			</div>
			
		</Layout>
	)
}

export default Stockists
