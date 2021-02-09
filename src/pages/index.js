import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Media from '../components/media';
import Divider from '../components/divider';
import Intro from '../components/intro';

import '../styles/index.scss';

const Home = () => {
	return (
		<Layout banner={true}>
			<SEO title="Home page" />
			<Intro />
			<Divider />
			<Media />
		</Layout>
	)
}

export default Home
