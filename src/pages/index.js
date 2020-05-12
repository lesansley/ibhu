import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Media from '../components/media';

import '../styles/index.scss';

const Home = () => {
	return (
		<Layout banner={true}>
			<SEO title="Home page" />
			<Media />
		</Layout>
	)
}

export default Home
